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


// this is demo text untill we create component meanu
const Menues = () => <p>Menues</p>

class App extends Component {



  render() {

    return (
    
  
             <BrowserRouter>
              <div>
	                  <Route exact path="/login" component={Login} />
	                  <Route exact path="/administration/" component={() => {

                    
                      return <Administration />
                    }
                    } />
	                  <Route exact path="/administration/contentType" component={AddContent} />
	                  <Route exact path="/administration/menues" component={Menues} />
	                  <Route exact path="/administration/allFields" component={FieldTypes} />
        
               </div>
             </BrowserRouter>
	
    );
  }
}

export default App;
