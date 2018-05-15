import React, { Component } from 'react';

const config = require("../config.js");

export default class Pay extends Component {

	constructor(props) {
		super(props);
		this.io = require('../assets/js/sails.io.js')( require('socket.io-client') );
		this.io.sails.url = config.server_url;
	}

	render () {
		return (
			<div>
			</div>
		)
	}
}
