import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './AddField.css';

 class AddField extends Component { 

    render() {
        return(
            <Container className="AddField">
                <Form>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Field Label</Label>
                                <Input />    
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleEmail">Field Label</Label>
                                <Input />    
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Type-Option</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleSelect">Type</Label>
                                <Input type="select" name="select" id="exampleSelect">
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
                                    <Input type="checkbox" /> Unique
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Visible
                                </Label>
                                </FormGroup>
                                <FormGroup check inline>
                                <Label check>
                                    <Input type="checkbox" /> Required
                                </Label>
                                </FormGroup>
                            </Form>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">CSS-ClassName</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleText">Custom CSS</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <Button className="btn">Add</Button>{' '}
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
};

export default AddField;