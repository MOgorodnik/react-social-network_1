import React from 'react';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';

import './index.css';
import App from './App';
// import * as serviceWorker from './serviceWorker';

const Demo = props => (
    <>
    <ScriptTag type="text/javascript" src="./scripts/jquery-3.1.1.min.js" />
    <ScriptTag type="text/javascript" src="./scripts/bootstrap.min.js" />
    <ScriptTag type="text/javascript" src="./scripts/script.js" />
    </>
);
console.log(Demo);

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Demo />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
