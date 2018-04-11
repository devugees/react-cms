import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './AddField.css';

 class AddField extends Component { 

    render() {
        return(
            <div className="AddField">
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Input without validation</Label>
                        <Input />    
                    </FormGroup>
                </Form>
            </div>
        )
    }
};

export default AddField;