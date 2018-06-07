import React, { Component } from "react";
import "./EditEntrie.css";
import axios from "axios";
import { Button, Form, FormGroup, Label } from "reactstrap";

class EditEntrie extends Component {

  editedEntrie = {...this.props.itemWillBeEdited }
 
  handelChange = event => {
      let inputName = event.target.name;
      this.editedEntrie[inputName] = event.target.value;
  }

  handelFormSubmit = event => {
    event.preventDefault();
    this.props.AddEditedItemToState(this.editedEntrie);
    axios.put(`http://localhost:5000/api/entries/${this.props.itemWillBeEdited._id}`,this.props.itemWillBeEdited)
      .then(response => {
        if(response.data.message) {
          console.error(response.data.message)
        }

      })  
      .catch(error => {
        console.error('Error occured:', error)
      })
  }
    
  render() {
    const styleFormGroups = {
      width: "250px",
      float: "left",
      margin: "15px",
      padding: "15px"
    };
    const styleForm = {
      width: "90%"
    };

    return (
      <div className="boxs">
        <Form style={styleForm} onSubmit={this.handelFormSubmit}>
          {this.props.fields.map((object, index) => {
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
                    defaultValue={this.props.itemWillBeEdited[object.machineName]}
                    />
                    </FormGroup>
                  </div>
                    )
                  })
                }
                  <div className="btns">
                    <Button type="submit" color="primary" className="btn mt-2 btn btn-outline-success btn-md" onClick={this.props.toggle}>Save Changes</Button>
                    <Button className="btn ml-2 mt-2 btn btn-outline-secondary btn-md" onClick={this.props.toggle}>Cancel</Button>
                  </div>
          </Form>
        </div>
          )
        }
    };

export default EditEntrie;
