import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component, useEffect } from "react";

import Alert from "react-bootstrap/lib/Alert";
import Button from "react-bootstrap/lib/Button";

// import our fonts
import "./fonts/ionicons.eot";
import "./fonts/ionicons.svg";
import "./fonts/ionicons.ttf";
import "./fonts/ionicons.woff";

import "./App.css";
import Header from "./components/header/Header";
import NavbarSite from "./components/navbar/NavbarSite";
// import Nav from "./components/navbar/Nav";
// import NavItem from "./components/navbar/NavItem";
// import NavDropdown from "./components/navbar/NavDropdown";
// import MenuItem from "./components/navbar/MenuItem";
// import Preloader from './components/preloader1/Preloader'

function App(props) {
  console.log(props);
  const { hideLoader, showLoader } = props;
  useEffect(hideLoader, []);

  return (
    <>
      <div className="App">
        <Header />
        <hr />
        <NavbarSite />
        {/* <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
            </NavItem>
            <NavItem eventKey={2} href="#">
              Link
            </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar> */}
        ; 11
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
