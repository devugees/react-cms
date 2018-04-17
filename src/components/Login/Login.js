import React, { Component } from 'react';
import './Login.css';
import axios from 'axios';
import { Nav, NavItem, NavLink } from 'reactstrap';

 class Login extends Component { 

    constructor(props) {
        super(props);
        this.state = {
          loginData: {
            email: "",
            password: "",
            role: false
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
                console.log(response)
              if(response.data[0].role === 'admin') {
                console.log('the role will change to true')
                const Logindatacopy1 = {...this.state.loginData};
                Logindatacopy1.role = true ;
                this.setState({loginData: Logindatacopy1});
                this.props.history.push("/administration");
              }
            }).catch(function(error) {
              console.log("Error: ", error);
            });
          };

    render() {
        return(
            <div className="Homepage">
                <form onSubmit={this.handleSubmit}>
                    <div className="box">
                        <h1>Login</h1>
                        <input type="email" name="email" placeholder="email" className="email" onChange ={this.handleChange} />
                        <input type="password" name="password" placeholder="password" className="email" onChange ={this.handleChange} />
                        <input type="submit" value="login" className="btn"  />
                        <NavItem href="/administration" className="btn">Go to admin </NavItem>

                    </div>
                </form>
                <p>Forgot your password? <u>Click Here!</u></p>
            </div>
        )
    }
};

export default Login;