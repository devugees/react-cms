import React, { Component } from "react";
import { Button, Form, FormGroup, Label } from "reactstrap";
import "./AddEntrie.css";
import axios from "axios";
import Select from "react-select";
import "react-select/dist/react-select.css";
import FileUploader from "../../FileUploader/FileUploader";

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

  newEntrie = {};

  componentWillReceiveProps = (nextProps, prevState) => {
    let categoriesObject = nextProps.categorie;
    this.setState({ categories: categoriesObject, loading: true });
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
    console.log("newEntrieObj", newEntrieObj);
    axios
      .post("http://localhost:5000/api/newentries", newEntrieObj)
      .then(response => {
        console.log(response);
      })
      .catch(function(error) {
        console.log("Error: ", error);
      });
    this.props.addNewEntrieToState(newEntrieObj.content);
  };

  handleSelectChange(value) {
    console.log("You have selected: ", value);
    this.setState({ value });
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
      width: "250px",
      float: "left",
      margin: "15px",
      padding: "15px"
    };
    const styleForm = {
      width: "90%"
    };
    console.log(this.props.fields[3]);
    return (
      <div className="boxs">
        <Form style={styleForm} onSubmit={this.handelFormSubmit}>
          {this.props.fields.map((object, index) => {
            {
              return (
                <div key={index}>
                  <FormGroup style={styleFormGroups} className="FormGroup">
                    <Label for="exampleEmail">{object.fieldLabel}</Label>
                    <input
                      name={object.machineName}
                      type={object.type}
                      required={object.required}
                      className={object.cssClasses}
                      onChange={this.handelChange}
                    />
                  </FormGroup>
                </div>
              );
            }
          })}

          

          <Button type="submit" className="btn btn-md btn-outline-primary mr-3">
            AddNew Post
          </Button>
        </Form>
      </div>
    );
  }
}

export default AddEntrie;
