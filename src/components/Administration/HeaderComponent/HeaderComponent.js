import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './HeaderComponent.css';
import {Link} from 'react-router-dom';
import {
  Button,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class TopHeader extends Component {
  constructor() {
    super();

    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout() {
    this.props.history.push('/Login');
    localStorage.clear('token');
  }

  render() {
    
    const textStyle = {color: 'black', fontSize: '14px', fontWeight: 'bold'};
    const LinkTextStyle = {textDecoration: 'none', color: 'black', fontSize: '14px', fontWeight: 'bold'}

    return (
      <div className="top" style={{display: 'inline'}}>


        <Navbar style={{background: '#85C1E9'}} className="Navbar" expand="md">
          <NavbarBrand style={textStyle} href="/">Dashbord</NavbarBrand>


          <NavbarToggler onClick={this.props.toggle}>Option</NavbarToggler>
          <NavbarToggler onClick={this.props.toggleSideBar}>Dashes</NavbarToggler>

          <Collapse isOpen={this.props.isOpen} navbar>
            <Nav className="ml-auto MediaCollapse" navbar>
  
              <Navbar className="navbar " expand="md">
                
                <NavItem className='marginRight' >
                <Link style={LinkTextStyle} to="/">Go to Web Site</Link>
                </NavItem>
                <NavItem className='marginRight' >
                <Link style={LinkTextStyle} to="/Administration/main/NewContentType">Create Node</Link>
                </NavItem>
                
                <UncontrolledDropdown nav inNavbar className='marginRight' >
                  <DropdownToggle style={textStyle} nav caret>New</DropdownToggle>
                    <DropdownMenu right style={{top: '4vh'}}>
                      <DropdownItem>Option 1</DropdownItem>
                      <DropdownItem>Option 2</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Reset</DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
  
                <NavItem className='marginRight' ><Button style={{border: 'none', background: 'none'}} onClick={this.handleLogout}>Sign out </Button></NavItem>
              </Navbar>
              

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
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopHeader;
