import React, { Component } from 'react';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class CompanyWish extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			hives: 1,
			redirect: false
		}
	}

	createBundle(e) {
		e.preventDefault()
		if (this.state.hives > 0 && this.state.hives < 100)
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

	componentDidUpdate() {
		if (this.state.hives > 99)
		{
			this.setState({ hives : 0 })
		}
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Choix de l'offre"/>
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
					<form className="col-lg-6 col-md-10 col-sm-12" onSubmit={this.createBundle.bind(this)}>
						<div className="container">
							<div className="row">
								<p className="col-9 text-right lead my-4 px-0">Nous parrainons <input type="number" min="1" max="99" placeholder={this.state.hives}
									name="hives" style={{ borderWidth : '0 0 1px 0', width: '1.7em', margin: '1em', fontSize: '2em' }}
									value={this.state.hives} onChange={handleChange.bind(this)} />
								</p>
								<p className="col lead my-4 pl-0 my-auto">
									{this.state.hives>1 ? 'ruches':'ruche'}
								</p>
							</div>
						</div>
						<ul>
							<li>Cela représente plus de {this.state.hives * 50000} abeilles supplémentaires pour prendre soin de la biodiversité</li>
							<li>C’est aussi l’équivalent de {this.state.hives * 80} pots de miel par an</li>
						</ul>
						<p className="text-center">
							<button  className="btn btn-primary">Continuer</button>
						</p>
					</form>
				</div>
			</div>
        );
    }
}
