import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import styles from './Chart.module.css';

const Chart = (props) => {
  return (
    <div className={styles.chartContainer}>
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </div>
  );
}

export default Chart;