import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Auth } from './pages/Auth';

import './App.css';

const App = () => {
	return (
		<Router basename="/auth">
			<Switch>
				<Route exact path="/" component={Auth} />
			</Switch>
		</Router>
	);
};

export default App;
