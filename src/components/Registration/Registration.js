import React, { Component } from "react";
import { FormFeedback, Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./Registration.css";
import axios from "axios";
//import setAuthToken from '../../setauthtoken/setAuthToken';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      registerData: {
        email: "",
        password: "",
        role: "user",
        passwordCheck: true,
        isAuthenticated: false
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const registerDataCopy = {
      ...this.state.registerData
    };
    registerDataCopy[event.target.name] = event.target.value;
    if(registerDataCopy.password !== "" && registerDataCopy.password2 !== "" && registerDataCopy.password !== registerDataCopy.password2){
      this.setState({passwordCheck: true, registerData: registerDataCopy })
    } else {
      this.setState({passwordCheck: false, registerData: registerDataCopy })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.registerData.email,
      password: this.state.registerData.password
    };
    console.log(data);

    axios
      .post("http://localhost:5000/register", data)
      .then(response => {
        //const { token } = response.data;

        if (response.data.role) {
          // set the token in localStorage
          const token = response.data.token;
          localStorage.setItem("token", token);

          // set token to header
          //setAuthToken(token);

          const Registration = { ...this.state.registerData };
          Registration.role = true;
          Registration.isAuthenticated = true;

          console.log(Registration);

          this.setState({
            loginData: Registration
          });

          this.props.handleRegistrationSuccess(Registration);
        }
      })
      .catch(function(error) {
        console.log("Error: ", error);
      });
  }

  render() {
    return (
      <Container className="Login h-100 d-flex justify-content-center flex-column">
        <Form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
          <h2 className="mb-3">Register</h2>
          <FormGroup>
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password2"
              id="password2"
              invalid={this.state.passwordCheck}
              placeholder="Repeat Password"
              onChange={this.handleChange}
            />
            <FormFeedback>Passwords do not match</FormFeedback>
            </FormGroup>
          <FormGroup className="checkbox">
            <Label>
              <Input type="checkbox" /> Accept the Privacy Policy
            </Label>
          </FormGroup>
          <FormGroup>
            <Button>Register</Button>
          </FormGroup>
          <FormGroup>
            <a className="mr-2" href="/Login">Login</a>
            <a className="mr-2" href="/">Back</a>
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default Registration;
