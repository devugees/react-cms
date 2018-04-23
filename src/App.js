import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Administration from './components/Administration/Administration';
import Login from './components/Login/Login';


// this is demo text untill we create component meanu


class App extends Component {



  render() {

    return (

    	<div>
             <BrowserRouter>
                 <div className="sub">
                    <Route  exact path="/Administration/" component={Administration} />
                    <Route  exact path="/login" component={Login} />
                    <Route  path="/Administration/:activeLink" component={Administration} />
	                
               </div>
              
             </BrowserRouter>
		  </div>
    );
  }
}

export default App;
