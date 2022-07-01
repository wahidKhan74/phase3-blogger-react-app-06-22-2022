import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min';
import './index.css';
import { createStore } from 'redux';
import allReducer from './reducers';
import { Provider } from 'react-redux';


const store = createStore(
  allReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.window.__REDUX_DEVTOOLS_EXTENSION__()
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
