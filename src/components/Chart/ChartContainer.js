import React from 'react';
import { connect } from 'react-redux';
import { getNewChartOptions } from '../../redux/chartReduser';
import Chart from './Chart';

const chartContainer = (props) => {
  props.getNewChartOptions(props.data, props.filterOptions.yAxisSelected, props.filterOptions.xAxisSelected, [
    { key: 'complementary', value: 'false', color: '#0000CD' },
    { key: 'complementary', value: 'true', color: '#0000CD' }
  ]);

  return <Chart {...props} />
}

let mapStateToProps = (state) => ({
  options: state.chartOptions,
  filterOptions: state.filterOptions
});

export default connect(mapStateToProps, {getNewChartOptions})(chartContainer);