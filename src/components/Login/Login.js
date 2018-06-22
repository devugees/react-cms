import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input, Container } from "reactstrap";
import "./Login.css";
import axios from "axios";
import jwtDecode from 'jwt-decode';
//import setAuthToken from '../../setauthtoken/setAuthToken';

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
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    componentDidMount() {
      if(localStorage.getItem('token')) {
        const tokenStr = jwtDecode(localStorage.getItem('token'));
        if(tokenStr) {
            this.props.history.push("/Administration");
         }
      }
    }
  handleChange(event) {
    const loginDataCopy = {
      ...this.state.loginData
    };
    loginDataCopy[event.target.name] = event.target.value;
    this.setState({ loginData: loginDataCopy });
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = {
      email: this.state.loginData.email,
      password: this.state.loginData.password
    };

    axios
      .post("http://localhost:5000/login", data)
      .then(response => {
        //const { token } = response.data;

        if (response.data.role) {
          // set the token in localStorage
          const token = response.data.token;
          localStorage.setItem("token", token);

          // set token to header
          //setAuthToken(token);

          const Logindatacopy1 = { ...this.state.loginData };
          Logindatacopy1.role = true;
          Logindatacopy1.isAuthenticated = true;

          console.log(Logindatacopy1);

          this.setState({
            loginData: Logindatacopy1
          });

          this.props.handleLoginSuccess(Logindatacopy1);
        }
      })
      .catch(function(error) {
        console.log("Error: ", error);
      });
  }

  render() {
    return (
      <Container className="Login h-100 d-flex justify-content-center flex-column " style={{background : "gray"}}>
      <img src={require("./8d5fc049-ffc4-4464-8ab7-1aa9524ab73a.png")} />
        <Form className="col-md-4 offset-md-4" onSubmit={this.handleSubmit}>
          <h2 className="mb-3">Login</h2>
          <FormGroup>
            <Input
              type="email"
              name="email"
              placeholder="Email"
              className="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Input
              type="password"
              name="password"
              placeholder="Password"
              className="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup className="checkbox">
            <Label>
              <Input type="checkbox" /> Remember me
            </Label>
          </FormGroup>
          <Button type="submit" value="login">
            Login
          </Button>
          <FormGroup>
            <a className="mr-2" href="/Registration">Register</a>
            <a className="mr-2" href="/">Back</a>
          </FormGroup>

        </Form>
      </Container>
    );
  }
}

export default Login;
