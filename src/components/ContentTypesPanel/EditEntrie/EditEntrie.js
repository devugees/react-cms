import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label} from 'reactstrap';
import './EditEntrie.css';
import axios from 'axios';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
import FileUploader from '../../FileUploader/FileUploader';


let selectedCategorie ;
class EditEntrie extends Component {
  constructor(props) {
    super(props);
    //let categories = [];
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

  editedEntrie = this.props.itemWillBeEdited.item;

 
  handelChange = event => {
    let inputName = event.target.name;
    this.editedEntrie[inputName] = event.target.value;
    console.log("editedEntrie",this.editedEntrie);
  };
 
  handelFormSubmit = event => {
    console.log("editedEntrie",this.editedEntrie)
    event.preventDefault();
    this.props.AddEditedItemToState(this.editedEntrie,this.props.itemWillBeEdited.index);
    axios
      .put(
        `http://localhost:5000/api/entries/${this.props.itemWillBeEdited._id}`,
        this.editedEntrie
      )
      .then(response => {
        console.log("response",response)
        if (response.data.message) {
          console.error(response.data.message);
        }
      })
      .catch(error => {
        console.error("Error:", error);
      });
    this.props.toggle()
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
console.log("selectedCategorie",selectedCategorie);
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
                    <div><FileUploader path={this.props.itemWillBeEdited.item.image} /></div>
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
          } else {
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
