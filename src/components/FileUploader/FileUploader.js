import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './FileUploader.css';

export default class FileUploader extends Component {



      nameRef = React.createRef()


    constructor(props) {
        super(props);
          this.state = {
            uploadStatus: false
          }
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
    
      fileRef = React.createRef()
      nameRef = React.createRef()
    
      handleUploadImage(e) {
        e.preventDefault();
        console.log(this.fileRef)
        const data = new FormData();
        data.append('file', this.fileRef.current.files[0]);
        data.append('filename', this.nameRef.current.value);
        console.log("data",data);
        axios.post('http://localhost:5000/api/upload', data)
          .then(function (response) {
        this.setState({ imageURL: `http://localhost:8000/${data.file}`, uploadStatus: true });
          })
          .catch(function (error) {
            console.log(error);
          });
      }
  
      
   render() {
     return(
        <Container className="FileUploader">
            <Form onSubmit={this.handleUploadImage}>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <Input className="form-control"  innerRef={this.fileRef} type="file" />
                        </FormGroup>
                    </Col>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <Input className="form-control" innerRef={this.nameRef} type="text" placeholder="Optional name for the file" />
                        </FormGroup>
                    </Col>
                </Row>
                <Button className="btn float-right" type>Upload </Button>
            </Form>
       </Container>
     )
   }
 }