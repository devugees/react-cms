import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './AddField.css';

 class AddField extends Component { 

        fieldLabelRef = React.createRef();
        typeOptRef = React.createRef();
        typeRef = React.createRef();
        uniqueRef = React.createRef();
        visibleRef = React.createRef();
        requiredRef = React.createRef();
        cssClassNameRef = React.createRef();
        customCsslRef = React.createRef();

  onSubmit = (e) => {
    e.preventDefault();
    const field = {
        fieldLabel: this.fieldLabelRef.current.value,
        typeOption: this.typeOptRef.current.value,
        type: this.typeRef.current.value,
        unique: this.uniqueRef.current.checked,
        visible: this.visibleRef.current.checked,
        required: this.requiredRef.current.checked,
        cssClassName: this.cssClassNameRef.current.value,
        customCss: this.customCsslRef.current.value
    }
    this.props.addfield(field);
  }

    render() {
        
        

        return(
            <Container className="AddField">
                <Form onSubmit={this.onSubmit}>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Field Label</Label>
                                <Input name="fieldLabel" innerRef={this.fieldLabelRef} />    
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Type-Option</Label>
                                <Input name="typeOption" type="textarea" id="exampleText" innerRef={this.typeOptRef} />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Type</Label>
                                <Input name="type" type="select" id="exampleSelect" innerRef={this.typeRef}>
                                    <option>Button</option>
                                    <option>Checkbox</option>
                                    <option>Color</option>
                                    <option>Date</option>
                                    <option>Datetime-local</option>
                                    <option>Email</option>
                                    <option>File</option>
                                    <option>Hidden</option>
                                    <option>Image</option>
                                    <option>Month</option>
                                    <option>Number</option>
                                    <option>Password</option>
                                    <option>Radio</option>
                                    <option>Range</option>
                                    <option>Reset</option>
                                    <option>Search</option>
                                    <option>Telephone</option>
                                    <option>Text</option>
                                    <option>Time</option>
                                    <option>Url</option>
                                    <option>Week</option>
                                </Input>
                            </FormGroup>
                            <Form>
                                <FormGroup check inline>
                                <Label check>
                                    <Input name="unique" type="checkbox" innerRef={this.uniqueRef} /> Unique
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                <Label check>
                                    <Input name="visible" type="checkbox" innerRef={this.visibleRef} /> Visible
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                <Label check>
                                    <Input name="required" type="checkbox" innerRef={this.requiredRef} /> Required
                                </Label>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">CSS-ClassName</Label>
                                <Input name="cssClassName" type="textarea" id="exampleText" innerRef={this.cssClassNameRef}/>
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Custom CSS</Label>
                                <Input name="customCss" type="textarea" id="exampleText" innerRef={this.customCsslRef} />
                            </FormGroup>
                            <Button type="submit" className="btn">Add</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}

export default AddField;