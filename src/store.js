// configureStore.js
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { connectRoutes } from "redux-first-router";

import rootReducer from "./reducers";

const routesMap = {
  HOME: "/",
  USER: "/user/:id"
};

export default function configureStore(preloadedState) {
  const { reducer, middleware, enhancer } = connectRoutes(routesMap);

  const rootReducer = combineReducers({ ...rootReducer, location: reducer });
  const middlewares = applyMiddleware(middleware);
  const enhancers = compose(
    enhancer,
    middlewares
  );

  const store = createStore(rootReducer, preloadedState, enhancers);

  return { store };
}
