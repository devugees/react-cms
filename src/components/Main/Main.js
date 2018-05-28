import React, { Component } from 'react';
import './Main.css';
import Sitestatus from '../SiteOverView/Sitestatus/Sitestatus';
import Update from '../SiteOverView/Update/Update';
import NewContentType from '../SiteStructure/NewContentType/NewContentType';
import ContentTypesList from '../SiteStructure/ContentTypesList/ContentTypesList';
import Menues from '../SiteStructure/Menues/Menues';
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
import ContentTypePanel from '../ContentTypesPanel/ContentTypePanel';
import Structure from '../ContentTypesPanel/Structure/Structure';
import Categories from '../ContentTypesPanel/Categories/Categories';
import View from '../ContentTypesPanel/View/View';
import PageNotFound from '../PageNotFound/PageNotFound';

class Main extends Component {

  render() {
    let fields =[];
    let allTheFields =[];
    let contentTypesObj = this.props.contenttypes;

    contentTypesObj.map((contentType) => {
      contentType.fields.map((field) => {
        allTheFields.push(field)

      })
      if (this.props.activeLink.split('/')[3] === contentType._id) {
        fields = contentType.fields
      }
    })

    let components = {
      "View": <View  id={this.props.activeLink.split('/')[3]} />,
      "NewContentType": <NewContentType/>,
      "Sitestatus": <Sitestatus/>,
      "Update": <Update/>,
      "ContentTypesList": <ContentTypesList contenttypes={this.props.contenttypes} />,
      "SettingsComponent": <SettingsComponent/>,
      "FieldTypes": <FieldTypes/>,
      "AllFields": <AllFields allFields={allTheFields} />,
      "Themes": <Themes/>,
      "CustomeCode": <CustomeCode/>,
      "Custome": <Custome/>,
      "Editor": <Editor/>,
      "Blocks": <Blocks/>,
      "Menues": <Menues/>,
      "AllUsers": <AllUsers/>,
      "Roles": <Roles/>,
      "Plugins": <Plugins/>,
      "ContentType": <ContentTypePanel fields={fields} contenttypes={this.props.contenttypes} id={this.props.activeLink.split('/')[3]} />,
      "Structure": <Structure fields={fields} id={this.props.activeLink.split('/')[3]} />,
      
      "Categories": <Categories id={this.props.activeLink.split('/')[3]}/>,
     
    }


    let linkMain = this.props.activeLink.split('/')[3];
    let linkSecound = this.props.activeLink.split('/')[2];
    let component = components[linkMain] || components[linkSecound] || <PageNotFound/>
    return (<div>{component}</div>)
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


  ----------------------------------

    if(this.props.activeLink === "/Administration/main/NewContentType") {
      return ( <div> <NewContentType/> </div>);
    } else if(this.props.activeLink === "/Administration/main/ContentTypesList") {
      return (<div> <ContentTypesList/> </div>);
    }  else if(this.props.activeLink === "/Administration/main/SettingsComponent"){
      return (<div> <SettingsComponent/> </div>);
    }  else if(this.props.activeLink === "/Administration/main/FieldTypes"){
      return (<div> <FieldTypes/> </div>);
    }  else if(this.props.activeLink === "/Administration/main/AllFields"){
      return (<div> <AllFields/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Themes"){
      return (<div> <Themes/> </div>);
    } else if(this.props.activeLink === "/Administration/main/CustomeCode"){
      return (<div> <CustomeCode/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Custome"){
      return (<div> <Custome/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Editor"){
      return (<div> <Editor/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Blocks"){
      return (<div> <Blocks/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Plugins"){
      return (<div> <Plugins/> </div>);
    } else if(this.props.activeLink === "/Administration/main/AllUsers"){
      return (<div> <AllUsers/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Roles"){
      return (<div> <Roles/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Sitestatus"){
      return (<div> <Sitestatus/> </div>);
    } else if(this.props.activeLink === "/Administration/main/Update"){
      return (<div> <Update/> </div>);
    }  else {
      return (
        <div className='Main'>
        Hi
        </div>
        );
      }
*/
    };
  }


export default Main;
