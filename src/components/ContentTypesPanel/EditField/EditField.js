import React, { Component } from 'react';
//import './EditEntrie.css';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';

class EditField extends Component { 

  editedEntrie = {}

  handelChange = event => {
      let inputName = event.target.name;
      this.editedEntrie[inputName] = event.target.value;
  }

  handelFormSubmit = event => {
      event.preventDefault();
      this.props.bringItem(this.editedEntrie);
      axios.put(`http://localhost:5000/api/entries/${this.props.editingItem.id}`, this.props.editingItem.item)
      .then(response => {
        if(response.data.message) {
          console.error(response.data.message)
        } 
      })  
      .catch(error => {
        console.error('Error:', error)
      })
    }
    
  render() {
      const styleFormGroups = {
          width: '250px', 
          float:"left",
          margin:"15px",
          padding:"15px",
      }
      const styleForm = {
          width: "90%",
      }

    return(
        <div className='boxs' >
          <Form style={styleForm} onSubmit={this.handelFormSubmit}>
              {this.props.fields.map( (object,index) => {
                return (
                  <div key={index}>
                   <FormGroup style={styleFormGroups} className='FormGroup'>
                   <Label for="exampleEmail">{object.fieldLabel}</Label>
                   <input
                    fieldLabel={object.fieldLabel} 
                    name={object.machineName}
                    type={object.type} 
                    typeOption={object.typeOption}
                    unique={object.unique} 
                    visible={object.visible} 
                    required={object.required}
                    cssClasses={object.cssClasses}
                    customCss={object.customCss}
                    className={object.cssClasses}
                    onChange={this.handelChange}
                    //defaultValue={this.props.itemWillBeEdited[object.machineName]}
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

export default EditField;