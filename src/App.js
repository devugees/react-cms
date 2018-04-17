import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Header from './components/HeaderComponent/HeaderComponent';
import Settings from './components/SettingsComponent/SettingsComponent'
import DashBoard from './components/dashBoard/dashBoard';
import './components/dashBoard/dashBoard.css';
import Login from './components/Login/Login';
import './App.css';
import Administration from './components/Administration/Administration';
import AddContent from './components/AddContent/AddContent';
import AddPost from './components/AddPost/AddPost';
import FieldTypes from './components/FieldTypes/FieldTypes';
import Main from './components/Main/Main';


// this is demo text untill we create component meanu
const Menues = () => <p>Menues</p>

class App extends Component {



  render() {

    return (

    	<div>
             <BrowserRouter>
                 <div className="sub">
                    <Route  path="/Administration/:activeLink" component={Administration} />
	                  <Route exact path="/contentType" component={contentType} />
	                  <Route exact path="/Menues" component={Menues} />
	                  <Route exact path="/allFields" component={allFields} />
               </div>
              
             </BrowserRouter>
		  </div>
    );
  }
}

export default App;
