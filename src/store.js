// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Routes } from "../src/constants";

import reducers from "./reducers";

export default function configureStore(preloadedState) {
  const { reducer, middleware: routeMiddleware, enhancer } = connectRoutes(
    Routes
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middleware = applyMiddleware(routeMiddleware, thunk, logger);
  const enhancers = [middleware];
  typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());

  const store = createStore(
    rootReducer,
    preloadedState,
    compose(
      enhancer,
      ...enhancers
    )
  );

  // const { location: { type, payload } } = store.getState();
  // store.dispatch({ type, payload });

  return { store };
}
