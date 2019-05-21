import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import App from './App.js';

const history = createHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));