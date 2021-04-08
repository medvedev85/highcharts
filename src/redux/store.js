import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import chartReduser from "./chartReduser";
import dataReduser from "./dataReduser";
import filterReduser from "./filterReduser";

const reducers = combineReducers({
  chartOptions: chartReduser,
  filterOptions: filterReduser,
  data: dataReduser
});

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware),
  // other store enhancers if any
);
const store = createStore(reducers, enhancer);

window.store = store;

export default store;