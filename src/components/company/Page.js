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
			hives: [],
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
			request({
				url : '/hive/bundle/'+res.bundles[0].id,
				method: 'get'
			}, this.refs.notif).then((res) => {
				this.setState({
					hives: res
				})
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
						<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.cover:null} alt="Cover" />
						<h1>{(this.state.user)?this.state.user.company_name:null}</h1>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-4 logo">
						<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.logo:null} alt="Logo entreprise" />
					</div>
					<div className="col m-4">
						<div className="card">
  							<div className="card-block">
								{(this.state.user)?this.state.user.description:null}
							</div>
						</div>
					</div>
				</div>
				<div className="row align-items-center mb-4">
					{(this.state.user && this.state.user.link1_url && this.state.user.link1_name)?
					<div className="col text-center">
						<a className="btn btn-secondary" target="_blank" href={(this.state.user)?this.state.user.link1_url:null}>{(this.state.user)?this.state.user.link1_name:null}</a>
					</div>:null}
					{(this.state.user && this.state.user.link2_url && this.state.user.link2_name)?
					<div className="col text-center">
						<a className="btn btn-secondary" target="_blank" href={(this.state.user)?this.state.user.link2_url:null}>{(this.state.user)?this.state.user.link2_name:null}</a>
					</div>:null}
				</div>
				{(this.state.user && this.state.user.involvement)?
					<div className="row justify-content-center">
						<div className="col">
							<h2 className="text-center">Notre engagement pour la biodiversité</h2>
							<p className="m-4">
								{this.state.user.involvement}
							</p>
						</div>
					</div>
				:''}
				<div className="row">
					<div className="col">
						<h2 className="text-center">Les ruches que nous parrainons</h2>
						<div className="row">
							{this.state.hives.map((hive) => {
								return (
									<div className="card col-6">
										<div className="card-block">
											<h4 className="card-title">
												{hive.name}
											</h4>
										</div>
									</div>
								)
							})}
						</div>
					</div>
					<div className="col">
						<h2 className="text-center">Les dernières actualités</h2>
					</div>
				</div>
				<FooterPage />
            </div>
        );
    }
}
