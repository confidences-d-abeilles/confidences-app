import React, { Component } from 'react'

import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'

import FooterPage from './FooterPage'


export default class CompanyPage extends Component {

	constructor(props) {
		super (props)
		this.state = {
			user : null,
			redirect : false
		}
	}

	componentWillMount() {
		request({
			url : 'user?namespace='+this.props.match.params.company_name,
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res
			})
		}).catch((err) => {
			this.setState({
				redirect: true
			})
		})
	}

    render () {
        return (
            <div className="container">
				{(this.state.redirect)?<Redirect to="/" />:null}
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col cover">
						<img src={require('../../assets/img/hive.jpg')} className="img-fluid" alt="Cover picture" />
						<h1>{(this.state.user)?this.state.user.company_name:null}</h1>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<img src={require('../../assets/img/logo_esker.jpg')} alt="Logo entreprise" className="img-fluid" />
					</div>
					<div className="col">
						<p className="lead">
							{(this.state.user)?this.state.user.description:null}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Notre engagement pour la biodiversité</h2>
						<p className="lead">
							{(this.state.user)?this.state.user.involvement:null}
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Les ruches que nous parrainons</h2>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Les dernières actualités</h2>
					</div>
				</div>
				<FooterPage />
            </div>
        );
    }
}
