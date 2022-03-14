// import { Router } from 'express';
import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './Containers/HomePage/HomePage.js';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			materials: []
		};
	}

	render() {
		return (
			<BrowserRouter>
				<div>
					<HomePage />
				</div>
			</BrowserRouter>
		);
	}
}

export default App;
