import React, { Component } from 'react';
import { logout } from '../services/AuthService';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class MyAccount extends Component {

	constructor(props) {
		super (props);
		logout();
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<Redirect to="/" />
		)
	}
}
