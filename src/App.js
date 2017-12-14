import React, { Component } from 'react';
import { isLoggedIn } from './services/AuthService';
import CompanyPage from './components/company/Page';
import Wrapper from './components/Wrapper';
import {StripeProvider} from 'react-stripe-elements';
import {
	BrowserRouter as Router,
	Switch,
	Route
} from 'react-router-dom';
import io from 'socket.io-client'

const config = require('./config.js');

var socket = io(config.socket_url);


class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		window.scrollTo(0, 0);
	}

	render() {
		return this.props.children
	}
}



class App extends Component {

	constructor (props) {
		super (props);
		isLoggedIn(true);
	}

	render() {
		return (
			<StripeProvider apiKey="pk_live_gx64GVXrwS7Kr84xcn7l8S5Y">
				<Router>
					<ScrollToTop>
						<Switch>
							<Route path="/login" component={Wrapper} />
							<Route path="/forgot" component={Wrapper} />
							<Route path="/reset/:token" component={Wrapper} />
							<Route path="/logout" component={Wrapper} />
							<Route path="/account" component={Wrapper} />
							<Route path="/company" component={Wrapper} />
							<Route path="/contributor" component={Wrapper} />
							<Route path="/individual" component={Wrapper} />
							<Route path="/mentions_legales" component={Wrapper} />
							<Route path="/faq" component={Wrapper} />
							<Route path="/cgv" component={Wrapper} />
							<Route path="/contact" component={Wrapper} />
							<Route path="/apply" component={Wrapper} />
							<Route path="/jobs" component={Wrapper} />
							<Route path="/team" component={Wrapper} />
							<Route path="/about" component={Wrapper} />
							<Route path="/tarifs" component={Wrapper} />
							<Route path="/ruches" component={Wrapper} />
							<Route path="/admin" component={Wrapper} />
							<Route path="/signup" component={Wrapper} />
							<Route path="/hive/:id" component={Wrapper} />
							<Route path="/hives" component={Wrapper} />
							<Route path="/:namespace" component={CompanyPage} />
							<Route path="/" component={Wrapper} />
						</Switch>
					</ScrollToTop>
				</Router>
			</StripeProvider>
		);
	}
}


export default App;
