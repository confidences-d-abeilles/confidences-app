import React, { Component } from 'react'

export default class SquareImg extends Component {

	constructor(props) {
		super(props);
	}

	render () {
		return (
			<div style={{ width: '80%', paddingTop: '100%', backgroundImage: `url(${this.props.src})`, backgroundSize: 'cover' }}>
			</div>
		)
	}
}
