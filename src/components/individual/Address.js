import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import Address from '../utils/Address'

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
			phone: '',
			country: 'France',
			is_request: false
		}
			this.addAddress = this.addAddress.bind(this);
	}

	componentDidMount() {
		console.log("fin component address individual");
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				user: res,
				sexe_m: res.sexe_m?'1':'0',
				address1 : res.name+' '+res.firstname,
				is_request: true
			}, () => {
				console.log('coucou user de merde');
				console.log(res);
			})
		});
	}

	addAddress(_objState) {
		this.setState(_objState);
		console.log(_objState);
			request({
				url : '/address',
				method : 'post',
				data : {
					sexe_m : (this.state.sexe_m === '0')?false:true,
					line1 : this.state.address1,
					line2 : '',
					line3 : this.state.address3,
					line4 : this.state.address4,
					city : this.state.city,
					zipcode : this.state.zip,
					country: this.state.country,
					type : 2,
					phone: this.state.phone
				}
			}, this.refs.notif).then((res) => {
				 this.setState({
					 redirect: true
				 });
			 })
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
						<div className="col-lg-6 col-md-10 col-sm-12">
								{this.state.is_request ? <Address fnct={false} type={1} user={this.state.user} textDefault={'Remarque : merci de renseigner l’adresse de facturation de votre société. Si l’adresse de livraison n’est pas la même vous aurez toujours la possibilité de la modifier par la suite.'} title={'Adresse de facturation'} textButton={'Continuer'} redirect={'/company/wish'} functionDefault={this.addAddress}/>: null}
						</div>
					</div>
			</div>
        );
    }
}
