import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class ContributorAddress extends Component {
	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			redirect: false,
			message: '',
			address1: '',
			address2: '',
			address3: '',
			address4: '',
			city: '',
			zipcode: '',
			country: 'France'
		}
	}

	addAddress(e) {
		e.preventDefault();
		if (!this.state.address1 || !this.state.city || !this.state.zipcode) {
			this.refs.notif.addNotification({
				message : 'Merci de remplir tous les champs obligatoires',
				level : 'warning'
			})
		} else {
			request({
				url: '/address',
				method : 'post',
				data : {
					line1 : this.state.address1,
					line2 : this.state.address2,
					line3 : this.state.address3,
					line4 : this.state.address4,
					city : this.state.city,
					zipcode : this.state.zipcode,
					country: this.state.country,
					type : 1
				}
			}, this.refs.notif).then((res) => {
				this.setState({ redirect : true });
			})
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				address1: res.firstname+' '+res.name
			});
		})
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Adresse"/>
				{(isLoggedIn())?null:<Redirect to="/" />}
				{(this.state.redirect)?
				<Redirect to="/contributor/wish" />
				:null}
				<div className="row justify-content-center">
					<NotificationSystem ref="notif" />
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '50%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<form className="text-center">
							<h2 className="text-center my-4">Votre adresse</h2>
							<div className="form-group">
								<input type="text" name="address1" className="form-control" placeholder="Nom et prénom *" value={this.state.address1} onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="address3" className="form-control" placeholder="Adresse ligne 1 *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="address4" className="form-control" placeholder="Adresse ligne 2" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="city" className="form-control" placeholder="Ville" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="number" name="zipcode" className="form-control" placeholder="Code postal" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="country" className="form-control" placeholder="Pays" value={this.state.country} onChange={handleChange.bind(this)} />
							</div>
							<p>
								Remarque : votre adresse n’est utile que pour la
								rédaction du contrat. Ne vous inquiétez pas, nous
								n’allons pas vous contacter par voie postale.
							</p>
							<input type="submit" className="btn btn-primary" value="Continuer" onClick={this.addAddress.bind(this)} />
						</form>
					</div>
				</div>

			</div>
        );
    }
}
