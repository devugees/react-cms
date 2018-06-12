import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label} from 'reactstrap';
import './AddEntrie.css';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FileUploader from '../../FileUploader/FileUploader';

class AddEntrie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      value: [],
      selectedFile: {},
      crazy: false,
      loading: false
    };
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  static PropTypes = {
    categorie: PropTypes.array,
    contentTypeId: PropTypes.string,
    fields: PropTypes.array,
    addEntrie: PropTypes.func
  };

  newEntrie = {};

  componentWillReceiveProps = (nextProps, prevState) => {
    let categoriesObject = nextProps.categorie;
    this.setState({categories: categoriesObject, loading: true});
  };
  bringFileUrl = (fileUrl,fieldLabel) =>{
    console.log("fileUrl",fileUrl);
    let selectedFile = {
      fieldLabel:fieldLabel,
      fileUrl:fileUrl
    }
    this.setState({
      selectedFile: selectedFile
    })
  }
  handelChange = e => {
    let inputName = e.target.name;
    this.newEntrie[inputName] = e.target.value;
    console.log(this.newEntrie);
  };

  handelFormSubmit = event => {
    event.preventDefault();
    if (this.state.value.length > 0 ) {
      this.newEntrie.categories = this.state.value
    }
    console.log();
    if (this.state.selectedFile.fileUrl.length > 0 ) {
      this.newEntrie.image= this.state.selectedFile.fileUrl
    }
    
    const newEntrieObj = {
      contentTypeId: this.props.contentTypeId,
      content: this.newEntrie,
      archived: false
    };
    console.log('newEntrieObj', newEntrieObj);
    axios
      .post('http://localhost:5000/api/newentries', newEntrieObj)
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log('Error: ', error);
      });
    this.props.addNewEntrieToState(newEntrieObj.content);
  };

  handleSelectChange(value) {
    console.log('You have selected: ', value);
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
          onChange={this.handleSelectChange}
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
          if(object.fieldLabel === 'Image' && object.type === 'Image' && object.machineName === 'Image') {
            return(
               <div className="col-md-6 mt-1">
                 <div>
                    Uplode Photo</div>
                    <div><FileUploader bringFileUrl={this.bringFileUrl} fieldLabel={object.fieldLabel} /></div>
                  </div>
              )
          } else if(object.fieldLabel === 'categories'
                       && object.type === 'categories' 
                       && object.machineName === 'categories') {
            return( 
              <div className="col-md-6">
                 <Label >
                    categories</Label>
                    <div>{categoriesProp}</div>
                    </div>
                    )
          }
               return(<div key={index}>

                  <FormGroup style={styleFormGroups} className="FormGroup">
                    <Label for="exampleEmail">
                    {object.fieldLabel}</Label>
                    <input
                      name={object.machineName}
                      type={object.type}
                      required={object.required}
                      className={object.cssClasses}
                      onChange={this.handelChange}
                    />
                  </FormGroup>
                </div>)
           
          })

    return (
      <div className="boxs">
      <h3> {this.props.action} Entrie </h3>
        <Form style={styleForm} onSubmit={this.handelFormSubmit}>
        <div className="container">
           <div className="row">
               {allFields}
               </div>
           </div>
           <div className="mt-5">
           <hr />
          <Button type="submit" className="btn  btn-outline-primary mt-3">
            AddNew Post
          </Button>
          </div>
        </Form>
      </div>
    );
  }
}

export default AddEntrie;
