import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, FormText, Container, Row, Col } from 'reactstrap';
import './AddPost.css';

 class AddPost extends Component { 

    render() {
        return(
            <Container className="AddPost">
            <Form>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input />    
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">URL</Label>
                            <Input />    
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Author</Label>
                            <Input />    
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Categories</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Tags</Label>
                            <Input  />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Status</Label>
                            <Input  />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Rating</Label>
                            <Input />
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleText">Date</Label>
                            <Input  />
                        </FormGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Text Area</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                        <Button className="btn">Add New Post</Button>
                    </Col>
                </Row>
            </Form>
        </Container>
        )
    }
};

export default AddPost;