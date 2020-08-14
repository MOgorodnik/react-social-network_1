import React from 'react';
import ReactDOM from 'react-dom';
// import ScriptTag from 'react-script-tag';

// https://chriscourses.com/blog/loading-fonts-webpack
// https://www.codegrepper.com/code-examples/javascript/add+image+in+react+

// how import js 4 ways
// https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668

// import our fonts
import './fonts/ionicons.eot';
import './fonts/ionicons.svg';
import './fonts/ionicons.ttf';
import './fonts/ionicons.woff';

// include jQuery
import 'jquery/src/jquery';
// import 'bootstrap/dist/js/bootstrap';
// include bootstrap

import 'bootstrap/dist/css/bootstrap.min.css';

import './index.css';

import App from './App';
// const Demo = props => (
//     <>
//     <ScriptTag type="text/javascript" src="./scripts/jquery-3.1.1.min.js" />
//     <ScriptTag type="text/javascript" src="./scripts/bootstrap.min.js" />
//     <ScriptTag type="text/javascript" src="./scripts/script.js" />
//     </>
// );
// console.log(Demo);

// import * as serviceWorker from './serviceWorker';

let $ = require("jquery");
console.log($);

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/*<Demo />*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
