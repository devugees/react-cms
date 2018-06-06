import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Modal,Label, Input, Container, Row, Col, ModalFooter ,ModalBody, ModalHeader} from 'reactstrap';
import './FileUploader.css';

export default class FileUploader extends Component {

    constructor() {
        super();
        this.state = {
          description: '',
          selectedFile: '',
          imagesArry: [],
          name: 'MediaLibrary',
          modal: false,
          ToggleImage: true,
          Toggleform: false,
          path: ''
        }
        this.toggle = this.toggle.bind(this);
        this.toggleNew = this.toggleNew.bind(this);
        this.toggleForm = this.toggleForm.bind(this);
       
      }
      componentDidMount() {
       
           axios.get('http://localhost:5000/api/getimages')
                .then(response => this.setState({imagesArry: response.data})
            )
            .catch(function (error) {
              console.log(error);
            });
    }

      onChange = (e) => {
        const state = this.state;

        switch (e.target.name) {
          case 'selectedFile':
            state.selectedFile = e.target.files[0];
            break;
          default:
            state[e.target.name] = e.target.value;
        }

        this.setState(state);
      }

      onSubmit = (e) => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();

        formData.append('description', description);
        formData.append('selectedFile', selectedFile);

        axios.post('http://localhost:5000/api/upload', formData)
          .then((result) => {
            // access results...
          });
      }

      toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  toggleNew(e) {
    this.setState({
      Toggleform: false,
      ToggleImage: true
    });
  }
toggleForm(e) {
    this.setState({
      ToggleImage: false,
      Toggleform: true
    });
  }

  handleimage(e) {
   let imagPth = e.target.src;
  this.setState({
      path: imagPth
    });
  }
 
      render() {
       console.log(this.state.path)
        const { description, selectedFile } = this.state;
        
        const allimages = (
                    <div className="thumbnail">
                   {this.state.imagesArry.map(image => (
                        <img src={require('../../uploads/'+image)} 
                        alt="Lights" 
                        style={{width: '20%', height: '150px', margin: 20}}
                        onClick={this.handleimage.bind(this)}
                         /> 
                         )) }
                    </div>
                 )
        const uploderForm = (
                <form onSubmit={this.onSubmit} className="w-75 mt-3">
                  <input
                    type="text"
                    name="description"
                    value={description}
                    onChange={this.onChange}
                  />
                  <input
                    type="file"
                    name="selectedFile"
                    onChange={this.onChange}
                  />
                  <button type="submit">Submit</button>
             </form>
          )

        return (
          <div>
            <Button className="btn btn-primary" onClick={this.toggle}>SelecteFile</Button>
              <Modal isOpen={this.state.modal} toggle={this.toggle} style={{maxWidth: 1000}}>
                <ModalHeader toggle={this.toggle}>
                 <Button  color="light" onClick={this.toggleForm}>Uplode New</Button>
                 <Button  color="light" onClick={this.toggleNew}>Media Library</Button>
                </ModalHeader>
                <div className="">
                <img  src={this.state.path}
                        alt="iamge" 
                        style={{width: '50px', height: '50px', float: 'right'}} />
                </div>
                <hr /> 
                  {this.state.ToggleImage ? allimages : null}
                  {this.state.Toggleform ? uploderForm : null}
                 
                  
                <ModalFooter>
                  <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
              </Modal>
          
          </div>
        );
      }
 }