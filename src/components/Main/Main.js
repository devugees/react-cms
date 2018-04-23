import React, { Component } from 'react';
import './Main.css';
import Sitestatus from '../SiteOverView/Sitestatus/Sitestatus';
import Update from '../SiteOverView/Update/Update';
import AddContent from '../AddContent/AddContent';
import ContentTypes from '../ContentTypes/ContentTypes';
import SettingsComponent from '../SettingsComponent/SettingsComponent';
import FieldTypes from '../FieldTypes/FieldTypes';
import AllFields from '../AllFields/AllFields';
import Themes from '../Appearance/Themes/Themes';
import CustomeCode from '../Appearance/CustomeCode/CustomeCode';
import Custome from '../Appearance/Custome/Custome';
import Editor from '../Appearance/Editor/Editor';
import Blocks from '../Appearance/Blocks/Blocks';
import AllUsers from '../Users/AllUsers/AllUsers';
import Roles from '../Users/Roles/Roles';

import Plugins from '../Plugins/Plugins';


let finalLink;


class Main extends Component {
      
      constructor(props) {
        super(props);
        this.state = {
          Links: [ 
            AddContent,
            ContentTypes,
            SettingsComponent,
            FieldTypes,
            AllFields,
            Themes,
            CustomeCode,
            Custome,
            Editor,
            Blocks,
            Plugins,
            AllUsers,
            Roles,
            Sitestatus,
            Update
           ]
        }
        this.handleRoute = this.handleRoute.bind(this);
      }
  
  handleRoute(){
    console.log(this.state.Links)
  const activatedLink = this.props.activeLink.split('/')[2]
  const Links = this.state.Links;
 Links.map((link,index) => {
  //console.log(link)
  //console.log(link.name)

      if (activatedLink == `/Administration/${link.name}` ) {
        console.log("hihihi",link)
        finalLink = <div> {link[index]}</div>
    
    }
 })
      };

  render() {
    this.handleRoute()

return(

   <div> {finalLink}</div>
  )

/*
    if(this.props.activeLink === "/Administration/AddContent") {
      return ( <div> <AddContent/> </div>);
    } else if(this.props.activeLink === "/Administration/ContentTypes") {
      return (<div> <ContentTypes/> </div>);
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
      }*/
    }; 
  }

export default Main;
