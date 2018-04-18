import React, { Component } from 'react';
import {BrowserRouter, Route, sw} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';


class Routers extends Component {

  render() {

    return (

             <BrowserRouter>
                  <div className="sub">
                    <Route  exact path="/Administration/" component={Administration} />
                    <Route  path="/Administration/:activeLink" component={Administration} />
                  </div>
              
             </BrowserRouter>
             );
  }
}

export default Routers;
