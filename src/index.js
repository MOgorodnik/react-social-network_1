import React from 'react';
import ReactDOM from 'react-dom';
// https://chriscourses.com/blog/loading-fonts-webpack
// https://www.codegrepper.com/code-examples/javascript/add+image+in+react+native
import './fonts/ionicons.eot';
import './fonts/ionicons.svg';
import './fonts/ionicons.ttf';
import './fonts/ionicons.woff';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';
import './css/style.css';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
