import React, {Component} from 'react';
import './dashBoard.css'
import { Nav, NavItem} from 'reactstrap';
import {Link} from 'react-router-dom';

class dashBord extends Component {

        state = {
         contentTypes: this.props.contenttypes
          }

  
render() {
  let recive = this.props.contenttypes;
let contentTypesObj = null;
        contentTypesObj = (
             <div>
                {recive.map((contentType) => {
                  console.log(contentType);
                   if(!contentType){
                    return;
                   }
                     return (
                           <div>
                             <strong>{contentType.title}</strong>
                             <Nav vertical>
                            <NavItem >
                              <Link className='dashLink' to={`/Administration/ContentType/${contentType._id}`}>All {contentType.title}</Link>
                            </NavItem>
                            <NavItem>
                              <Link className='dashLink' to={`/Administration/Categories/${contentType._id}`}>Categories {contentType.title}</Link>
                            </NavItem>
                             <NavItem>
                              <Link className='dashLink' to={`/Administration/Structure/${contentType._id}`}>Structure</Link>
                            </NavItem>
                            <NavItem>
                              <Link className='dashLink' to="#">View</Link>
                            </NavItem>
                            </Nav>
                             <hr />
                        </div>

                      );
                   
                })}   
             </div>
          )

return(
<div className="style FontColor">
  <strong>Dashbord</strong>
  <Nav className='color' vertical>
    <NavItem>
      <Link className='dashLinks'  to="/Administration/main/Sitestatus">Sitestatus</Link>
      </NavItem>
    <NavItem>
      <Link className='dashLinks'  to="/Administration/main/Update">Update</Link>
    </NavItem>
  </Nav>

  <hr />

  <strong>Site Structure</strong>
    <div>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/ContentTypesList">Content Types</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Menues">Menues</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/AllFields">All Fileds</Link>
        </NavItem>
        {/*<NavItem>
          <Link className='dashLinks'  to="/Administration/main/FieldTypes">Field Types</Link>
        </NavItem>*/}
      </Nav>
    </div>
    
  <hr />
  <div>
    {contentTypesObj}
    </div>
  <strong>Appearance</strong>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Themes">Themes</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Custome">Custome</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Blocks">Blocks</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/CustomeCode">Custome Code</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Editor">Editor</Link>
        </NavItem>
      </Nav>

  <hr />

  <strong>Users</strong>
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/AllUsers">All Users</Link>
        </NavItem>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Roles">Roles</Link>
        </NavItem>
      </Nav>
  <hr />
     
      <Nav vertical>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/SettingsComponent">Setting</Link>
        </NavItem>
      </Nav>

  <hr />

      <Nav vertical>
        <NavItem>
          <Link className='dashLinks'  to="/Administration/main/Plugins">Plugins</Link>
        </NavItem>
      </Nav>
</div>

);
}
}

export default dashBord;