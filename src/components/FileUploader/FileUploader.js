import React, { Component } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, Container, Row, Col } from 'reactstrap';
import './FileUploader.css';
import image1 from '../../uploads/Screenshot from 2018-01-14 10-23-03.png'

export default class FileUploader extends Component {

    constructor() {
        super();
        this.state = {
          description: '',
          selectedFile: '',
        };
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

            imagesArry: [],
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

      render() {
        const { description, selectedFile } = this.state;
        return (
          <form onSubmit={this.onSubmit}>
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
        );
      }
 const allimages = (
              <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="thumbnail">
                            <img src={require('../../uploads/'+image)} 
                            alt="Lights" 
                       {this.state.imagesArry.map(image => (
                             /> )) }
                            style={{width: '30%', height: 250, margin: 20}}
                            <div className="caption">
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
             )
 }