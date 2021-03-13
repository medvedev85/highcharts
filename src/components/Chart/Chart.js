import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Chart = (props) => {
  return (
    <>
      <h3>GMPC, Length = 10</h3>
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </>
  );
}

export default Chart;