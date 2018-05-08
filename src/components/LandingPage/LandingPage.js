import React, { Component } from 'react';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    Row,
    Jumbotron,
    Col,
    DropdownItem } from 'reactstrap';
import './LandingPage.css';
import axios from 'axios';


class LandingPage extends Component {


    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    
  render() {

    const landingPage = {
        margin: '0',
        padding: '0'
      };
    

    return (
      <Container style={landingPage} fluid>
        <Navbar className="Navbar" dark expand="md">
          <NavbarBrand href="/">KinoView</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        
        <Jumbotron fluid className="Jumbotron">
            <Container fluid>
            <h1 className="display-3">Watch your favourite movie</h1>
            <p className="lead">Just do what you read above!</p>
            </Container>
        </Jumbotron>

        <Row>

        </Row>
            
      </Container>
    );
  }
}

export default LandingPage;
