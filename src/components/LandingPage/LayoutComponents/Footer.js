import React from "react";
import "../LandingPage.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Footer extends React.Component {
  render() {
    const style = { color: "white", height: "2.5em", marginTop: "1em" };
    const Copyright = { fontSize: "1em" };

    return (
      <Navbar className="Navbar" dark expand="md" style={style}>
        <NavbarBrand style={Copyright}>Copyright</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">AGB</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Privacy Policy</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}
