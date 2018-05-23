import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';
import CustomeCode from './components/Appearance/CustomeCode/CustomeCode';
import AddEntrie from './components/ContentTypesPanel/AddEntrie/AddEntrie';
import Structure from './components/ContentTypesPanel/Structure/Structure';
import LandingPage from './components/LandingPage/LandingPage';

class Routers extends Component {

  render() {

    return (

             <BrowserRouter>
                  <Switch className="sub">
                    <Route  exact path="/LandingPage" component={LandingPage} />
                    <Route  exact path="/login" component={Login} />
                    <Route  exact path="/CustomeCode/" component={CustomeCode} />
                    <Route  exact path="/Administration/" component={Administration} />
                    <Route  path="/Administration/main/:activeLink" component={Administration} />
                    <Route  path="/Administration/Structure/:id" component={Administration} />
                    <Route  path="/Administration/ContentType/:id" component={Administration} />
                    <Route  path="/Administration/Categories/:id" component={Administration} />
                  </Switch>
             </BrowserRouter>
             
             );
     }
}

export default Routers;
