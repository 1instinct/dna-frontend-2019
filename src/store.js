// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";
import thunk from "redux-thunk";
import logger from "redux-logger";

import reducers from "./reducers";

const routesMap = {
  ROOT: "/",
  HOME: "/home",
  DEMO: "/demo",
  TRACKING: "/solutions/:category",
  DELIVERY: "/solutions/:category",
  INVENTORY: "/solutions/:category",
  RETAIL: "/solutions/:category",
  HOW_IT_WORKS: "/howitworks"
  // USER: "/user/:id"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware: routeMiddleware, enhancer } = connectRoutes(
    routesMap
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
