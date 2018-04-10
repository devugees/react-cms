import React, { Component } from 'react';
import Header from './components/HeaderComponent/HeaderComponent';
import './App.css';
import Administration from './components/Administration/Administration'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Administration />
        <Header />
      </div>
    );
  }
}

export default App;
