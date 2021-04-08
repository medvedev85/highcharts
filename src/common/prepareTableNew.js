function unique(arr) {
  return Array.from(new Set(arr));
}

const dataAccumulate = (data) => {
  if (!data[0]) {
    console.log("data is empty!");
    return false;
  }

  let initialValue = {};

  for (let key in data[0]) {
    initialValue[key] = [];
  }

  return data.reduce((result, item, index) => {
    for (let key in result) {
      result[key].push(item[key]);

      if (index == data.length - 1 && result[key].length > 1) {
        result[key] = unique(result[key])
      }

      if (index == data.length - 1 && result[key].length <= 1 || key == "algorithm") {
        delete result[key];
      }
    }

    return result;
  }, initialValue);
}

const arrСomparison = (a, b) => {
  return a.filter(v => b.some(v2 => v == v2));
}

//------------------Filter options----------------------//
export const getState = (inputData, yAxisSelected, xAxisSelected) => {
  return new Promise(resolve => {
    const preferencesY = ["gmps", "gmps_total", "result"];
    const _skip_keys = ["external_stat_model", "gmps", "gmps_total", "result", "motifs_count"];
    const colors = ["#FF00FF", "#DC143C", "#A0522D", "#800080", "#9400D3", "#6A5ACD", "#008000", "#0000CD"]
    const initialFilterState = {
      yAxisSelected: "",
      yAxisChoice: [],
      xAxisSelected: "",
      xAxisChoice: [],
      checkbox: []
    }

    let data = dataAccumulate(inputData);

    initialFilterState.yAxisChoice = arrСomparison(Object.keys(data), preferencesY);
    initialFilterState.yAxisSelected = (yAxisSelected) ? yAxisSelected : initialFilterState.yAxisChoice[0];
    initialFilterState.xAxisChoice = Object.keys(data).filter(item => {

      for (let i = 0; i < _skip_keys.length; i++) {
        if (item == _skip_keys[i]) {
          return false;
        }
      }
      return true;
    });
    initialFilterState.xAxisSelected = (xAxisSelected) ? xAxisSelected : initialFilterState.xAxisChoice[0];

    for (let key in data) {
      let color = colors.pop();

      if (data[key].length < 10) {
        data[key].map(item => {
          initialFilterState.checkbox.push({
            key: key,
            color: color,
            value: item,
            checked: false,
            visible: (initialFilterState.yAxisSelected == key || initialFilterState.xAxisSelected == key) ? false : true
          });
        });
      }
    }

    resolve(initialFilterState);
  });
}

//------------------Chart options----------------------//
const getName = (data, checkbox) => {
  let seriesFilter = [];

  data.map(item => {
    let line = { name: [`${item.algorithm}`], key: { algorithm: item.algorithm } };
    let length = [];

    for (let i = 0; i < checkbox.length; i++) {
      let { key, value, color } = checkbox[i];
      length.push(key);

      if (item[key].toString() === value) {
        line.name.push(`<span style="color:${color}">_${value}</span>`);
        line.key[key] = value;
      }
    }

    length = Array.from(new Set(length)).length;

    if (line.name.length == length + 1) {
      let name = line.name.join('');
      seriesFilter.push({ name: name, keys: line.key });
    }
  });

  return [...seriesFilter.reduce((series, item) => (series.set(item.name, item), series), new Map()).values()];
}

let ___data = {
  xAxis: { categories: [ 10, 50, 100, 500, 1000 ], title: { text: 'count' } },
  yAxis: { title: { text: 'gmps' } },
  series: [
    {
      name: 'gpu_naive_full<span style="#0000CD">_false</span>',
      data: '[738.3516034985423,958.2813682457999,989.1212310576473,1013.180508881421,1016.2215302633902]'
    },
    {
      name: 'gpu_naive_external<span style="#0000CD">_false</span>',
      data: '[645.3990825688073,908.3737446197991,955.6777358490566,993.7476456554496,997.4816261904574]'
    },
    {
      name: 'gpu_naive_full<span style="#0000CD">_true</span>',
      data: '[900.3007465339496,1020.611751430644,1045.5561060193213,1057.7042908811468,1059.4299052909876]'
    },
    {
      name: 'gpu_naive_external<span style="#0000CD">_true</span>',
      data: '[860.8416130523455,1031.3552800130315,1053.317262352354,1071.4087594551147,1074.4906812839943]'
    }
  ]
};

export const getChart = (data, filterOptions) => {
  const { yAxisSelected, xAxisSelected, checkbox } = filterOptions;

  let checkedBox = checkbox.filter(item => {
    return item.checked;
  })

  return new Promise(resolve => {
    const initialState = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'Perfomance'
      },
      xAxis: {
        categories: [],
        title: {
          text: xAxisSelected
        }
      },
      yAxis: {
        title: {
          text: yAxisSelected
        }
      },
      series: []
    };

    let seriesFilter = getName(data, checkedBox);

    let series = seriesFilter.reduce((seriesArr, item) => {
      let optionData = [];

      for (let i = 0; i < data.length; i++) {
        let check = true;

        for (let key in item.keys) {

          if (item.keys[key] != data[i][key].toString()) {
            check = false;
          }
        }

        if (check) {
          initialState.xAxis.categories.push(data[i][xAxisSelected]);
          optionData.push(data[i][yAxisSelected]);
        }
      }

      //initialState.xAxis.categories = Array.from(new Set(initialState.xAxis.categories));
      //optionData = Array.from(new Set(optionData));

      seriesArr.push({
        name: item.name,
        data: optionData
      });

      return seriesArr;
    }, []);

    initialState.series = series;

    resolve(___data);
  });
}