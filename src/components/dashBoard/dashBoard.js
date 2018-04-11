import React, {Component} from 'react';
import './dashBoard.css'
import FaBeer from 'react-icons/lib/fa/beer';
import { Nav, NavItem, NavLink } from 'reactstrap';


class SideMenu extends Component {
	render() {
		return(
	 <div className="col-2 style">
        <strong>Dashbord</strong>
        <Nav vertical>
          <NavItem>
            <NavLink href="#">Sitestatus</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Update</NavLink>
          </NavItem>
        </Nav>
        <hr />

        <strong>Site Structure</strong>
        <div className="nomargin">
         <Nav vertical>
          <NavItem>
            <NavLink href="#">Content Type</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Menues</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="#">All Fileds</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Field Type</NavLink>
          </NavItem>
          </Nav>
          </div>
            <hr />
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
          </Nav>
             <hr />
         <strong>Appearance</strong>
          <Nav vertical>
          <NavItem>
            <NavLink href="#">Themes</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Custome</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="#">Blocks</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Custome Code</NavLink>
          </NavItem>
           <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          </Nav>
              <hr />
           <strong>Users</strong>
         <Nav vertical>
          <NavItem>
            <NavLink href="#">ALl Users</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Roles</NavLink>
          </NavItem>
          </Nav>
          <hr />
           <Nav vertical>
            <NavItem>
            <NavLink href="#">Setting</NavLink>
          </NavItem>
          </Nav>
           <hr />
            <Nav vertical>
            <NavItem>
            <NavLink href="#">Plugins</NavLink>
          </NavItem>
          </Nav>
      </div>

		);
	}
}

export default SideMenu;