import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import { connectRoutes } from "redux-first-router";
// import createHistory from 'history/createMemoryHistory'
import reducers from "../src/reducers";

export default async function configureStore() {
  // const history = createHistory({ initialEntries: [req.path] })

  const routesMap = {
    ROOT: "/",
    HOME: "/home",
    DEMO: "/demo"
    // USER: "/user/:id"
  };

  const { reducer, middleware, enhancer, thunk } = connectRoutes(routesMap); // notice `thunk`
  const rootReducer = combineReducers({ ...reducers, location: reducer });
  // note the order that the enhancer and middleware are composed in: enhancer first, then middleware
  const store = createStore(
    rootReducer,
    compose(
      enhancer,
      applyMiddleware(middleware)
    )
  );

  // using redux-thunk perhaps request and dispatch some app-wide state as well, e.g:
  // await Promise.all([ store.dispatch(myThunkA), store.dispatch(myThunkB) ])

  await thunk(store); // THE WORK: if there is a thunk for current route, it will be awaited here

  return store;
}
