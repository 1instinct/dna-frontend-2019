import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRoutes } from "redux-first-router";
import reducers from "../src/reducers";

export default async function configureStore(req) {
  const routesMap = {
    ROOT: "/",
    HOME: "/home",
    DEMO: "/demo",
    TRACKING: "/solutions/:category",
    DELIVERY: "/solutions/:category",
    INVENTORY: "/solutions/:category",
    RETAIL: "/solutions/:category",
    HOW_IT_WORKS: "/howitworks"
  };

  const { reducer, middleware, enhancer } = connectRoutes(routesMap, {
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
