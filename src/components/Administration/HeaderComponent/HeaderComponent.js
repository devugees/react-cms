import React, {Component} from 'react';
import './HeaderComponent.css';
import {Link} from 'react-router-dom';
import { Button, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, } from 'reactstrap';

class TopHeader extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    this.handleLogout = this.handleLogout.bind(this)
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  handleLogout() {
    this.props.history.push("/Login");
    localStorage.clear("token")
  }

  render() {
    const fontSize = {fontSize: '.9rem'};
    const style = {backgroundColor: '#555', height: '3rem', fontSize: '1em', marginTop: 'auto'};
    const textColor = {color: '#fff'};
    return (
      <div className="top">
        <Navbar style={style} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav style={fontSize} navbar>
              <NavItem>
                <Link style={textColor} to="/">
                  Go to Web Site
                </Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={textColor} nav caret>
                  New
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link
                  style={textColor}
                  to="/Administration/main/NewContentType">
                  Create Node
                </Link>
              </NavItem>
            </Nav>

            <NavbarBrand style={fontSize} className="ml-auto">
              <Button style={{fontSize: '1em'}} onClick={this.handleLogout}>Sign out </Button>

              {/* <UncontrolledDropdown>
                <DropdownToggle style={textColor} caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <img
                      alt="User Img"
                      src="https://i.ebayimg.com/images/g/oawAAOSwi0RX0uyP/s-l300.jpg"
                    />
                  </DropdownItem>
                  <DropdownItem>
                    {' '}
                    My Account{' '}
                  </DropdownItem>
                  <DropdownItem>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              */}
            </NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopHeader;
