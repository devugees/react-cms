import React, { Component } from 'react';
import Header from './components/HeaderComponent/HeaderComponent';
import Admin from './components/dashBoard/dashBoard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Admin />
      </div>
    );
  }
}

export default App;
