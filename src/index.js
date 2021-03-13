import React from 'react';
import ReactDOM from 'react-dom';
import store from './redux/store';
import App from './App';
import './index.css';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
  rerenderEntireTree(store.getState());
});