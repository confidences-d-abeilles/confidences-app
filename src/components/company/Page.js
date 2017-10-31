import React, { Component } from 'react'

import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'

import FooterPage from './FooterPage'

const config = require('../../config.js');

export default class CompanyPage extends Component {

	constructor(props) {
		super (props)
		this.state = {
			user : null,
			redirect : false
		}
	}

	componentDidMount() {
		request({
			url : 'users/namespace/'+this.props.match.params.namespace,
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
						<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.cover:null} className="img-fluid" alt="Cover" />
						<h1>{(this.state.user)?this.state.user.company_name:null}</h1>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col logo">
						<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.logo:null} alt="Logo entreprise" className="img-fluid" />
					</div>
					<div className="col">
						<p className="lead">
							{(this.state.user)?this.state.user.description:null}
						</p>
					</div>
				</div>
				<div className="row align-items-center my-4">
					<div className="col text-center">
						<a className="btn btn-primary" href={(this.state.user)?this.state.user.link1_url:null}>{(this.state.user)?this.state.user.link1_name:null}</a>
					</div>
					<div className="col text-center">
						<a className="btn btn-primary" href={(this.state.user)?this.state.user.link2_url:null}>{(this.state.user)?this.state.user.link2_name:null}</a>
					</div>
				</div>
				{(this.state.user && this.state.user.involvement)?
					<div className="row">
						<div className="col">
							<h2 className="text-center">Notre engagement pour la biodiversité</h2>
							<p className="lead">
								{this.state.user.involvement}
							</p>
						</div>
					</div>
				:''}
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
