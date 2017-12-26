
import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class ContributorManageHelp extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div>
				<h1>Aide</h1>
				[static content]
			</div>
		);
	}
}
