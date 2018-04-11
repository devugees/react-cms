import React, { Component } from 'react';
import Login from './components/Login/Login';
import Header from './components/HeaderComponent/HeaderComponent';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Login />
        <Header />
      </div>
    );
  }
}

export default App;
