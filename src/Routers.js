import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';



class Routers extends Component {

  render() {

    return (

             <BrowserRouter>
                  <Switch className="sub">
                    <Route  exact path="/login" component={Login} />
                    <Route  exact path="/Administration/" component={Administration} />
                    <Route  path="/Administration/:activeLink" component={Administration} />

                  </Switch>
              
             </BrowserRouter>
             
             );
  }
}

export default Routers;
