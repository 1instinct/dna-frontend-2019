import React from "react";
import { hydrate } from "react-dom";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import configureStore from "./store";
import App from "./App.js";
import "./index.styl";
import "./app.scss";

// Font awesome import
import "@fortawesome/fontawesome-free/js/fontawesome";
import "@fortawesome/fontawesome-free/js/solid";
import "@fortawesome/fontawesome-free/js/regular";
import "@fortawesome/fontawesome-free/js/brands";
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
library.add(fas, far, fab);
dom.i2svg();

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
