import React, { Component } from 'react';
import { isLoggedIn, getUserType } from '../services/AuthService';
import { Redirect } from 'react-router-dom';

export default class MyAccount extends Component {

	render () {
		return (
			<div>
				{(isLoggedIn(true))?null:<Redirect to="/" />}
				{(getUserType() === '1')?<Redirect to="/individual/manage" />:''}
				{(getUserType() === '2')?<Redirect to="/company/manage" />:''}
				{(getUserType() === '3')?<Redirect to="/contributor/manage" />:''}
				{(getUserType() === '4')?<Redirect to="/admin/manage" />:''}
			</div>
		)
	}
}
