import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';
import './Login.css';
import axios from 'axios';
import {Link, browserHistory} from 'react-router-dom';
import PrivatRoute from '../PrivatRoute/PrivatRoute';
import setAuthToken from '../../setauthtoken/setAuthToken';
import jwtDecode from 'jwt-decode';


 class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          loginData: {
            email: "",
            password: "",
            role: false,
            isAuthenticated: false
          }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
      

      handleChange(event) {
        const loginDataCopy = {
          ...this.state.loginData
        };
        loginDataCopy[event.target.name] = event.target.value;
        this.setState({loginData: loginDataCopy});
    
      };

      handleSubmit(e) {
        e.preventDefault();
       const data = {
            email: this.state.loginData.email,
            password: this.state.loginData.password
          };

         axios.post('http://localhost:5000/login', data)
              .then((response) => {
                 const { token } = response.data;

              if(response.data.role) {
                
                // set the token in localStorage
                const token = response.data.token;
                localStorage.setItem('token', token);
                
                 // set token to header
                //setAuthToken(token);

                const Logindatacopy1 = {...this.state.loginData};
                Logindatacopy1.role = true ;
                Logindatacopy1.isAuthenticated = true;
                   
                console.log(Logindatacopy1)

                this.setState({loginData: Logindatacopy1
                });
                 const decoded = jwtDecode(token);
                  this.props.tokenDecoded(decoded);
                this.props.handleLoginSuccess(Logindatacopy1);

                

                
                
              } 
            }).catch(function(error) {
              console.log("Error: ", error);
            });
          };

      
    render() {
    
      const buttonStyle = {width:"100%"}

        return(
          <Container className="Login">
            <Form className="form-signin" onSubmit={this.handleSubmit}>
              <h2>Login</h2>
              <FormGroup>
                <Input type="email" name="email" placeholder="email" className="email" onChange ={this.handleChange} />
                <Input type="password" name="password" placeholder="password" className="email" onChange ={this.handleChange} />
              </FormGroup>
              <FormGroup className="checkbox">
                <Label>
                  <Input type="checkbox" />{' '}
                  Remember me
                </Label>
              </FormGroup>
              <Button style={buttonStyle} type="submit" value="login">Login</Button> 
            </Form>
          </Container>
        )
    }
};

export default Login;