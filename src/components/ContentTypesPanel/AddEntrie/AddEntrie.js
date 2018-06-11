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
    console.log(props);
    this.state = {
      categories: [],
      value: [],
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
//NewHook
    static getDerivedStateFromProps = (nextProps, prevState) => {
    let categoriesObject = nextProps.categorie;
    this.setState({categories: categoriesObject, loading: true});
  };

  handelChange = e => {
    let inputName = e.target.name;
    this.newEntrie[inputName] = e.target.value;
    console.log(this.newEntrie);
  };

  handelFormSubmit = event => {
    event.preventDefault();
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
    this.props.addEntrie(newEntrieObj.content);
  };

  handleSelectChange(value) {
    console.log('You have selected: ', value);
    this.setState({value});
  }

  render() {
    /*
   let uplodecomponent;
        if(this.state.type === 'Image') {
            uplodecomponent = <FileUploader />
        } else {
            uplodecomponent = null;
        }
*/

    const options = this.state.categories.map((item, index) => ({
      label: item.name,
      value: index
    }));

    console.log(options);

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
    /*
  const categoriesProp = (
           <div>
              <Label for="exampleSelect">categories</Label>
                 <Input type="select" name="select" id="exampleSelect">)
                  {this.state.categories.map(item => (
                     <option>{item.name}</option>
                    ))}
                 </Input>
                </div>
          );*/

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
                    <div><FileUploader /></div>
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

    console.log(this.props.fields[3]);
    return (
      <div className="boxs">
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
