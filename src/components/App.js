import React, { Component, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../styles/App.css';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import NoMatch from './NoMatch';
import LocationDisplay from './LocationDisplay';

class AppRouter extends Component {
	render() {
		return (
			<BrowserRouter>
				<Navigation />
				<Switch>
					<Route exact path={'/'} component={Home} />
					<Route path={'/about'} component={About} />
					<Route path={'*'} component={NoMatch} />
				</Switch>
				<LocationDisplay />
			</BrowserRouter>
		);
	}
}

class App extends Component {
	render() {
		return (
			<div id="main">
				<AppRouter />
			</div>
		);
	}
}

export default App;
