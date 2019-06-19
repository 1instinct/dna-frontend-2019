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
    path: "/about",
    component: "about",
    pageTitle: "ABOUT"
  },
  SINGLE_PRODUCT: {
    path: "/products/:productId",
    component: "singleProduct/index",
    pageTitle: "Single Product Page"
    // pageTitle: async () => { const { title } = await axios.get('pageTitles'); return title;}
  },
  CART: {
    path: "/cart",
    component: "cart/cart",
    pageTitle: "Cart"
  },
  CHECKOUT: {
    path: "/checkout",
    component: "checkout/checkout",
    pageTitle: "Checkout"
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
