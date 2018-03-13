
import { client } from './Net';
import ReactGA from 'react-ga';
import React, { Component } from 'react';
import { Redirect } from 'react-router';

export function login(id, token, user_type) {
	localStorage.setItem('id', id);
	localStorage.setItem('token', token);
    localStorage.setItem('user_type', user_type);
	client.defaults.headers.common['Authorization'] = 'Bearer '+token;
	if (user_type === 4) {
		ReactGA.ga('set', 'dimension1', 1);
	}
	return true;
}

export function logout() {
	localStorage.removeItem('token');
	localStorage.removeItem('id');
	localStorage.removeItem('user_type');
	ReactGA.ga('set', 'dimension1', 0);
}

export function isLoggedIn(expected) {
    const token = localStorage.getItem('token');
    if (token) {
		client.defaults.headers.common['Authorization'] = 'Bearer '+token;
        return true;
    } else {
        return false;
    }
}

export function getToken() {
    return localStorage.getItem('token');
}

export function getId() {
    return localStorage.getItem('id');
}

export function getUserType() {
	return localStorage.getItem('user_type');
}

export class contributorOnly extends Component {

	constructor(props) {
		super(props);
		console.log('contributorOnly');
		this.state = { denied : false }
	}

	componentDidMount() {
		if (localStorage.getItem('user_type') != 3) {
			this.setState({ denied : true })
		}
	}

	render () {
		return (<div>{this.state.denied  && <Redirect to="/" />}</div>)
	}
}

export class companyOnly extends Component {

	constructor(props) {
		super(props);
		this.state = { denied : false }
	}

	componentDidMount() {
		if (localStorage.getItem('user_type') != 2) {
			this.setState({ denied : true })
		}
	}

	render () {
		return (<div>{this.state.denied  && <Redirect to="/" />}</div>)
	}
}

export class individualOnly extends Component {

	constructor(props) {
		super(props);
		this.state = { denied : false }
	}

	componentDidMount() {
		if (localStorage.getItem('user_type') != 1) {
			this.setState({ denied : true })
		}
	}

	render () {
		return (<div>{this.state.denied  && <Redirect to="/" />}</div>)
	}
}

export class adminOnly extends Component {

	constructor(props) {
		super(props);
		this.state = { denied : false }
	}

	componentDidMount() {
		if (localStorage.getItem('user_type') != 4) {
			this.setState({ denied : true })
		}
	}

	render () {
		return (<div>{this.state.denied  && <Redirect to="/" />}</div>)
	}
}
