import React from 'react';

const AxisSelect = (props) => {
  let { yAxisSelected, xAxisSelected, yAxisChoice, xAxisChoice, axisesChange, getSelect } = props;

  return (
    <>
      <div>y-Axis</div>
      <div>
        <select value={yAxisSelected} onChange={(event) => {axisesChange(props.data, event.target.value, null)}}>
          {getSelect(yAxisChoice)}
        </select>
      </div>

      <div>x-Axis</div>
      <div>
        <select value={xAxisSelected} onChange={(event) => {axisesChange(props.data, null, event.target.value)}}>
          {getSelect(xAxisChoice)}
        </select>
      </div>
    </>
  );
}

export default AxisSelect;