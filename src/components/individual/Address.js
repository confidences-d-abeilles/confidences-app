import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class IndividualAddress extends Component {
	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			redirect: false,
			message: '',
			sexe_m: '',
			address1: '',
			address2: '',
			address3: '',
			address4: '',
			city: '',
			zipcode: '',
			country: 'France'
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				sexe_m: res.sexe_m?'1':'0',
				address1 : res.name+' '+res.firstname
			})
		});
	}

	addAddress(e) {
		e.preventDefault();
		if (!this.state.sexe_m || !this.state.address3 || !this.state.city || !this.state.zipcode) {
			this.refs.notif.addNotification({
				message: "Merci de renseigner tous les champs obligatoires",
				level: 'warning'
			});
		} else {
			request({
				url : '/address',
				method : 'post',
				data : {
					sexe_m : (this.state.sexe_m === '0')?false:true,
					line1 : this.state.address1,
					line2 : this.state.address2,
					line3 : this.state.address3,
					line4 : this.state.address4,
					city : this.state.city,
					zipcode : this.state.zipcode,
					country: this.state.country,
					type : 1
				}
			}, this.refs.notif)
			.then((res) => {
				request({
					url : '/address',
					method: 'post',
					data : {
						sexe_m : (this.state.sexe_m === '0')?false:true,
						line1 : this.state.address1,
						line2 : this.state.address2,
						line3 : this.state.address3,
						line4 : this.state.address4,
						city : this.state.city,
						zipcode : this.state.zipcode,
						country: this.state.country,
						type : 2
					}
				}, this.refs.notif)
				.then((res) => {
					console.log("done");
					this.setState({
						redirect: true
					});
				})
			})
			.catch((err) => {});
		}
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Adresse"/>
				<NotificationSystem ref="notif" />
				{(isLoggedIn())?null:<Redirect to="/" />}
				{(this.state.redirect)?
					<Redirect to="/individual/wish" />
					:null}
				<div className="row justify-content-center">
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
								<div className="form-group text-left">
									{this.state.sexe_m === '0'?'Mme. ':'M. '}{this.state.address1}
								</div>
							<div className="form-group">
								<input type="text" name="address3" className="form-control" placeholder="Adresse ligne 1 *" value={this.state.address3} onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" name="address4" className="form-control" placeholder="Adresse ligne 2" value={this.state.address4} onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group row">
								<div className="col-4">
								<input type="number" name="zipcode" className="form-control" placeholder="Code postal *" onChange={handleChange.bind(this)} />
								</div>
								<div className="col-8">
									<input type="text" name="city" className="form-control" placeholder="Ville *" onChange={handleChange.bind(this)} />
								</div>
							</div>
							<div className="form-group">
								<input type="text" name="country" className="form-control" placeholder="Pays *" value={this.state.country} onChange={handleChange.bind(this)} />
							</div>
							<input type="submit" className="btn btn-primary" value="Continuer" onClick={this.addAddress.bind(this)} />
						</form>
					</div>
				</div>
			</div>
        );
    }
}
