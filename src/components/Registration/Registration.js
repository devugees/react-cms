import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './Registration.css';
import axios from 'axios';
import {Link, browserHistory} from 'react-router-dom';
import PrivatRoute from '../PrivatRoute/PrivatRoute';
import setAuthToken from '../../setauthtoken/setAuthToken';



 class Registration extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          registerData: {
            email: "",
            password: "",
            role: "user",
            isAuthenticated: false
          }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      

      handleChange(event) {
        const registerDataCopy = {
          ...this.state.registerData
        };
        registerDataCopy[event.target.name] = event.target.value;
        this.setState({registerData: registerDataCopy});
    
      };

      handleSubmit(e) {
        e.preventDefault();
       const data = {
            email: this.state.registerData.email,
            password: this.state.registerData.password
          };
          console.log(data)

         axios.post('http://localhost:5000/register', data)
              .then((response) => {
                 const { token } = response.data;

              if(response.data.role) {
                
                // set the token in localStorage
                const token = response.data.token;
                localStorage.setItem('token', token);
                
                 // set token to header
                //setAuthToken(token);

                const Registration = {...this.state.registerData};
                Registration.role = true ;
                Registration.isAuthenticated = true;
                   
                console.log(Registration)

                this.setState({loginData: Registration
                });
         
                this.props.handleRegistrationSuccess(Registration);
              } 
            }).catch(function(error) {
              console.log("Error: ", error);
            });
          };

      
    render() {
    
      const buttonStyle = {width:"100%"}

        return(
            <Container className="Registration">
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Input type="email" name="email" id="exampleEmail" placeholder="Email" onChange ={this.handleChange}/>
                        <Input type="password" name="password" id="examplePassword" placeholder="password" onChange ={this.handleChange} />
                    </FormGroup>
                    <FormGroup className="checkbox">
                        <Label>
                            <Input type="checkbox" />{' '}
                            Accept the Privacy Policy
                        </Label>
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
            </Container>
        )
    }
};

export default Registration;