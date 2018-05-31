import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './AddEntrie.css';
import axios from 'axios';

class AddEntrie extends Component { 
      state = {
        categories: []
      }
newEntrie = {}

componentWillMount() {
   axios.get('http://localhost:5000/api/allcategories')
          .then((response) => {
               console.log(response)
                      return {
                  categories:response
                }
            }).catch((error) => {
              console.log("Error: ", error);
            });
  };

handelChange = e => {
    let inputName = e.target.name;
    this.newEntrie[inputName] = e.target.value;
    console.log(this.newEntrie);
}

handelFormSubmit   = event => {
    event.preventDefault();
    const newEntrieObj = {
        contentTypeId: this.props.contentTypeId,
        content: this.newEntrie,
        archived: false
    }
    console.log("newEntrieObj",newEntrieObj)
    axios.post('http://localhost:5000/api/newentries', newEntrieObj)
     .then((response) => {
       console.log(response)
       
      }).catch(function(error) {
        console.log("Error: ", error);
      });
      this.props.addEntrie(newEntrieObj.content);
}





 handlSubmit() {
  console.log('cliked');
  
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

return (
    <div className='boxs' >
        <Form style={styleForm} onSubmit={this.handelFormSubmit}>
        {this.props.fields.map( (object,index) => {
        return (
         <div key={index}>
           <FormGroup style={styleFormGroups} className='FormGroup'>
             <Label for="exampleEmail">{object.fieldLabel}</Label>
             <input 
              name={object.machineName}
              type={object.type} 
              required={object.required}
              className={object.cssClasses}
              onChange={this.handelChange} />
           </FormGroup>
        </div>
            )
          })
        }
            
              <FormGroup>
               <Label for="exampleSelect">Type</Label>
                      <Input  
                      name="type" 
                      type="select" 
                      id="exampleSelect" 
                      innerRef={this.typeRef}
                      >
                          <option>{this.state.categories.name}</option>
                         
                      </Input>
              </FormGroup>
              
          
           <Button type="submit" className="btn btn-md btn-outline-primary mr-3">AddNew Post</Button>
        </Form>
    </div>
      )
    }
};

export default AddEntrie;
