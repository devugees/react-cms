import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';
import AddEntrie from './components/ContentTypesPanel/AddEntrie/AddEntrie';



class Routers extends Component {

  render() {

    return (

             <BrowserRouter>
                  <Switch className="sub">
                    <Route  exact path="/Administration/" component={Administration} />
                    <Route  exact path="/login" component={Login} />
                    <Route  path="/Administration/:activeLink" component={Administration} />
                    <Route  path="/AddEntrie" component={AddEntrie} />

                  </Switch>
              
             </BrowserRouter>
             
             );
  }
}

export default Routers;
