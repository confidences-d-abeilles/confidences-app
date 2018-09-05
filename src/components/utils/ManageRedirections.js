import React, { Component } from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default class ManageRedirections extends Component {

	render() {
		return (
			<Switch>
				<Redirect exact from="/tarif:regex(s)?" to="/prices" />
				
			</Switch>
		);
	}
}
