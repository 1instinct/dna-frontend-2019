import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App.js";
import "./index.css";

export const history = createBrowserHistory();

const preloadedState =
  typeof window !== "undefined" && window.__PRELOADED_STATE__;
// Allow the passed state to be garbage-collected
typeof window !== "undefined" && delete window.__PRELOADED_STATE__;

const { store } = configureStore(preloadedState);

hydrate(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById("root")
);
