import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './dashBoard.css';
import {Nav, NavItem, Collapse, Navbar} from 'reactstrap';
import {Link} from 'react-router-dom';

class dashBord extends Component {

  state = {
    contentTypes: this.props.contenttypes
  };



  static propTypes = {
    contenttypes: PropTypes.array
  };

  render() {
    let recive = this.props.contenttypes;
    let contentTypesObj = null;
    contentTypesObj = (
      <div>
        {recive.map((contentType, index) => {
          if (!contentType) {
            return;
          }
          return (
            <div key={index}>
              <strong>{contentType.title}</strong>
              <Nav vertical>
                <NavItem>
                  <Link
                    className="dashLink"
                    to={`/Administration/ContentType/${contentType._id}`}
                  >
                    All {contentType.title}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="dashLink"
                    to={`/Administration/Categories/${contentType._id}`}
                  >
                    Categories {contentType.title}
                  </Link>
                </NavItem>
                <NavItem>
                  <Link
                    className="dashLink"
                    to={`/Administration/Structure/${contentType._id}`}
                  >
                    Structure
                  </Link>
                </NavItem>
                {/*
                <NavItem>
                  <Link
                    className="dashLink"
                    to={`/Administration/View/${contentType._id}`}>
                    View
                  </Link>
                </NavItem> */}
              </Nav>
              <hr />
            </div>
          );
        })}
      </div>
    );

    return (
      <div className="style FontColor style-1" style={{overflowY: "scroll", webkitOverflowScrolling: "touch",maxHeight: "95vh"}}>
        <Navbar expand="md">


          <Collapse className='flex-column align-items-start' isOpen={this.props.isOpenOne} navbar>

        <Nav className="color" vertical>
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Sitestatus">
              Site Status
            </Link>
          </NavItem>
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Update">
              Update
            </Link>
          </NavItem>
        </Nav>

        <hr />

        <strong>Site Structure</strong>
        <div>
          <Nav vertical>
            <NavItem>
              <Link
                className="dashLinks"
                to="/Administration/main/ContentTypesList"
              >
                Content Types
              </Link>
            </NavItem>
            <NavItem>
              <Link className="dashLinks" to="/Administration/main/Menues">
                Menues
              </Link>
            </NavItem>
            <NavItem>
              <Link className="dashLinks" to="/Administration/main/AllFields">
                All Fileds
              </Link>
            </NavItem>
            {/*<NavItem>
          <Link className='dashLinks'  to="/Administration/main/FieldTypes">Field Types</Link>
        </NavItem>*/}
          </Nav>
        </div>

        <hr />
        <div>{contentTypesObj ? contentTypesObj : null}</div>
        <strong>Appearance</strong>
        <Nav vertical>
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Themes">
              Themes
            </Link>
          </NavItem>
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Custome">
              Custom
            </Link>
          </NavItem>
          {/*
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Blocks">
              Blocks
            </Link>
          </NavItem> */}
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/CustomeCode">
              Custom Code
            </Link>
          </NavItem>
          {/*
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Editor">
              Editor
            </Link>
          </NavItem> */}
        </Nav>

        <hr />

        <strong>Users</strong>
        <Nav vertical>
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/AllUsers">
              All Users
            </Link>
          </NavItem>
          {/*
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Roles">
              Roles
            </Link>
          </NavItem> */}
        </Nav>
        <hr />

        <Nav vertical>
          <NavItem>
            <Link
              className="dashLinks"
              to="/Administration/main/SettingsComponent"
            >
              Setting
            </Link>
          </NavItem>
        </Nav>

        <hr />
        {/*
        <Nav vertical>
          
          <NavItem>
            <Link className="dashLinks" to="/Administration/main/Plugins">
              Plugins
            </Link>
          </NavItem>
        </Nav>
      */}
        </Collapse>
      </Navbar>
      </div>
    );
  }
}

export default dashBord;
