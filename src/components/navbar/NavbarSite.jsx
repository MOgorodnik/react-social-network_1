import React from "react";
import Navbar from "react-bootstrap/lib/Navbar";
import Nav from "react-bootstrap/lib/Nav";
import NavItem from "react-bootstrap/lib/NavItem";
import NavDropdown from "react-bootstrap/lib/NavDropdown";
import MenuItem from "react-bootstrap/lib/MenuItem";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";
import Button from "react-bootstrap/lib/Button";

import Logo from "./../../img/logo.png";
import ArrowDown from "./../../img/down-arrow.png";

const NavbarSite = () => {
  return (
    <>
      <Navbar default collapseOnSelect fixedTop className='menu' style={{top: '60px'}}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#brand">
              <img src={Logo} alt="logo" />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          {/* Add navList */}
          <Nav pullRight className='main-menu'>
            <NavDropdown eventKey={1} title="Home" wwnoCaret id="basic-nav-dropdown">
              {/* <span>
                <img src={ ArrowDown } alt="ArrowDown" />
              </span> */}
              <MenuItem eventKey={1.1}>1.1 Action</MenuItem>
              <MenuItem eventKey={1.2}>1.2 Another action</MenuItem>
              <MenuItem eventKey={1.3}>1.3 Something else here</MenuItem>
              <MenuItem eventKey={1.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={2} title="Newsfeed" id="basic-nav-dropdown">
              <MenuItem eventKey={2.1}>2.1 Action</MenuItem>
              <MenuItem eventKey={2.2}>2.2 Another action</MenuItem>
              <MenuItem eventKey={2.3}>2.3 Something else here</MenuItem>
              <MenuItem eventKey={2.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={3} title="Timeline" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>3.1 Action</MenuItem>
              <MenuItem eventKey={3.2}>3.2 Another action</MenuItem>
              <MenuItem eventKey={3.3}>3.3 Something else here</MenuItem>
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="All Pages" id="basic-nav-dropdown">
              <MenuItem eventKey={4.1}>Action</MenuItem>
              <MenuItem eventKey={4.2}>Another action</MenuItem>
              <MenuItem eventKey={4.3}>Something else here</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={4.4}>Separated link</MenuItem>
            </NavDropdown>

            <NavDropdown eventKey={4} title="Contact" noCaret></NavDropdown>

            {/* <NavItem eventKey={5} href="#">
              Contact
            </NavItem> */}
          </Nav>
          
          {/* Add search form */}
          <Navbar.Form pullRight>
            <form action="#">
            <FormGroup>
              <i class="icon ion-android-search"></i>
              <FormControl type="text" placeholder="Search friends, photos, videos" />
            </FormGroup>
            {/* <Button type="submit">Submit</Button> */}
            </form>
          </Navbar.Form>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default NavbarSite;
