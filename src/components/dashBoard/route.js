import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';


import App from  '../App';


class App extends Component {

  render() {
    return (
          <BrowserRouter>
	               <div>
	                  <Route exact path="/admin" component={App} />
              </div>
             </BrowserRouter>
	
		
    );
  }
}

export default App;
