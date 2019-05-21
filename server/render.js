import React from "react";
import { renderToString } from "react-dom/server";
import createHistory from "history/createMemoryHistory";
import { flushChunkNames } from "react-universal-component/server";
import flushChunks from "webpack-flush-chunks";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";
import App from "../src/App";

export default ({ clientStats }) => (req, res) => {
  const sheet = new ServerStyleSheet();
  const history = createHistory({ initialEntries: [req.path] });
  const app = renderToString(
    <StyleSheetManager sheet={sheet.instance}>
      <App history={history} />
    </StyleSheetManager>
  );
  const styleTags = sheet.getStyleTags();
  sheet.seal();

  const chunkNames = flushChunkNames();

  const { js, styles, scripts, stylesheets } = flushChunks(clientStats, {
    chunkNames
  });

  console.log("PATH", req.path);
  console.log("DYNAMIC CHUNK NAMES RENDERED", chunkNames);
  console.log("SCRIPTS SERVED", scripts);
  console.log("STYLESHEETS SERVED", stylesheets);

  res.send(
    `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>react-universal-component-boilerplate</title>
          ${styles}
          ${styleTags}
        </head>
        <body>
          <div id="root">${app}</div>
        </body>
        ${js}
      </html>`
  );
};
