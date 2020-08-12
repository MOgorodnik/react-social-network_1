import React from 'react';

// https://chriscourses.com/blog/loading-fonts-webpack
// https://www.codegrepper.com/code-examples/javascript/add+image+in+react+

// how import js 4 ways
// https://medium.com/better-programming/4-ways-of-adding-external-js-files-in-reactjs-823f85de3668

import './fonts/ionicons.eot';
import './fonts/ionicons.svg';
import './fonts/ionicons.ttf';
import './fonts/ionicons.woff';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/src/jquery';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import '../node_modules/bootstrap/dist/js/bootstrap.min';

import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'



function App() {
    return (
        <>
        <div className="App">
            <Header />
            <Header />
            <Navbar />
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
        </>
    );
}

export default App;
