import React, { Component } from 'react';
import { logout } from '../services/AuthService';
import { Redirect } from 'react-router-dom';


export default class MyAccount extends Component {

	constructor(props) {
		super (props);
		logout();
	}

	render () {
		return (
			<Redirect to="/" />
		)
	}
}
