
import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './FileUploader.css';
import image1 from '../../uploads/Screenshot from 2018-01-14 10-23-03.png'

export default class FileUploader extends Component {

      nameRef = React.createRef()
    constructor(props) {
        super(props);
          this.state = {
            uploadStatus: false,
            imagesArry: [],
          }
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }
    
      fileRef = React.createRef()
      nameRef = React.createRef()
    
componentWillMount() {
  console.log('onClicked')
   axios.get('http://localhost:5000/api/getimages')
          .then(response => this.setState({imagesArry: response.data})
          )
          .catch(function (error) {
            console.log(error);
          });
}

      handleUploadImage(e) {
        e.preventDefault();
   // get all  selected image from server 
  

        console.log('the ref is'+ this.fileRef.current.files)
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
 const allimages = (
              <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="thumbnail">
                       {this.state.imagesArry.map(image => (
                            <img src={require('../../uploads/'+image)} 
                            alt="Lights" 
                            style={{width: '30%', height: 250, margin: 20}}
                             /> )) }
                            <div className="caption">
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
             )



     return(
      <div>
        <Container className="FileUploader">
            <Form onSubmit={this.handleUploadImage}>
                <Row>
                    <Col lg="6" md="6" sm="12">
                        <FormGroup>
                            <Input  
                                   className="form-control"
                                   name="file" 
                                   innerRef={this.fileRef} 
                                   type="file" 
                                   onClick={this.gitUploadedImage}/>
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
           {allimages}
       </div>
     )
   }
 }