import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './AddPost.css';

class AddPost extends Component { 

state = {
title : "Posts",
machineName : "posts",
url: "/posts",
des:"This a Posts Content type",
submetionguidlines:" read so you know how enir the data",
fields:[
{label:"Title",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
{label:"Url",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
{label:"Author",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
{label:"Categories",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""},
{label:"Date",machineName:"title",type:"text",unique:true,visible:true,required:true,cssClasses:"title",css:""}
]
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

this.state.fields.map( (object,index) => {console.log(object.label)})
return(
        <div className='boxs' >
            <Form style={styleForm}>

                {this.state.fields.map( (object,index) => {

                return (
                <div>
                   <FormGroup style={styleFormGroups} className='FormGroup'>
                       <Label for="exampleEmail">{object.label}</Label>
                       <input name={object.machineName} type= {object.type} required={object.required} /*style= {object.css}*/ className={object.cssClasses} />
                   </FormGroup>
                   </div>
                )
                })}
{/*
                <FormGroup>
                <Label for="exampleText">Text Area</Label>
                <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <Button className="btn">Add New Post</Button>

*/}

            </Form>
        </div>
)
}
};

export default AddPost;
