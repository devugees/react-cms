import React, { Component } from 'react';
import './App.css';
import Administration from './components/Administration/Administration'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Administration /> {/* stays temporary, will be replaced from React Routes */}
      </div>
    );
  }
}

export default App;
