import React, { Component } from 'react';
import './Main.css';
import AddContent from '../AddContent/AddContent';
import ContentTypes from '../ContentTypes/ContentTypes';
import SettingsComponent from '../SettingsComponent/SettingsComponent';


class Main extends Component {

  render() {
    if(this.props.history.path === "/Administration/AddContent") {
      return ( <div> <AddContent/> </div>)
    } else if(this.props.history.path === "/Administration/ContentTypes") {
      return (<div> <ContentTypes/> </div>)
    }  else if(this.props.history.path === "/Administration/SettingsComponent"){
      return (<div> <SettingsComponent/> </div>)
    }  else {
        <div className='Main'>
        </div>
      }
    }; 
  }

export default Main;
