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
import CustomCode from '../Appearance/CustomCode/CustomCode';
import Custom from '../Appearance/Custom/Custom';
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

  state = {
    fields: [],
    allTheFields: []
  }

  emptyFields = () => {
    this.setState({fields: []})
  }

  static propTypes = {
   contenttypes: PropTypes.array
  }

  static getDerivedStateFromProps(props, state) {
    
    let fields =[];
    let allTheFields =[];
    let contentTypesObj = props.contenttypes;

    contentTypesObj.map((contentType) => {
      contentType.fields.map((field) => {
        allTheFields.push(field)
      })
      if (props.activeLink.split('/')[3] === contentType._id) {
        fields = contentType.fields
      }
    })


    return {fields: fields,allTheFields: allTheFields}                                                                                                                                                                                                                                                                                                  
  };

  render() {


    
      let components = {
      "View": <View  id={this.props.activeLink.split('/')[3]} />,                                                                           
      "NewContentType": <NewContentType/>,
      "Sitestatus": <Sitestatus/>,                            
      "Update": <Update/>,
      "ContentTypesList": <ContentTypesList contenttypes={this.props.contenttypes} />,
      "SettingsComponent": <SettingsComponent/>,
      "FieldTypes": <FieldTypes/>,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
      "AllFields": <AllFields allFields={this.state.allTheFields} />,
      "Themes": <Themes/>,
      "CustomCode": <CustomCode/>,
      "Custom": <Custom contenttypes={this.props.contenttypes}/>,
      "Editor": <Editor/>,
      "Blocks": <Blocks/>,
      "Menues": <Menues/>,
      "AllUsers": <AllUsers/>,
      "Roles": <Roles/>,
      "Plugins": <Plugins/>,
      "ContentType": <ContentTypePanel fields={this.state.fields} contenttypes={this.props.contenttypes} emptyFields={this.emptyFields} id={this.props.activeLink.split('/')[3]} />,
      "Structure": <Structure fields={this.state.fields} id={this.props.activeLink.split('/')[3]} />,
      "Categories": <Categories id={this.props.activeLink.split('/')[3]}/>,
    }

      let linkMain = this.props.activeLink.split('/')[3];
      let linkSecound = this.props.activeLink.split('/')[2];
      let component = components[linkMain] || components[linkSecound] || <PageNotFound/>
      return (<div>{component}</div>)
    

    
    }
  }

export default Main;
