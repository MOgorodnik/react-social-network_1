import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useEffect } from "react";

import Alert from "react-bootstrap/lib/Alert";
import Button from "react-bootstrap/lib/Button";

// import our fonts
import './fonts/ionicons.eot';
import './fonts/ionicons.svg';
import './fonts/ionicons.ttf';
import './fonts/ionicons.woff';

import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
// import Preloader from './components/preloader1/Preloader'

function App(props) {
    console.log(props);
    const {hideLoader, showLoader} = props;
    useEffect(hideLoader, []);

    return (
        <>
            <div className="App">
                <Header />
                <Header />
                <Navbar />
                11
                <Alert bsStyle="warning">
                    <strong>Holy guacamole!</strong>
                    Best check yo self, you're not looking too good.
                </Alert>
                11
            </div>
            {/*<Preloader />*/}
        </>
    );
}

export default App;
