import React, { Component } from 'react';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

export default class CompanyWish extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hives: 0,
			redirect: false
		}
	}

	createBundle() {
		if (this.state.hives != 0)
		{
			request({
				url : '/bundle',
				method : 'post',
				data : {
					hives : this.state.hives
				}
			}, this.refs.notif)
			.then((res) => {
				this.setState({ redirect : true})
			})
			.catch((err) => {
			});
		} else {
			this.refs.notif.addNotification({
				level : 'error',
				message : 'Modifiez dans la première affirmation le nombre de ruches que vous souhaitez parrainer'
			})
		}
	}

    render () {
        return (
			<div className="container py-4">
				<NotificationSystem ref="notif" />
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
						<p className="text-center lead my-4">Nous parrainons <input type="text" placeholder={this.state.hives} name="hives" style={{ borderWidth : '0 0 1px 0', width: '1em', margin: '1em' }} onChange={handleChange.bind(this)} /> ruche(s)</p>
						<ul>
							<li>C'est l'equivalent de {this.state.hives * 50000} abeilles de plus pour preserver notre environnement</li>
							<li>C'est aussi {this.state.hives * 80} pots de miel par an</li>
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
