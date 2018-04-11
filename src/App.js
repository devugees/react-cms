import React, { Component } from 'react';
import Login from './components/Login/Login';
import './App.css';
import Administration from './components/Administration/Administration'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Administration /> {/* stays temporary, will be replaced from React Routes */}
        <Login />
      </div>
    );
  }
}

export default App;
