import React, { Component } from 'react';
import './App.css';
import Routers from './Routers';
import FileUploader from './components/FileUploader/FileUploader.js';

// this is demo text untill we create component meanu

class App extends Component {

render() {
	return (
		<div>
			<FileUploader/>
		</div>
		);
	}
}

export default App;
