
import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class ContributorManageConditions extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div>
				<h1>Conditions spécifiques</h1>
				[static content]
			</div>
		);
	}
}
