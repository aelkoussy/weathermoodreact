import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import axios from "axios";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./store/reducer";

import * as serviceWorker from "./serviceWorker";

// this shall point to the baseURL of the node.js server
axios.defaults.baseURL = "http://localhost:3000/api/";
//   "http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=881004c30eb4f93aa756c130be55edc3";

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk)
    // other store enhancers if any
  )
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
