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

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
    this.handleLogout = this.handleLogout.bind(this);
  }

  static propTypes = {
    contentTypes: PropTypes.array
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleLogout() {
    this.props.history.push('/Login');
    localStorage.clear('token');
  }

  render() {
    const marginRight = {marginRight: '1em'};
    const textStyle = {color: 'black', fontSize: '14px', fontWeight: 'bold'};
    const linkStyle = {textDecoration: 'none'};
    return (
      <div className="top" style={{display: 'inline'}}>
        <Navbar
          className="Navbar"
          dark
          expand="md"
          style={{background: '#85C1E9', height: '5vh', zIndex: 100}}>
          <NavbarBrand style={textStyle} href="/">
            Dashbord
          </NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavbarBrand
                style={{display: 'flex', padding: '0', margin: 'auto'}}>
                <NavItem style={marginRight}>
                  <Link style={(linkStyle, textStyle)} to="/">
                    Go to Web Site
                  </Link>
                </NavItem>
                <NavItem style={marginRight}>
                  <Link
                    style={(linkStyle, textStyle)}
                    to="/Administration/main/NewContentType">
                    Create Node
                  </Link>
                </NavItem>
              </NavbarBrand>
              <NavbarBrand>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret style={(linkStyle, textStyle)}>
                    New
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.props.contentTypes.map((content, index) => {
                      return (
                        <DropdownItem>
                          <Link
                            style={(linkStyle, textStyle)}
                            to={`/Administration/ContentType/${content._id}`}
                            key={index}>
                            {content.title}
                          </Link>
                        </DropdownItem>
                      );
                    })}
                    <DropdownItem>
                      <Link
                        style={(linkStyle, textStyle)}
                        to="/Administration/main/AllUsers">
                        Users
                      </Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavbarBrand>
              <Button
                style={{
                  padding: '0.1em 0.4em',
                  margin: '3% 0',
                  fontSize: '14px',
                  height: '1%'
                }}
                onClick={this.handleLogout}>
                Sign out{' '}
              </Button>

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
