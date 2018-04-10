import React, { Component } from 'react';
import './Login.css';

 class Login extends Component { 

    render() {
        return(
            <div class="Homepage">
                <form>
                    <div class="box">
                        <h1>Login</h1>
                        <input type="email" placeholder="email" class="email" />
                        <input type="password" placeholder="password" class="email" />
                        <a href=""><div class="btn">Login</div></a> 
                    </div>
                </form>
                <p>Forgot your password? <u>Click Here!</u></p>
            </div>
        )
    }
};

export default Login;