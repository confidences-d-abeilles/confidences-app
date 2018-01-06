
import React, { Component } from 'react'
import logo from '../../assets/img/logo.png'
import FontAwesome from 'react-fontawesome'
import { Link } from 'react-router-dom'

export default class FooterPage extends Component {

	render () {
		return (
			<div className="row">
				<div className="col-lg-12 my-4">
					<hr />
					<p className="text-center lead">
						Un service assuré par Confidences d'Abeilles
					</p>
					<Link to="/">
						<p className="text-center lead">
							<img src={logo} alt="Confidences d'Abeilles Logo"  className="img-fluid my-4" style={{ maxHeight: '150px' }}	 />
						</p>
					</Link>
					<div className="text-center">
						<a style={{ color : 'black' }} href="https://www.facebook.com/confidencesdabeille" target="_blank" rel="noopener noreferrer"><FontAwesome name='facebook-official' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a style={{ color : 'black' }} href="https://twitter.com/Cosme_conf" target="_blank" rel="noopener noreferrer"><FontAwesome name='twitter' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a style={{ color : 'black' }} href="https://www.instagram.com/confidences_dabeilles/" target="_blank" rel="noopener noreferrer"><FontAwesome name='instagram' size="2x" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						<a style={{ color : 'black' }} href="https://www.linkedin.com/company-beta/11010483/" target="_blank" rel="noopener noreferrer"><FontAwesome name='linkedin' size="2x" /></a>
					</div>
				</div>
			</div>
		)
	}
}
