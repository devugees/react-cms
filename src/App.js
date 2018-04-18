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
import ContentTypes from './components/ContentTypes/ContentTypes';
import AddPost from './components/AddPost/AddPost';
import FieldTypes from './components/FieldTypes/FieldTypes';
import AllFields from './components/AllFields/AllFields';
import Main from './components/Main/Main';


// this is demo text untill we create component meanu
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
