import React from 'react';
import ReactDOM from 'react-dom';
// import ScriptTag from 'react-script-tag';

// https://chriscourses.com/blog/loading-fonts-webpack
// https://www.codegrepper.com/code-examples/javascript/add+image+in+react+

// how import js 4 ways
// https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668

import './fonts/ionicons.eot';
import './fonts/ionicons.svg';
import './fonts/ionicons.ttf';
import './fonts/ionicons.woff';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';
import $ from "jquery";
import 'jquery/src/jquery';
import 'bootstrap/dist/js/bootstrap';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

// const Demo = props => (
//     <>
//     <ScriptTag type="text/javascript" src="./scripts/jquery-3.1.1.min.js" />
//     <ScriptTag type="text/javascript" src="./scripts/bootstrap.min.js" />
//     <ScriptTag type="text/javascript" src="./scripts/script.js" />
//     </>
// );
// console.log(Demo);
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
