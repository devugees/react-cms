import React from "react";
import "../LandingPage.css";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footertext: ''
    };
  };
  componentWillMount() {
    fetch('http://localhost:5000/api/appearance')
      .then(resp => resp.json())
      .then(data => {
        this.setState({
          footertext: data[0].footertext
        });
      })
      .catch(() => {
        console.log(
          'No internet connection found. App is running in offline mode.'
        );
      });
  }

  render() {
    const style = { color: "white", height: "2.5em", marginTop: "1em" };
    const Copyright = { fontSize: "1em" };

    return (
      <Navbar className="Navbar" dark expand="md" style={style}>
        <NavbarBrand style={Copyright}>{this.state.footertext}</NavbarBrand>
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
