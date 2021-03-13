import { combineReducers, createStore } from "redux";
import chartReduser from "./chartReduser";

const redusers = combineReducers({
  chartOptions: chartReduser
});

const store = createStore(redusers);

export default store;