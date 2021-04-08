import { getChart } from "../common/prepareTable";

const SET_NEW_CHART = "SET_NEW_CHART";

const initialState = {};

const chartReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_CHART:
      return action.newState;
  }

  return state;
}

export const setNewChart = newState => ({ type: SET_NEW_CHART, newState });

//-------------Thunk----------------------

export const getNewChartOptions = (data, filterOptions) => dispatch => {
  getChart(data, filterOptions).then(data => {
    dispatch(setNewChart(data));
  });
};

export default chartReduser;