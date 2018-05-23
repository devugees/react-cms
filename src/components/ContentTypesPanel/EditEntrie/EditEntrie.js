import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './EditEntrie.css';
import axios from 'axios';

class EditEntrie extends Component { 

editedEntrie = {}

handelChange = e => {
    let inputName = e.target.name;
    this.editedEntrie[inputName] = e.target.value;
    console.log(this.editedEntrie);
}

handelFormSubmit = (event) => {
    event.preventDefault();
    const editedEntrieObj = {
        content: this.editedEntrie,
    }
    console.log("editedEntrieObj",editedEntrieObj)
        this.props.EditEntrie(editedEntrieObj.content, this.props.editingItem.index);
}

render() {
    const styleFormGroups={
        width: '250px', 
        float:"left",
        margin:"15px",
        padding:"15px",
    }
    const styleForm={
        width: "90%",
    }

return(
        <div className='boxs' >
            <Form style={styleForm} onSubmit={this.handelFormSubmit}>

                {this.props.fields.map( (object,index) => {

                return (
                <div>
                   <FormGroup style={styleFormGroups} className='FormGroup'>
                       <Label for="exampleEmail">{object.fieldLabel}</Label>
                       <input 
                        name={object.machineName}
                        type={object.type} 
                        required={object.required}
                        className={object.cssClasses}
                        onChange={this.handelChange}
                        placeholder={this.props.editingItem.item[object.machineName]} />
                   </FormGroup>
                   </div>
                  )
                })
              }
              {/*
                <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                
            */}
              <Button type="submit" className="btn">Save Changes</Button>
            </Form>
        </div>
      )
    }
};

export default EditEntrie;
