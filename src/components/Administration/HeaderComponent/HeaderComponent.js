import React, {Component} from 'react';
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

    return (
      <div className="top" style={{display: 'inline'}}>
        <Navbar className="Navbar" dark expand="md">
          <NavbarBrand href="/">Dashbord</NavbarBrand>

          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavbarBrand
                style={{display: 'flex', padding: '.6em 0 0 0', margin: '0'}}>
                <NavItem style={marginRight}>
                  <Link to="/">Go to Web Site</Link>
                </NavItem>
                <NavItem style={marginRight}>
                  <Link to="/Administration/main/NewContentType">
                    Create Node
                  </Link>
                </NavItem>
              </NavbarBrand>

              <NavbarBrand>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    New
                  </DropdownToggle>
                  <DropdownMenu right>
                    {this.props.contentTypes.map((content, index) => {
                      return (
                        <DropdownItem>
                          <Link
                            to={`/Administration/ContentType/${content._id}`}
                            key={index}>
                            {content.title}
                          </Link>
                        </DropdownItem>
                      );
                    })}
                    <DropdownItem>
                      <Link to="/Administration/main/AllUsers">Users</Link>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </NavbarBrand>

              <NavbarBrand>
                <Button style={marginRight} onClick={this.handleLogout}>
                  Sign out{' '}
                </Button>
              </NavbarBrand>

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
