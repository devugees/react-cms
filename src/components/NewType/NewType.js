import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './NewType.css';

 class NewType extends Component { 

    render() {
        return(
            <Container className="NewType">
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Type Title</Label>
                            <Input />    
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleSelect">Input Form Type - or</Label>
                            <Input type="select" name="select" id="exampleSelect">
                                <option>Number</option>
                                <option>Checkbox</option>
                                <option>Color</option>
                            </Input>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Condition Script/Element</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                    <Col>
                    <Row>
                    <Button>Add</Button>{' '}
                    </Row>
                    <Row>
                    <Button>Save</Button>{' '}
                    <Button>Cancel</Button>{' '}
                    </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
};

export default NewType;