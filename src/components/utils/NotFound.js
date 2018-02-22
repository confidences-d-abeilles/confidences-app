import React, { Component } from 'react';
import NotBees from '../../assets/img/imgNotFound.png';

export default class NotFound extends Component {

	render() {
		return(
			<div className="text-center">
			<img src={NotBees} className="img-fluid" alt="Responsive image"/>
			</div>
		)
	}
}
