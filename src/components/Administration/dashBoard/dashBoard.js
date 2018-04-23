import React, {Component} from 'react';
import './dashBoard.css'
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class dashBord extends Component {

render() {
const FontColor ={color: '#fff'};
return(
<div className="style">
  <strong>Dashbord</strong>
  <Nav className='color' vertical>
    <NavItem>
      <Link className='dashLinks' style={FontColor} to="/Administration/Sitestatus">Sitestatus</Link>
      </NavItem>
    <NavItem>
      <Link className='dashLinks' style={FontColor} to="/Administration/Update">Update</Link>
    </NavItem>
  </Nav>

  <hr />

  <strong>Site Structure</strong>
    <div>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/ContentTypesList">Content Types</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/menues">Menues</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/AllFields">All Fileds</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/FieldType">Field Type</Link>
        </NavItem>
      </Nav>
    </div>
    
  <hr />
    
    <div>
      {/* here will implent the post  
             <strong>Post</strong>
            <Nav vertical>
          <NavItem>
            <Link to="#">Link</Link>
          </NavItem>
          <NavItem>
            <Link to="#">Link</Link>
          </NavItem>
           <NavItem>
            <Link to="#">Link</Link>
          </NavItem>
          <NavItem>
            <Link to="#">Link</Link>
          </NavItem>
          </Nav>*/}  
    </div>
  <hr />
  <strong>Appearance</strong>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Themes">Themes</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Custome">Custome</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Blocks">Blocks</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/CustomeCode">Custome Code</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Editor">Editor</Link>
        </NavItem>
      </Nav>

  <hr />

  <strong>Users</strong>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/AllUsers">All Users</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Roles">Roles</Link>
        </NavItem>
      </Nav>
  <hr />
     
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/SettingsComponent">Setting</Link>
        </NavItem>
      </Nav>

  <hr />

      <Nav vertical>
        <NavItem>
          <Link className='dashLinks' style={FontColor} to="/Administration/Plugins">Plugins</Link>
        </NavItem>
      </Nav>
</div>

);
}
}

export default dashBord;