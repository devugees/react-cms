import React, { Component } from 'react';
import axios from 'axios';
import { InputGroup, InputGroupAddon, Button, Modal, Input, ModalFooter, ModalHeader} from 'reactstrap';
import './FileUploader.css';

export default class FileUploader extends Component {

    constructor(props) {
        super(props);
        let path ='';
        if(props.path){
          path= props.path
        }
        this.state = {
          description: '',
          selectedFile: '',
          imagesArry: [],
          name: 'MediaLibrary',
          modal: false,
          ToggleImage: true,
          Toggleform: false,
          ShowImageinput: false,
          border: '',
          path: path,
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

    componentDidUpdate(prevProps){
      if(this.props != prevProps){

        if(this.props.remove){
          this.setState({path:""})
        }
      }
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

      onClick = (e) => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();

        formData.append('description', description);
        formData.append('selectedFile', selectedFile);
    
        /*let request = new XMLHttpRequest();
        request.open('POST','http://localhost:5000/api/upload');
        request.send(formData)*/

        axios.post('http://localhost:5000/api/upload', formData)
          .then((result) => {
            console.log(result)
         })
        .catch(function(error) {
        console.log('Error: ', error);
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
      path: imagPth,
      border: '2px solid red',
      ShowImageinput: true
    });
  this.props.bringFileUrl(imagPth,this.props.fieldLabel)
  }
 
      render() {
       console.log(this.state.path)
        const { description, selectedFile } = this.state;
        
        const allimages = (
                    <div className="thumbnail">
                   {this.state.imagesArry.map((image, index) => (
                        <img src={require('../../../backend/uploads/'+image)} 
                        key={index}
                        alt="Lights" 
                        style={{width: '20%', height: '150px', margin: 20}}
                        onClick={this.handleimage.bind(this)}
                         /> 
                         )) }
                    </div>
                 )
        const uploderForm = (
                <div>
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
                  <button  onClick={this.onClick} >Upload</button>
                  </div>
          )

        return (
          <div>
         <div >
            <InputGroup >
                <Input  
                       type="text"
                        name="description"
                        className="mr-0"
                        value={this.state.path}
                        onChange={this.onChange} />
                <InputGroupAddon addonType="append">
                   <Button className="btn btn-primary" onClick={this.toggle}>Select File</Button>
                </InputGroupAddon>
              </InputGroup>
               {this.state.ShowImageinput && !this.props.remove  ? (<img  src={this.state.path}
                        style={{
                          width: '100px',
                          height: '100px',
                          border: `${this.state.border}`
                        }} />) : null}
           </div>
              <Modal isOpen={this.state.modal} toggle={this.toggle} style={{maxWidth: 1000}}>
                <ModalHeader toggle={this.toggle}>
                <div className="ml-5">
               {!this.state.Toggleform ? (<img  src={this.state.path}
                        alt="iamge" 
                        style={{
                          width: '70px',
                          height: '60px',
                          position: 'absolute',
                          top:5,
                          right: 100,
                          border: `${this.state.border}`

                        }} />) : null}
                </div>
                 <Button  color="light" onClick={this.toggleForm}>Upload New</Button>
                 <Button  color="light" onClick={this.toggleNew}>Media Library</Button>
                </ModalHeader>
                <hr /> 
                  {this.state.ToggleImage ? allimages : null}
                  {this.state.Toggleform ? uploderForm : null}
                  
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                  <Button color="primary" onClick={this.toggle}>Choose</Button>{' '}
                </ModalFooter>
              </Modal>
          
          </div>
        );
      }
 }