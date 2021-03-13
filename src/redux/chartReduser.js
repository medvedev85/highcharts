const UPDETE_CHART_TYPE = 'UPDETE-CHART-TYPE';
const UPDETE_X_AXIS = 'UPDETE-XAXIS';
const UPDETE_Y_AXIS = 'UPDETE-YAXIS';
const UPDETE_TITLE_CHART = 'UPDETE-TITLE-CHART';
const UPDETE_SERIES_CHART = 'UPDETE-SERIES-CHART';
const CLEAN_CHART = 'CLEAN-CHART';

const initialState = {
  chart: {
    type: 'line'
  },
  xAxis: {
    gridLineWidth: 0, //линии сетки (включить: 1)
    categories: ['Apples', 'Bananas', 'Oranges'],
  },
  yAxis: {
    gridLineWidth: 1,
    title: {
      text: 'скорость'
    }
  },
  title: {
    text: ''
  },
  subtitle: {
    text: 'dlkgjsdofhgsrhgllerkjgkj'
  },
  series: [
    {
      name: "kdjfjghgng",
      color: "red",
      data: [1, 2, 1, 4, 3, 6]
    }, {
      name: 'sssssss',
      color: "yellow",
      data: [5, 7, 3, 1, 4, 3]
    }, {
      name: 'Jane',
      data: [1, 0, 4, 1, 2, 1]
    }
  ]
};

const chartReduser = (state = initialState, action) => {
  switch (action.type) {
    case UPDETE_CHART_TYPE:
      state.chart.type = action.chart.type;
      break;

    case UPDETE_X_AXIS:
      state.xAxis.gridLineWidth = action.xAxis.gridLineWidth;
      state.xAxis.categories = action.xAxis.categories;
      state.xAxis.title.text = action.xAxis.title.text;
      break;

    case UPDETE_Y_AXIS:
      state.yAxis.gridLineWidth = action.yAxis.gridLineWidth;
      state.yAxis.categories = action.yAxis.categories;
      state.yAxis.title.text = action.yAxis.title.text;
      break;

    case UPDETE_TITLE_CHART:
      state.title.text = action.title.text;
      state.subtitle.text = action.subtitle.text;
      break;

    case UPDETE_SERIES_CHART:
      state.series.push({ name: action.name, color: action.color, data: action.data });
      break;

    case CLEAN_CHART:
      state = false;
      break;
  }
  return state;
}

export const chartTypeCreator = (type) => {
  return {
    type: UPDETE_CHART_TYPE,
    chart: {
      type: type
    }
  }
}

export const xAxisCreator = (gridLineWidth, categories, title) => {
  return {
    type: UPDETE_X_AXIS,
    xAxis: {
      gridLineWidth: gridLineWidth, //линии сетки (отключить: 0, включить: 1)
      categories: categories,
      title: {
        text: title
      }
    }
  }
}

export const yAxisCreator = (gridLineWidth, categories, title) => {
  return {
    type: UPDETE_X_AXIS,
    yAxis: {
      gridLineWidth: gridLineWidth, //линии сетки (отключить: 0, включить: 1)
      categories: categories,
      title: {
        text: title
      }
    }
  }
}

export const titleChartCreator = (title, subtitle) => {
  return {
    type: UPDETE_TITLE_CHART,
    title: {
      text: title
    },
    subtitle: {
      text: subtitle
    }
  }
}

export const seriesChartCreator = (name, color, data) => {
  return {
    type: UPDETE_SERIES_CHART,
    name: name,
    color: color,
    data: data
  }
}

export const dataChartCleaner = () => {
  return {
    type: CLEAN_CHART
  }
}

export default chartReduser;