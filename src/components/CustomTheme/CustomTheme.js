import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './CustomTheme.css';

 class CustomTheme extends Component { 

    render() {


        return(
            <Container className="CustomTheme">
                <Form>
                    <Row className="firstRow">
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Logo</Label>
                                <Input />    
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Site Title</Label>
                                <Input /> 
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="exampleEmail">Site Tagline</Label>
                                <Input /> 
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                    <Row>
                        <Col>
                            <Button className="addRow">Add Row</Button>{' '}
                            <Button className="removeRow">Remove Row</Button>{' '}
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Button className="saveBtn">Save</Button>{' '}
                        </Col>
                    </Row>
                </Form>
            </Container>
        )
    }
};

export default CustomTheme;