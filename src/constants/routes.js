/* global process */
const routeConfig = {
  ROOT: {
    path: "/",
    component: "home",
    pageTitle: process.env.SITE_TITLE
  },
  HOME: {
    path: "/home",
    component: "home",
    pageTitle: process.env.SITE_TITLE
  },
  DEMO: {
    path: "/demo",
    component: "demo",
    pageTitle: "Demo"
  },
  TRACKING: {
    path: "/solutions/:category",
    component: "solutions",
    pageTitle: "Solutions"
  },
  DELIVERY: {
    path: "/solutions/:category",
    component: "solutions",
    pageTitle: "Solutions - Delivery"
  },
  INVENTORY: {
    path: "/solutions/:category",
    component: "solutions",
    pageTitle: "Solutions - Inventory"
  },
  RETAIL: {
    path: "/solutions/:category",
    component: "solutions",
    pageTitle: "Solutions - RETAIL"
  },
  HOW_IT_WORKS: {
    path: "/howitworks",
    component: "howitworks",
    pageTitle: "HOW IT WORKS"
  },
  ABOUT: {
    path: "/howitworks",
    component: "about",
    pageTitle: "ABOUT"
  }
};

const RoutePaths = Object.keys(routeConfig).reduce((paths, key) => {
  paths[key] = routeConfig[key].path;
  return paths;
}, {});

const RouteComponents = Object.keys(routeConfig).reduce((paths, key) => {
  paths[key] = routeConfig[key].component;
  return paths;
}, {});

const RouteTitles = Object.keys(routeConfig).reduce((paths, key) => {
  paths[key] = routeConfig[key].pageTitle;
  return paths;
}, {});

export default {
  RoutePaths,
  RouteComponents,
  RouteTitles
};
