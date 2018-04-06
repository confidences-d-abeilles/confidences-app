import React, { Component } from 'react';
import loader from '../../assets/img/load2.gif'

export default class Loading extends Component {

	render() {
		return (
			<div style={{ width: '100%', textAlign: 'center'}}>
				<img src={loader} alt="Loading" />
			</div>
		)
	}
}
