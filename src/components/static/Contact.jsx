import React, { Component } from 'react';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { handleChange } from '../../services/FormService'
import FontAwesome from 'react-fontawesome'
import { isLoggedIn } from '../../services/AuthService'
import { Link } from 'react-router-dom'

import Meta from '../utils/Meta'

export default class Contact extends Component {

	constructor(props) {
		super (props);
		this.state = {
			message: null,
			list: [],
			criteria: ''
		}
		
	}

	componentDidMount() {
		if (isLoggedIn()) {
			request({
				url: '/user/me',
				method: 'get'
			}, this.refs.notif).then((res) => {
				this.setState({
					sexe_m: (res.sexe_m?'1':'0'),
					firstname: res.firstname,
					name: res.name,
					email: res.email,
					job: res.job
				})
			})
		}

		request({
			url : '/faq',
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				list : res
			})
		})
	}

	submitContact(e) {
		e.preventDefault();
		request({
			url : '/contact',
			method : 'post',
			data : {
				title: (this.state.sexe_m==='0'? 'Mme.':'M.'),
				firstname: this.state.firstname,
				name: this.state.name,
				job: this.state.job,
				email: this.state.email,
				demand: this.state.demand,
				content: this.state.content
			}
		}, this.refs.notif).then((res) => {
			this.setState({
				content: '',
				demand: '0',
				message: 'Votre message a bien été envoyé. Nous allons le traiter dans les plus brefs délais.'
			})
		})
	}

	render () {
		return (
			<div className="container">
				<Meta title="Contact"/>
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h2 className="text-center my-4"><span className="align-middle">La réponse à votre question se trouve peut-être dans notre FAQ </span>
							<img src={require('../../assets/img/smiley/happy.svg')} alt="smiley happy"
								style={{ height: '1em' }} />
						</h2>
						<div className="input-group">
							<span className="input-group-addon">Rechercher un terme : </span>
							<input type="text" name="criteria" onChange={handleChange.bind(this)} className="form-control" />
						</div>
						{this.state.list.map((item) => {
							if (item.type === 1 && this.state.criteria.length > 0 && (item.question.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 || item.answer.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 )) {
								return (
									<div className="my-4" key={item.id}>
										<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
										<p className="collapse" id={item.id}>{item.answer}</p>
										<hr />
									</div>
								)
							} else {
								return null
							}
						})}
							{this.state.list.map((item) => {
								if (item.type === 2 && this.state.criteria.length > 0 && (item.question.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 || item.answer.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 )) {
									return (
										<div className="my-4" key={item.id}>
											<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							{this.state.list.map((item) => {
								if (item.type === 3 && this.state.criteria.length > 0 && (item.question.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 || item.answer.toLowerCase().indexOf(this.state.criteria.toLowerCase()) >= 0 )) {
									return (
										<div className="my-4" key={item.id}>
											<span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
											<p className="collapse" id={item.id}>{item.answer}</p>
											<hr />
										</div>
									)
								} else {
									return null
								}
							})}
							<p className="text-center my-5">
								<Link to="/faq">Consulter la FAQ intégrale</Link>
							</p>
					</div>
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h2 className="my-4">Vous n'avez pas trouvé ce que vous cherchiez ?</h2>
						<form>
							<fieldset className="container form-group d-flex">
								<div className="row">
									<legend className="col-form-legend">Civilité *</legend>
								</div>
								<div className="row">
									<label className="radio-inline form-check-label">
										<input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.sexe_m === '1'}/>
										&nbsp;M
									</label>
									<label className="radio-inline form-check-label ml-4">
										<input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.sexe_m === '0'}/>
										&nbsp;Mme
									</label>
								</div>
							</fieldset>
							<div className="form-group">
								<input type="text" className="form-control" name="firstname" value={this.state.firstname} placeholder="Prénom *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="name" value={this.state.name} placeholder="Nom *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="job" value={this.state.job} placeholder="Fonction" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" name="email" value={this.state.email} placeholder="Email *" onChange={handleChange.bind(this)} />
							</div>
							<div className="form-group">
								<select className="form-control" value={this.state.demand} name="demand" onChange={handleChange.bind(this)}>
									<option selected disabled>Ma demande concerne *</option>
									<option value="1">Mon parrainage</option>
									<option value="3">Mon compte</option>
									<option value="2">Les Partenaires</option>
									<option value="4">Une demande professionnelle</option>
									<option value="5">Le webmaster</option>
									<option value="6">Le responsable communication</option>
									<option value="7">Autre</option>
								</select>
							</div>
							<div className="form-group">
								<textarea className="form-control" name="content" value={this.state.content} placeholder="Mon message *" onChange={handleChange.bind(this)}>
								</textarea>
							</div>
							{this.state.message &&
								<p className="alert alert-success">{this.state.message}</p>}
							<div className="form-group text-center">
								<input type="submit" className="btn btn-secondary" value="Envoyer" onClick={this.submitContact.bind(this)} />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
