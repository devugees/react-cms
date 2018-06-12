import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

  static PropTypes = {
   contenttypes: PropTypes.array
  }

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
      "Custome": <Custome contenttypes={this.props.contenttypes}/>,
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
    };
  }

export default Main;
