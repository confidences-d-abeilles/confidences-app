import React, { Component } from 'react';
import { request } from '../../services/NetService';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';
import { Redirect } from 'react-router-dom';

export default class ContributorWish extends Component {

	constructor(props) {
		super(props);
		this.state = {
			duration: 1
		}
	}

	selectContract() {
		request('/user/contract/add', 'POST', JSON.stringify(this.state), 'json', (status, message,content) => {
			if (status)
			{
				this.setState({
					redirect: true
				});
			}
		});
	}

	render () {
		return (
			<div className="container py-4">
				{(isLoggedIn())?null:<Redirect to="/" />}
				{(this.state.redirect)?
				<Redirect to="/contributor/checkout" />
				:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '75%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<p className="text-center lead my-4">
							Je choisis un contrat d'une durée de<br />
						<select name="duration" onChange={handleChange.bind(this)}>
								<option value="1">1 an</option>
								<option value="3">3 ans</option>
							</select>
						</p>


						<p className="text-center">
						<button onClick={this.selectContract.bind(this)}>Continuer</button>
						</p>
					</div>
				</div>
			</div>
		);
	}
}
