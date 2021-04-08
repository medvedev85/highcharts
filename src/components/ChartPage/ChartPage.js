import React from 'react';
import ChartContainer from '../Chart/ChartContainer';
import AxisSelectContainer from '../AxisSelect/AxisSelectContainer';
import CheckBoxesContainer from '../CheckBoxes/CheckBoxesContainer';
//import { useAPI } from '../../api/api';
import { withRouter } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { getNewDataTable } from '../../redux/filterReduser';

const ChartPage = (props) => {
  let page = props.match.params.page;
  props.getNewDataTable(props.data);

  return (
    <>
      <article className="content">
        <ChartContainer data={props.data} />
      </article>

      <aside className="side">
        <AxisSelectContainer data={props.data} />
        <CheckBoxesContainer />
      </aside>
    </>
  );
}

let mapStateToProps = (state) => ({
  data: state.data
});

export default compose(
  connect(mapStateToProps, {
    getNewDataTable
  }),
  withRouter
)(ChartPage);