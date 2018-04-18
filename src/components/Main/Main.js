import React, { Component } from 'react';
import './Main.css';
import AddContent from '../AddContent/AddContent';
import ContentTypes from '../ContentTypes/ContentTypes';
import SettingsComponent from '../SettingsComponent/SettingsComponent';
import ViewTable from '../ViewTable/ViewTable';


class Main extends Component {
  render() {
    if(this.props.activeLink === "/Administration/AddContent") {
      return ( <div> <AddContent/> </div>);
    } else if(this.props.activeLink === "/Administration/ContentTypes") {
      return (<div> <ContentTypes/> </div>);
    }  else if(this.props.activeLink === "/Administration/SettingsComponent"){
      return (<div> <SettingsComponent/> </div>);
    }  else {
      return (
        <div className='Main'>
        <ViewTable/>
        </div>
        );
      }
    }; 
  }

export default Main;
