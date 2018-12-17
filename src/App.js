import React, { Component } from 'react';
import { isLoggedIn, getUserType } from './services/AuthService';
import CompanyPage from './components/company/Page';
import {StripeProvider} from 'react-stripe-elements';
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from 'react-router-dom';
import ReactGA from 'react-ga';
import MyRouter from './components/Router'

const ScrollToTop = () => {
  window.scrollTo(0, 0);
  return null;
};

class App extends Component {

	constructor (props) {
		super (props);
		if (process.env.NODE_ENV === "production") {
			ReactGA.initialize('UA-73256412-3');
			if (isLoggedIn(true) && getUserType() === '4') {
				ReactGA.ga('set', 'dimension1', 1);
			} else {
				ReactGA.ga('set', 'dimension1', 0);
			}
		}
	}

	render() {
		return (
			<StripeProvider apiKey={process.env.REACT_APP_STRIPE_API_KEY}>
					<Router>
						<div>
							<Route component={ScrollToTop} />
							<Switch>
								<Redirect path="/perus" to="/parrains/perus" />
								<Route path="/parrains/:namespace" component={CompanyPage} />
								<Route component={MyRouter} />
							</Switch>
						</div>
					</Router>
			</StripeProvider>
		);
	}
}


export default App;
