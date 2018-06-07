import React, { Component } from 'react';
import './HeaderComponent.css';
import {Link} from 'react-router-dom';
import {
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
  DropdownItem
   } from 'reactstrap';

  class TopHeader extends Component {

  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
      logout: ''
    };
    //localStorage.getItme("token")
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

   logOut() {
    localStorage.removeItem("token");
  }

  render() {
  const fontSize ={fontSize:'.9rem'};

  const style ={backgroundColor: '#555', height: '3rem', fontSize: '1rem'};

  const textColor ={color: '#fff'};

    return (
      <div className="top">
        <Navbar style={style} light expand="md">
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav  style={fontSize} navbar>
              <NavItem>
                <NavLink style={textColor} href="/">Go to Website</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle style={textColor} nav caret>
                  New
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <Link style={textColor} to="/Administration/main/NewContentType">Create Node</Link>
              </NavItem>
            </Nav>

          <NavbarBrand style={fontSize} className="ml-auto">
              <UncontrolledDropdown>
                <DropdownToggle style={textColor} caret>
                  My Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <img alt='User Img' src='https://i.ebayimg.com/images/g/oawAAOSwi0RX0uyP/s-l300.jpg' />
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='gfgfgfg' href="#"> My Account </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink className='gf58585g' onClick={this.logOut}> <Link to="/login">Sign out </Link></NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
          </NavbarBrand>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
export default TopHeader;