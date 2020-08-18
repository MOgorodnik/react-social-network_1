import React, { useEffect} from 'react';
import ReactDOM from 'react-dom';

// https://chriscourses.com/blog/loading-fonts-webpack
// https://www.codegrepper.com/code-examples/javascript/add+image+in+react+

// how import js 4 ways
// https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668

import './index.css';

import App from './App';

// import * as serviceWorker from './serviceWorker';

const loader = document.querySelector('#spinner-wrapper');
console.log(loader);

// if you want to show the loader when React loads data again
const showLoader = () => loader.setAttribute('hidden', false);

const hideLoader = () => loader.setAttribute('hidden', true);

// the setTimeout simulates the time it takes react to load, and is not part of the solution
setTimeout(() =>
    // the show/hid
    ReactDOM.render(
        <React.StrictMode>
            <App hideLoader={hideLoader} showLoader={showLoader} />
        </React.StrictMode>,
        document.getElementById('root')
    ), 1000);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
