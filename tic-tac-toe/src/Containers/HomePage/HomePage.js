import React, { Component } from 'react';
// import Materials from '../materials/materials';
import { Route, Link, Routes } from 'react-router-dom';
import BasicGame from '../BasicGame/BasicGame';
import FutureTab from '../FutureTab';
// import classes from './dashboard.module.css';

// Basic homepage with h1 and routes to other pages.
// To be built out in future once submittal and material functionality is implemented
class HomePage extends Component {
	render() {
		return (
			<div>
				<header>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/basicTicTacToe">Tic Tac Toe</Link>
							</li>
							<li>
								<Link to="/futuretab">FutureTab</Link>
							</li>
							{/* <li>
								<Link to="/submittals">Submittals</Link>
							</li>
							<li>
								<Link to="/co_log">CO Log</Link>
							</li> */}
						</ul>
					</nav>
				</header>
				<Routes>
					<Route path="/" exact element={HomePage} />
					<Route path="/basicTicTacToe" element={<BasicGame />} />
					<Route path="/futuretab" exact element={<FutureTab />} />
					{/* <Route path="/submittals" exact component={Submittals} /> */}
					{/* <Route path="/co_log" exact component={COs} /> */}
				</Routes>
			</div>
		);
	}
}

export default HomePage;
