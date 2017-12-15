import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system'
import Loading from './utils/Loading';
import ReactHtmlParser from 'react-html-parser'
import FontAwesome from 'react-fontawesome'
import ImgPlaceholder from '../assets/img/profile.png';

const config = require('../config.js')

export default class Hive extends Component {

	constructor(props) {
		super(props)
		this.state = {
			hive: null,
		}
	}

	componentDidMount() {
		request({
			url: '/hive/'+this.props.match.params.id,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				hive : res
			})
		})
	}

	render() {
		return (
			<div className="container">
				<NotificationSystem ref="notif" />
				{(this.state.hive)?
					<div>
						<h2 className="text-center my-5">Ruche {this.state.hive.name}</h2>
					<div className="row">
						<div className="col-lg-7 col-md-7 col-sm-12">
							<div className="row">
								<div className="col-lg-7 px-5">
									<img className="img-fluid" src={ImgPlaceholder} alt="Aucune photo" />
								</div>
								<div className="col-lg-5 card" style={{ backgroundColor: '#ECEFF1' }}>
									<h3 className="my-4">Les parrains</h3>
									{this.state.hive &&
										this.state.hive.parrains.map((user) => {
											return (
												<p>{user.name} {user.firstname}</p>
											)
										})}
								</div>
							</div>
							<h3 className="my-4">Informations sur la ruche</h3>
							<p>
								Aucune information sur cette ruche pour le moment
							</p>
							<div className="row">
								{this.state.hive.imgs.map((img) => {
									return (
										<div className="col-6">
											<img src={config.cdn_url+'/'+img} key={img} alt="Photo de la ruche" className="img-fluid"/>
										</div>
									)
								})}
							</div>
						</div>
						<div className="col-lg-4 col-md-4 col-sm-12">
							<h3 className="my-4">Actualités</h3>
							{(this.state.hive.news.length)?
								this.state.hive.news.map((actu) => {
									const date = new Date(actu.createdAt);
									return (
										<div className="card my-2 flex-row">
											<div className="card-block col-2">
												<img className="img-fluid" src={config.cdn_url+'/'+actu.img} alt="Card image cap" />
											</div>
											<div className="card-block col-10">
												<h3 className="card-title">{actu.title}</h3>
												<p className="card-text collapse" id={actu.id}>
													{ReactHtmlParser(actu.content)}
												</p>
												<button className="btn btn-link" data-toggle="collapse" data-target={'#'+actu.id}>Développer / Réduire <FontAwesome name='sort' /></button>
												<p className="card-text"><small className="text-muted">{date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear()}</small></p>
											</div>
										</div>
									)
								})
							:"Aucune actualité à afficher pour cette ruche"}
						</div>
					</div>
				</div>
				:<Loading />}
			</div>
		)
	}
}
