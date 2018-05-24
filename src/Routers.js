import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';
import CustomeCode from './components/Appearance/CustomeCode/CustomeCode';
import AddEntrie from './components/ContentTypesPanel/AddEntrie/AddEntrie';
import Structure from './components/ContentTypesPanel/Structure/Structure';
import LandingPage from './components/LandingPage/LandingPage';
import PrivatRoute from './components/PrivatRoute/PrivatRoute';


class Routers extends Component {

  render() {

    return (
             
             <Router>
             <div>
                <Route  exact path="/login" component={Login} />
                <div className="sub">

                  <Switch>
                     <PrivatRoute
                     exact path="/Administration/" component={Administration} />
                 </Switch>

                    <Switch>
                       <PrivatRoute  path="/AddEntrie" component={AddEntrie} />
                    </Switch>

                    <Switch>
                       <PrivatRoute  exact path="/CustomeCode/" component={CustomeCode} />
                    </Switch>

                    <Switch>
                    <PrivatRoute  path="/Administration/main/:activeLink" component={Administration} />
                    </Switch>

                    <Switch>
                        <PrivatRoute  path="/Administration/Structure/:id" component={Administration} />
                    </Switch>

                    <Switch>
                       <PrivatRoute  path="/Administration/ContentType/:id" component={Administration} />
                    </Switch>

                   <Switch>
                      <PrivatRoute  path="/Administration/Categories/:id" component={Administration} />
                   </Switch>

                  </div>
                </div>
             </Router>
             
             );
     }
}

export default Routers;
