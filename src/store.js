// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import reducers from "./reducers";

const routesMap = {
  ROOT: "/",
  HOME: "/home",
  DEMO: "/demo"
  // USER: "/user/:id"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware: routeMiddleware, enhancer } = connectRoutes(
    routesMap
  );

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  const middleware = applyMiddleware(routeMiddleware);
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

  return { store };
}
