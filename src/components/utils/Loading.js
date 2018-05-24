import React, { Component } from 'react';
import loader from '../../assets/img/three-dots.svg'

export default class Loading extends Component {

	render() {
		return (
			<div style={{ width: '100%', textAlign: 'center', height: '60px', paddingTop: '20px' }}>
				<img src={loader} alt="Loading" />
			</div>
		)
	}
}
