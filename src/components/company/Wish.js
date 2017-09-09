import React, { Component } from 'react';
import { handleChange } from '../../services/FormService';
import { request } from '../../services/NetService';
import { Redirect } from 'react-router-dom';

export default class CompanyWish extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hives: 1,
			redirect: false
		}
	}

	createBundle() {
		request('/user/bundle/create', 'POST', JSON.stringify({
			hives : this.state.hives
		}), 'json', (status, message, content) => {
			if (status) {
				this.setState({
					redirect : true
				});
			}
		});
	}

    render () {
        return (
			<div className="container py-4">
				{(this.state.redirect)?<Redirect to="/company/checkout" />:null}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '80%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<p className="text-center lead my-4">Nous parrainons <input type="text" placeholder={this.state.hives} name="hives" style={{ borderWidth : '0 0 1px 0', width: '1em'}} onChange={handleChange.bind(this)} /> ruche(s)</p>
						<ul>
							<li>C'est l'equivalent de {this.state.hives * 50000} abeilles de plus pour preserver notre environnement</li>
							<li>C'est aussi {this.state.hives * 40} pots de miel par an</li>
						</ul>
						<p className="text-center">
						<button onClick={this.createBundle.bind(this)} className="btn btn-primary">Continuer</button>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
