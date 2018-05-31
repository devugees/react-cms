import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Routers from './Routers';
import FileUploader from './components/FileUploader/FileUploader.js';

// this is demo text untill we create component meanu

class App extends Component {

render() {
	return (
			<Router>
			  <Routers/>
			</Router>
		);
	}
}

export default App;
