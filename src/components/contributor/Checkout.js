import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { request } from '../../services/NetService';
import { handleChange } from '../../services/FormService';

export default class ContributorCheckout extends Component {

	constructor(props) {
		super(props);
		this.state = {
		}
		this.getContract();
	}

	getContract() {
		request('/contract', 'GET', null, 'json', (status, massage, content) => {
			if (status) {

			}
		});
	}

	proceed() {
		request('/user/contract/sign', 'GET', null, 'json', (status, message, content) => {
			if (status) {
				this.setState({
					redirect: true
				});
			}
		});
	}

    render () {
        return (
			<div className="container py-4">
				{(this.state.redirect)?<Redirect to="/contributor/manage" />:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '100%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<h2 className="text-center my-4">Validation et singature electronique du contrat</h2>
						<p>

						</p>

						<p className="text-center">
							<button onClick={this.proceed.bind(this)} className="btn btn-primary">Signer le contrat</button>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
