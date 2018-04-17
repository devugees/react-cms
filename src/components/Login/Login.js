import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, Container, Row, Col } from 'reactstrap';
import './Login.css';

 class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          loginData: {
            email: "",
            password: "",
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
    
        fetch('http://localhost:5000/login', {
        method: 'POST',
        header: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(this.state.loginData)
        })
        .then(res => res.json())
        .then(data => console.log(data));
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