import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRoutes } from "redux-first-router";
import reducers from "../src/reducers";
import { Routes } from "../src/constants";

export default async function configureStore(req) {
  const { reducer, middleware, enhancer } = connectRoutes(Routes.RoutePaths, {
    initialEntries: [req.path]
  }); // notice `thunk`

  const rootReducer = combineReducers({ ...reducers, location: reducer });
  // note the order that the enhancer and middleware are composed in: enhancer first, then middleware
  const store = createStore(
    rootReducer,
    compose(
      enhancer,
      applyMiddleware(middleware)
    )
  );
  // const { location: { type, payload } } = store.getState();

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:

  // await thunk(store.dispatch({ type, payload })) // THE WORK: if there is a thunk for current route, it will be awaited here

  return store;
}
