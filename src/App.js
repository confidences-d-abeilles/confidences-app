import React, { Component } from 'react';

import CompanyPage from './components/company/Page';
import Wrapper from './components/Wrapper';

import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';

class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route path="/login" component={Wrapper} />
					<Route path="/logout" component={Wrapper} />
					<Route path="/account" component={Wrapper} />
					<Route path="/company" component={Wrapper} />
					<Route path="/contributor" component={Wrapper} />
					<Route path="/individual" component={Wrapper} />
					<Route path="/mentions_legales" component={Wrapper} />
					<Route path="/cgv" component={Wrapper} />
					<Route path="/contact" component={Wrapper} />
					<Route path="/jobs" component={Wrapper} />
					<Route path="/about" component={Wrapper} />
					<Route path="/ruches" component={Wrapper} />
					<Route path="/admin" component={Wrapper} />
					<Route path="/signup" component={Wrapper} />
					<Route path="/:company_name" component={CompanyPage} />
					<Route path="/" component={Wrapper} />
				</Switch>
			</Router>
		);
	}
}


export default App;
