import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import EditAddress from '../utils/Address/EditAddress'

export default class CompanyAddress extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			redirect: false,
			message: '',
			address: {
				country: 'France',
				type: 1
			}
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				address: {
					...this.state.address,
					sexe_m: res.sexe_m?'1':'0',
					name: res.name,
					firstname: res.firstname,
					company_name: res.company_name,
					phone: res.phone
				}
			});
		});
	}

	changeAddress = (e) => {
		this.setState({
			address: { ...this.state.address, [e.target.name] : e.target.value }
		})
	}

	createAddress = (e) => {
		e.preventDefault();
		request({
			url : '/address',
			method: 'post',
			data : this.state.address
		}, this.refs.notif).then((res) => {
			console.log(this.state.address);
			request({
				url : '/address',
				method: 'post',
				data : { ...this.state.address, type: 2 }
			}, this.refs.notif).then((res) => {
				this.setState({
					redirect : true
				})
			});
		});
	}

	render () {
		return (
			<div className="container py-4">
				<Meta title="Adresse"/>
				<NotificationSystem ref="notif" />
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '60%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h2 className="text-center my-4">Adresse de facturation</h2>
						<EditAddress company={true} data={this.state.address} onChange={this.changeAddress} onSubmit={this.createAddress} />
						<p className="alert alert-info">Merci de renseigner ici l’adresse de facturation de votre société. Si l’adresse de livraison n’est pas la même, vous aurez toujours la possibilité de la modifier par la suite.</p>
					</div>
				</div>
				{(this.state.redirect)?
					<Redirect to="/company/wish" />
					:null}
				</div>
			);
		}
	}
