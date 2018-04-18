import React, { Component } from 'react';
import './Main.css';
import Sitestatus from '../SiteOverView/Sitestatus/Sitestatus';
import Update from '../SiteOverView/Update/Update';
import NewContentType from '../SiteStructure/NewContentType/NewContentType';
import ContentTypesList from '../SiteStructure/ContentTypesList/ContentTypesList';
import SettingsComponent from '../SettingsComponent/SettingsComponent';
import FieldTypes from '../SiteStructure/FieldTypes/FieldTypes';
import AllFields from '../SiteStructure/AllFields/AllFields';
import Themes from '../Appearance/Themes/Themes';
import CustomeCode from '../Appearance/CustomeCode/CustomeCode';
import Custome from '../Appearance/Custome/Custome';
import Editor from '../Appearance/Editor/Editor';
import Blocks from '../Appearance/Blocks/Blocks';
import AllUsers from '../Users/AllUsers/AllUsers';
import Roles from '../Users/Roles/Roles';

import Plugins from '../Plugins/Plugins';



class Main extends Component {




  render() {
  /*
    const Links = [NewContentType,ContentTypesList,SettingsComponent,FieldTypes,AllFields]
    const activatedLink = this.props.activeLink.split('/')[2]
    console.log(activatedLink)
    let workingLink = "";
    for (var i = 0; i < Links.length; i++) {
      if (Links[i] === activatedLink ) {
        return workingLink = activatedLink;
      }
    }
    return ( `<div> <${workingLink}/> </div>`);
    */

    if(this.props.activeLink === "/Administration/NewContentType") {
      return ( <div> <NewContentType/> </div>);
    } else if(this.props.activeLink === "/Administration/ContentTypesList") {
      return (<div> <ContentTypesList/> </div>);
    }  else if(this.props.activeLink === "/Administration/SettingsComponent"){
      return (<div> <SettingsComponent/> </div>);
    }  else if(this.props.activeLink === "/Administration/FieldTypes"){
      return (<div> <FieldTypes/> </div>);
    }  else if(this.props.activeLink === "/Administration/AllFields"){
      return (<div> <AllFields/> </div>);
    } else if(this.props.activeLink === "/Administration/Themes"){
      return (<div> <Themes/> </div>);
    } else if(this.props.activeLink === "/Administration/CustomeCode"){
      return (<div> <CustomeCode/> </div>);
    } else if(this.props.activeLink === "/Administration/Custome"){
      return (<div> <Custome/> </div>);
    } else if(this.props.activeLink === "/Administration/Editor"){
      return (<div> <Editor/> </div>);
    } else if(this.props.activeLink === "/Administration/Blocks"){
      return (<div> <Blocks/> </div>);
    } else if(this.props.activeLink === "/Administration/Plugins"){
      return (<div> <Plugins/> </div>);
    } else if(this.props.activeLink === "/Administration/AllUsers"){
      return (<div> <AllUsers/> </div>);
    } else if(this.props.activeLink === "/Administration/Roles"){
      return (<div> <Roles/> </div>);
    } else if(this.props.activeLink === "/Administration/Sitestatus"){
      return (<div> <Sitestatus/> </div>);
    } else if(this.props.activeLink === "/Administration/Update"){
      return (<div> <Update/> </div>);
    }  else {
      return (
        <div className='Main'>
        </div>
        );
      }
    }; 
  }

export default Main;
