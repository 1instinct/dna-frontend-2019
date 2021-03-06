/* global process */
/* eslint-disable no-console */
import "colors";
import React from "react";
import { Helmet } from "react-helmet";
import configureStore from "./configureStore";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../src/App";
import { createMemoryHistory } from "history";

export default ({ clientStats }) => async (req, res) => {
  const store = await configureStore(req);
  const sheet = new ServerStyleSheet();
  const history = createMemoryHistory({ initialEntries: [req.path] });
  const app = renderToString(
    <Provider store={store}>
      <StyleSheetManager sheet={sheet.instance}>
        <App history={history} />
      </StyleSheetManager>
    </Provider>
  );

  const helmet = Helmet.renderStatic();
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const chunkNames = flushChunkNames();

  const { js, styles, scripts, stylesheets } = flushChunks(clientStats, {
    chunkNames
  });

  const preloadedState = store.getState();
  console.log("preloadedState: ", preloadedState);

  console.log("PATH", req.path);
  console.log("DYNAMIC CHUNK NAMES RENDERED", chunkNames);
  console.log("SCRIPTS SERVED", scripts);
  console.log("STYLESHEETS SERVED", stylesheets);

  res.send(
    `<!doctype html>
      <html>
        <head>
          ${helmet.title.toString()}
          ${helmet.meta.toString()}
          ${helmet.link.toString()}
          <meta charset="utf-8">
          <title>${process.env.SITE_TITLE}</title>
          ${styles}
          ${styleTags}
          <script src="https://js.pusher.com/4.4/pusher.min.js"></script>
          <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/recipes/ServerRendering.html#security-considerations
          window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
            /</g,
            "\\u003c"
          )}
        </script>
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
        ${js}
      </html>`
  );
};
