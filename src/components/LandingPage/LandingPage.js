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
import * as Icon from 'react-icons/lib/fa';


class LandingPage extends Component {


    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
    
      toggle() {
      this.setState({
        isOpen: !this.state.isOpen
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
          <Col className="Box">
            <Icon.FaChild size='120' className="Icon" />
            <h3>Lorem ipsum</h3>
            <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
          </Col>
          <Col className="Box">
            <Icon.FaBank size='120' className="Icon" />
            <h3>Nam liber</h3>
            <p>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. </p>
          </Col>
          <Col className="Box">
            <Icon.FaBell size='120' className="Icon" />
            <h3>Duis autem</h3>
            <p>Consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </Col>

        </Row>
            
      </Container>
    );
  }
}

export default LandingPage;
