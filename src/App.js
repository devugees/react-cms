import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';

// this is demo text until we create component menu
const Menues = () => <p>Menues</p>

class App extends Component {
  render() {
    return (
    	<div>
         <BrowserRouter>
          <div className="sub">
            <Route  exact path="/Administration/" component={Administration} />
            <Route  path="/Administration/:activeLink" component={Administration} />
          </div>
         </BrowserRouter>
		  </div>
    );
  }
}

export default App;
