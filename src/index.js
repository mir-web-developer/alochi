import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import {allReducers} from "./reducers/allReducers"
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";



const store = createStore(allReducers)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
