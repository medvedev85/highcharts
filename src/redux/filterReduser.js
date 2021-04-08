import { getState } from "../common/prepareTable";
import { getNewChartOptions } from "./chartReduser";

const X_AXIS_CHENGED = "X-AXIS-CHEGED";
const Y_AXIS_CHENGED = "Y-AXIS-CHEGED";
const CHECKBOX_CHECKED = "CHECKBOX-CHECKED";
const SET_NEW_FILTER = "SET_NEW_FILTER";

const initialState = {
  yAxisSelected: "",
  yAxisChoice: [],
  xAxisSelected: "",
  xAxisChoice: [""],
  checkbox: []
}

const filterReduser = (state = initialState, action) => {
  switch (action.type) {
    case SET_NEW_FILTER:
      let { newState } = action;

      let newCheckbox = (!state.checkbox.length) ? newState.checkbox : state.checkbox.map((item, id) => {
        return {
          checked: item.checked,
          color: newState.checkbox[id].color,
          key: newState.checkbox[id].key,
          value: newState.checkbox[id].value.toString(),
          visible: newState.checkbox[id].visible
        };
      })

      return {
        ...newState,
        checkbox: newCheckbox
      };

    case X_AXIS_CHENGED:
      return {
        ...state,
        xAxisSelected: action.select
      };

    case Y_AXIS_CHENGED:
      return {
        ...state,
        yAxisSelected: action.select
      };

    case CHECKBOX_CHECKED:
      let checkbox = [
        ...state.checkbox
      ];

      checkbox[action.id] = {
        color: state.checkbox[action.id].color,
        key: state.checkbox[action.id].key,
        value: state.checkbox[action.id].value,
        visible: state.checkbox[action.id].visible,
        checked: !state.checkbox[action.id].checked
      }

      return {
        ...state,
        checkbox: checkbox
      };
  }

  return state;
}

//-------------Action Creater-------------

export const setNewFilter = newState => ({ type: SET_NEW_FILTER, newState });

export const yAxisChange = select => ({ type: Y_AXIS_CHENGED, select });
export const xAxisChange = select => ({ type: X_AXIS_CHENGED, select });

export const checkBoxChecksCreator = id => ({ type: CHECKBOX_CHECKED, id });


//-------------Thunk----------------------

export const getNewDataTable = (inputData, yAxisSelected, xAxisSelected) => dispatch => {
  getState(inputData, yAxisSelected, xAxisSelected).then(data => {
    dispatch(setNewFilter(data));
  });
};

export const axisesChange = (inputData, yAxisSelected, xAxisSelected) => dispatch => {
  dispatch(getNewDataTable(inputData, yAxisSelected, xAxisSelected));

  if (yAxisSelected) {
    dispatch(yAxisChange(yAxisSelected));
  } else if (xAxisSelected) {
    dispatch(xAxisChange(xAxisSelected));
  }
}

export default filterReduser;