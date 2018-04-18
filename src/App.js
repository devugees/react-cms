import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import Routers from './Routers';
import Administration from './components/Administration/Administration';


// this is demo text untill we create component meanu


class App extends Component {

  render() {
    return (
              <Routers/>
      );
  }
}

export default App;
