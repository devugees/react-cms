import React, { Component } from 'react';
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
    
    
        fetch.post('http://localhost:5000/login', data).then(function(response) {
          console.log("Login successful: ", response);
        }).catch(function(error) {
          console.log("Error: ", error);
        });
      };

    render() {
        return(
            <div className="Homepage">
                <form>
                    <div className="box">
                        <h1>Login</h1>
                        <input type="email" name="email" placeholder="email" className="email" onChange ={this.handleChange} />
                        <input type="password" name="password" placeholder="password" className="email" onChange ={this.handleChange} />
                        <input type="submit" value="login" className="btn" onSubmit={this.handleSubmit} />
                    </div>
                </form>
                <p>Forgot your password? <u>Click Here!</u></p>
            </div>
        )
    }
};

export default Login;