import React, { Component } from 'react'
import Meta from '../utils/Meta'
import { handleChange } from '../../services/FormService'
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import { Link, Redirect } from 'react-router-dom'

export default class More extends Component {

  constructor(props) {
		super(props);
		this.state = {
			email: '',
			firstname: '',
			redirect : false,
			ok : false
		}
	}

	Newsletter(e) {
		e.preventDefault();
		 request({
 			url: '/newsletter',
 			method: 'POST',
			data: {
				firstname : this.state.firstname,
				email : this.state.email,
				listId : 17334
			}
 		}, this.refs.notif).then(res => {
			 console.log(res);
			 this.setState({
				 email : '',
				 firstname : '',
				 ok : true
			 });
			 setTimeout(() => {
				this.setState({
					redirect : true
				})
			 }, 3000)
 		}).catch(e => {
		 })
	}

	render() {
		return (
			<div className="container">
				<Meta title="Newsletter"/>
				<NotificationSystem ref="notif" />
				{this.state.redirect && <Redirect to="/" />}
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h2 className="text-center mt-5 mb-4">Inscription à la newsletter</h2>
						{(!this.state.ok)?
						<form onSubmit={this.Newsletter.bind(this)}>
							<div className="form-group">
								<input type="text" className="form-control" name="email" onChange={handleChange.bind(this)}  placeholder='email'/>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" name="firstname" onChange={handleChange.bind(this)}  placeholder='firstname'/>
							</div>
							{this.state.message}
							{this.state.message && 
							<p className="alert alert-success">
								{this.state.message}
							</p>}
							{this.state.error && 
							<p className="alert alert-danger">
								{this.state.error}
							</p>}
							<div className="text-center">
								<button className="btn btn-secondary">Soumettre</button>
							</div>
						</form>:
						<p>
							Vous allez être redirigé vers l'accueil du site dans 3 secondes. Si ce n'est pas le cas, <Link to="/">Cliquez ici</Link>.
						</p>}
					</div>
				</div>
			</div>
	)}
}
