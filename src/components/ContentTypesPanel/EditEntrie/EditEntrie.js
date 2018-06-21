import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Input, Form, FormGroup, Label} from 'reactstrap';
import './EditEntrie.css';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FileUploader from '../../FileUploader/FileUploader';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

let selectedCategorie ;
class EditEntrie extends Component {
  constructor(props) {
    super(props);
    let categories = [];
    let selectedFile;

    if(this.props.itemWillBeEdited.item.categories){
      selectedCategorie = this.props.itemWillBeEdited.item.categories
    }
    if(this.props.itemWillBeEdited.item.Image) {
      selectedFile = this.props.itemWillBeEdited.item.Image
    }
    this.state = {
      categories: props.categorie,
      selectedFile: selectedFile,
      value: selectedCategorie ,
      crazy: false,
      loading: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static propTypes = {
    categorie: PropTypes.array,
    contentTypeId: PropTypes.string,
    fields: PropTypes.array,
    AddEditedItemToState: PropTypes.func
  };


  componentWillReceiveProps = (nextProps, prevState) => {
    let categoriesObject = nextProps.categorie;
    this.setState({categories: categoriesObject, loading: true});
  };

  bringFileUrl = (fileUrl, fieldLabel) => {
    console.log("fileUrl", fileUrl);
    let selectedFile = {
      fieldLabel: fieldLabel,
      fileUrl: fileUrl
    };
    this.editedEntrie.image = fileUrl 
    this.setState({
      selectedFile: selectedFile
    });
  };

  editedEntrie = this.props.itemWillBeEdited.item;

 
  handelChange = (event,value) => {
    console.log("event",event)
    console.log("value",value)
    if (value) {
      this.setState({value:value})
      this.editedEntrie.categories = value
    }else {
    let inputName = event.target.name;
    this.editedEntrie[inputName] = event.target.value;
    }
  };
 
  handelFormSubmit = event => {
    event.preventDefault();
    this.props.AddEditedItemToState(this.editedEntrie,this.props.itemWillBeEdited.index);
    axios
      .put(
        `http://localhost:5000/api/entries/${this.props.itemWillBeEdited._id}`,
        this.editedEntrie
      )
      .then(response => {
        if (response.data.message) {
          console.error(response.data.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    this.props.toggle()
  };

  handleQuillChange = (  name, value) => {
    //TODO fill modal quill editor with values from the entry
    this.editedEntrie[name] = value;
  }
    

  handleSelectChange(value) {
    this.setState({value});
  }

  render() {
    const options = this.state.categories.map((item, index) => ({
      label: item.name,
      value: index
    }));
    const categoriesProp = (
      <div className="section">
        <h3 className="section-heading">{options.label}</h3>
        <Select
          multi
          joinValues
          value={this.state.value}
          placeholder="Select your favourite(s)"
          options={options}
          onChange={this.handelChange.bind(this, this.value)}
        />
      </div>
    );
    const styleFormGroups = {
      width: '250px',
      float: 'left',
      margin: '15px',
      padding: '15px'
    };
    const styleForm = {
      width: '90%'
    };

 let allFields = this.props.fields.map((object, index) => {
          if( object.type === 'image') {
            return(
               <div className="col-md-6 mt-1">
                 <div>
                    Uplode Photo</div>
                    <div><FileUploader bringFileUrl={this.bringFileUrl} path={this.props.itemWillBeEdited.item.image} /></div>
                  </div>
              )
          } else if(object.type === 'categories') {
            return( 
              <div className="col-md-6">
                 <Label >
                    categories</Label>
                    <div>{categoriesProp}</div>
                    </div>
                    )
              } else if ( object.type === "textarea") {
              return (
                <div className="w-100 ">
                  <Label>{object.fieldLabel.charAt(0).toUpperCase() + object.fieldLabel.slice(1)}</Label>
                  {/* TODO fill modal quill editor with values from the entry */}
                  <ReactQuill 
                    value={this.props.itemWillBeEdited.item[object.machineName]}
                    onChange={this.handleQuillChange.bind(this, object.machineName) }
                  />
                </div>
              );
          } else {
               return(<div key={index}>

                  <FormGroup style={styleFormGroups} className="FormGroup">
                    <Label for="exampleEmail">
                    {object.fieldLabel}</Label>
                  <Input
                      name={object.machineName}
                      type={object.type}
                      required={object.required}
                      className={object.cssClasses}
                      onChange={this.handelChange}
                      defaultValue={this.props.itemWillBeEdited.item[object.machineName]}
                    />
                  </FormGroup>
                </div>)
               }
           
          })

    return (
      <div className="boxs">
      <h3> Edit Entrie </h3>
        <Form style={styleForm} onSubmit={this.handelFormSubmit}>
        <div className="container">
           <div className="row">
               {allFields}
               </div>
           </div>
           <div className="mt-5">
           <hr />
          <Button type="submit" className="btn  btn-outline-primary mt-3">
            Save Changes
          </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default EditEntrie;
