import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../LandingPage.css';

export default class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      title: 'Reapress',
      menuItems: [
        {
          url: '/',
          name: 'Home'
        },
        {
          url: 'http://localhost:3000/Login',
          name: 'Login'
        }
      ],
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar className="Navbar" dark expand="md">
        <NavbarBrand href="/">{this.state.title}</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {this.state.menuItems.map((item, index) => {
              return (
                <NavItem key={index}>
                  <NavLink href={item.url}>{item.name}</NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
