import React, { Component } from 'react';
import request from '../../../../services/Net';
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../../../services/FormService'
import ReactGA from 'react-ga';

export default class ContributorManageInfosSocial extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			loading: true,
			usexe_m: '',
			bsexe_m: ''
		}
	}

	componentDidMount() {
		request({
			url : '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			if (res) {
				this.setState({
					loading: false,
					usexe_m: res.sexe_m?'1':'0',
					firstname: res.firstname,
					name: res.name,
					email: res.email,
					school: res.school,
					user: res
				})
				res.addresses.map((address) => {
					if (address.type === 1) {
						this.setState({
							bid: address.id,
							bsexe_m: address.sexe_m?'1':'0',
							bline1: address.line1,
							bline2: address.line2,
							bline3: address.line3,
							bline4: address.line4,
							bzipcode: address.zipcode,
							bcity: address.city
						})
					}

					return (0);
				});
			}
		});
	}

	submitInfos(e) {
		e.preventDefault();
		request({
			url: '/user',
			method: 'put',
			data: {
				sexe_m: this.state.usexe_m === '0' ? 'false':'true',
				firstname: this.state.firstname,
				name: this.state.name,
				email: this.state.email,
				school: this.state.school
			}
		}, this.refs.notif)
	}

	submitBaddress(e) {
		e.preventDefault();
		request({
			url: '/address/'+this.state.bid,
			method: 'put',
			data: {
				sexe_m: this.state.bsexe_m === '0' ? 'false':'true',
				line1: this.state.bline1,
				line2: this.state.bline2,
				line3: this.state.bline3,
				line4: this.state.bline4,
				zipcode: this.state.bzipcode,
				city: this.state.bcity
			}
		}, this.refs.notif);
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(this.state.loading)?'Chargement en cours...':
					<div>
						<form className="row py-4">
							<div className="col-6 text-center">
								<div className="form-group d-flex">
									<label className="radio-inline form-check-label">
										<input type="radio" className="form-check-input" name="usexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.usexe_m === '1'}/>
										&nbsp;M
									</label>
									<label className="radio-inline form-check-label ml-4">
										<input type="radio" className="form-check-input" name="usexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.usexe_m === '0'}/>
										&nbsp;Mme
									</label>
								</div>
								<div className="form-group">
									<input type="text" value={this.state.firstname} name="firstname" className="form-control" placeholder="Prénom" onChange={handleChange.bind(this)} />
								</div>
								<div className="form-group">
									<input type="email" value={this.state.email} name="email" className="form-control" placeholder="Email" onChange={handleChange.bind(this)} />
								</div>
							</div>
							<div className="col-6 text-center">
								<div className="form-group">
									<input type="text" value={this.state.name} name="name" className="form-control" placeholder="Nom" onChange={handleChange.bind(this)} />
								</div>
								<div className="form-group">
									<input type="text" value={this.state.school} name="school" className="form-control" placeholder="Mon école" onChange={handleChange.bind(this)} />
								</div>
							</div>
							<div className="col text-center">
								<div className="form-group">
									<input type="submit" value="Enregistrer" className="btn btn-primary" onClick={this.submitInfos.bind(this)}/>
								</div>
							</div>
						</form>
						<div className="row">
							<div className="col-6">
								<span className="lead">Adresse :<br /></span>
								<form key={this.state.user.id}>
									<div className="form-group d-flex">
										<label className="radio-inline form-check-label">
											<input type="radio" className="form-check-input" name="bsexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.bsexe_m === '1'}/>
											&nbsp;M
										</label>
										<label className="radio-inline form-check-label ml-4">
											<input type="radio" className="form-check-input" name="bsexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.bsexe_m === '0'}/>
											&nbsp;Mme
										</label>
									</div>
									<div className="form-group">
										<input type="texte" name="bline1" onChange={handleChange.bind(this)} value={this.state.bline1} className="form-control" placeholder="Nom et prénom" />
									</div>
									<div className="form-group">
										<input type="texte" name="bline2" onChange={handleChange.bind(this)} value={this.state.bline2} className="form-control" placeholder="Etablissement (optionnel)" />
									</div>
									<div className="form-group">
										<input type="texte" name="bline3" onChange={handleChange.bind(this)} value={this.state.bline3} className="form-control" placeholder="Ligne 1" />
									</div>
									<div className="form-group">
										<input type="texte" name="bline4" onChange={handleChange.bind(this)} value={this.state.bline4} className="form-control" placeholder="Ligne 2" />
									</div>
									<div className="form-group row">
										<div className="col-4">
											<input type="texte" name="bzipcode" onChange={handleChange.bind(this)} value={this.state.bzipcode} className="form-control" />
										</div>
										<div className="col-8">
											<input type="texte" name="bcity" onChange={handleChange.bind(this)} value={this.state.bcity} className="form-control" />
										</div>
									</div>
									<div className="form-group">
										<input type="submit" value="Enregistrer" className="btn btn-primary" onClick={this.submitBaddress.bind(this)} />
									</div>
								</form>
							</div>
						</div>
					</div>
				}
			</div>
		);
	}
}
