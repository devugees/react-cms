
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './FileUploader.css';

export default class FileUploader extends Component {
/*
    constructor(props) {
        super(props);
          this.state = {
            uploadStatus: false
          }
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
    
    
      handleUploadImage(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        data.append('filename', this.fileName.value);
    
        axios.post('http://localhost:8000/upload', data)
          .then(function (response) {
        this.setState({ imageURL: `http://localhost:8000/${body.file}`, uploadStatus: true });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  */
   render() {
     return(
        <Container className="FileUploader">
            <Form onSubmit={this.handleUpload}>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <Input className="form-control"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
                        </FormGroup>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <Input className="form-control" ref={(ref) => { this.fileName = ref; }} type="text" placeholder="Optional name for the file" />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="btn float-right" type>Upload </Button>
            </Form>
       </Container>
     )
   }
 }