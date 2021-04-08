import React from 'react';
import { connect } from 'react-redux';
import { axisesChange, xAxisChange, yAxisChange } from '../../redux/filterReduser'
import AxisSelect from './AxisSelect';

const AxisSelectContainer = (props) => {
  const getSelect = (choice) => {
    return choice.map(item => {
      return (
        <>
          <option value={item}>{item}</option>
        </>
      );
    })
  }

  props = {...props, getSelect}
  return <AxisSelect {...props} />
}


let mapStateToProps = (state) => ({
  xAxisSelected: state.filterOptions.xAxisSelected,
  yAxisSelected: state.filterOptions.yAxisSelected,
  xAxisChoice: state.filterOptions.xAxisChoice,
  yAxisChoice: state.filterOptions.yAxisChoice
});

export default connect(mapStateToProps, { yAxisChange, xAxisChange, axisesChange })(AxisSelectContainer);