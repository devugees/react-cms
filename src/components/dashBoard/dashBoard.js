import React, {Component} from 'react';
import './dashBoard.css'
import { Nav, NavItem, NavLink } from 'reactstrap';


class dashBord extends Component {



  
  render() {
  const FontColor ={color: '#fff'};
    return(
  <div className="style">
        <strong>Dashbord</strong>
        <Nav className='color' vertical>
          <NavItem>
            <NavLink style={FontColor} href="#">Sitestatus</NavLink>
            </NavItem>
          <NavItem>
            <NavLink style={FontColor} href="#">Update</NavLink>
          </NavItem>
        </Nav>

        <hr />

        <strong>Site Structure</strong>
          <div>
            <Nav vertical>
              <NavItem>
                <NavLink style={FontColor} href="/contentType">Content Type</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="/Menues">Menues</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="/allFields">All Fileds</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Field Type</NavLink>
              </NavItem>
            </Nav>
          </div>
          
        <hr />
          
          <div>
            {/* here will implent the post  
                   <strong>Post</strong>
                  <Nav vertical>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                 <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="#">Link</NavLink>
                </NavItem>
                </Nav>*/}  
          </div>
        <hr />
        <strong>Appearance</strong>
            <Nav vertical>
              <NavItem>
                <NavLink style={FontColor} href="#">Themes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Custome</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Blocks</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Custome Code</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Link</NavLink>
              </NavItem>
            </Nav>

        <hr />

        <strong>Users</strong>
            <Nav vertical>
              <NavItem>
                <NavLink style={FontColor} href="#">All Users</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={FontColor} href="#">Roles</NavLink>
              </NavItem>
            </Nav>
        <hr />
           
            <Nav vertical>
              <NavItem>
                <NavLink style={FontColor} href="#">Setting</NavLink>
              </NavItem>
            </Nav>

        <hr />

            <Nav vertical>
              <NavItem>
                <NavLink style={FontColor} href="#">Plugins</NavLink>
              </NavItem>
            </Nav>
  </div>

    );
  }
}

export default dashBord;