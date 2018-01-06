import React, { Component } from 'react'
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'
import FooterPage from './FooterPage'
import ReactHtmlParser from 'react-html-parser'
import FontAwesome from 'react-fontawesome'
import imgPlaceholder from '../../assets/img/profile.png';
import { Link } from 'react-router-dom'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import moment from 'moment';

const defaultImg = require("../../assets/img/profile.png")
const config = require('../../config.js');

export default class CompanyPage extends Component {

	constructor(props) {
		super (props)
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			user : null,
			hives: [],
			news: [],
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
		}).catch((err) => {
			this.setState({
				redirect: true
			})
		})
	}

	deployActu(e) {
		if (e.target.dataset.deployed === 'true') {
			e.target.previousSibling.style.height = "6em";
			e.target.innerHTML = "------- développer -------------------------------------------------------------------------------------------------------------------------";
			e.target.setAttribute('data-deployed', 'false');
		} else {
			e.target.innerHTML = "------- réduire -------------------------------------------------------------------------------------------------------------------------";
			e.target.setAttribute('data-deployed', 'true');
			e.target.previousSibling.style.height = e.target.previousSibling.childNodes[0].clientHeight+"px";
		}
	}

	// retractActu(e) {
	// 	if (e.target.parentElement.parentElement.nextElementSibling.dataset.deployed === 'true') {
	// 		console.log('ok')
	// 		e.target.parentElement.parentElement.style.height = "3em";
	// 		e.target.parentElement.parentElement.nextSibling.innerHTML = "------- développer -------------------------------------------------------------------------------------------------------------------------";
	// 		e.target.parentElement.parentElement.nextSibling.setAttribute('data-deployed', 'false');
	// 	}
	// }

	displayImg(e) {
		if (e.target.dataset.hive) {
			document.getElementById("img-"+e.target.dataset.hive).style.opacity = "1";
		} else {
			document.getElementById("img-"+e.target.parentElement.dataset.hive).style.opacity = "1";
		}
	}

	hideImg(e) {
		if (e.target.dataset.hive) {
			document.getElementById("img-"+e.target.dataset.hive).style.opacity = "0";
		} else {
			document.getElementById("img-"+e.target.parentElement.dataset.hive).style.opacity = "0";
		}
	}

    render () {
        return (
			<div>
	            <div className="container">
					<Meta title="Page entreprise"/>
					{(this.state.redirect)?<Redirect to="/" />:null}
					<NotificationSystem ref="notif" />
					<div className="row justify-content-center">
						<h1 style={{ backgroundColor : "#E49C00",fontFamily: "HighTo" , color: 'white', padding: "0.4em 2.5em", zIndex: '5' }}><small>{(this.state.user)?this.state.user.company_name.toUpperCase():null}</small></h1>
						<div className="col-lg-12" style={{ marginTop: '-5.3em' }}>
							{(this.state.user && this.state.user.cover)?<img src={(this.state.user)?config.cdn_url+'/'+this.state.user.cover:null} alt="Cover" className="img-fluid" />:null}
						</div>
					</div>
				</div>
				<div className="container-fluid">
					<div className="row">
						<div style={{ width : '100%', height: '1em', backgroundColor: '#E49C00'}}>
						</div>
					</div>
				</div>
				<div className="container" style={{ fontFamily: "HighTo", color: '#666666', fontSize: '1.25em' }}>
					<div className="row py-5">
						<div className="col-lg-8 px-4">
							<div className="row">
								<div className="col-lg-6 px-4" style={{ textAlign: 'justify' }}>
									<h2 style={{ color: '#E49C00' }}>{(this.state.user)?this.state.user.company_name.toUpperCase():null}</h2>
									<div style={{ width : '100%', height: '2px', backgroundColor: '#E49C00'}} className="mb-4" ></div>
									<p>
										{(this.state.user && this.state.user.description)?this.state.user.description:"Cette entreprise n'a pas encore rédigé sa description"}
									</p>
									<p className="text-center my-5">
										<img src={(this.state.user && this.state.user.logo)?config.cdn_url+'/'+this.state.user.logo:defaultImg} alt="Logo entreprise" />
									</p>
									{(this.state.user && this.state.user.link1_url && this.state.user.link1_name)?
									<div className="col text-center">
										<a target="_blank" className="btn-company" href={(this.state.user)?this.state.user.link1_url:null}>{(this.state.user)?this.state.user.link1_name.toUpperCase():null}</a>
									</div>:null}
									{(this.state.user && this.state.user.link2_url && this.state.user.link2_name)?
									<div className="col text-center">
										<a target="_blank" className="btn-company" href={(this.state.user)?this.state.user.link2_url:null}>{(this.state.user)?this.state.user.link2_name.toUpperCase():null}</a>
									</div>:null}
								</div>
								<div className="col-lg-6 px-5 py-2" style={{ backgroundColor : '#E49C00', color: 'white'}}>
									<h2 className="mt-4">NOTRE ENGAGEMENT POUR LA BIODIVERSITÉ</h2>
									<div style={{ width : '100%', height: '1px', backgroundColor: 'white'}} className="mb-4" ></div>
									<p>
									{(this.state.user && this.state.user.involvement)?
										this.state.user.involvement
									:''}
									</p>
								</div>
							</div>
						</div>
						<div className="col-lg-4 px-4" style={{ position : "relative" }}>
							<h2 style={{ color: '#E49C00' }}>NOS RUCHES</h2>
							<div style={{ width : '100%', height: '2px', backgroundColor: '#E49C00'}} className="mb-4" ></div>
							{this.state.hives.map((hive) => {
								return (
									<div className="ruche" data-hive={hive.id} onMouseEnter={this.displayImg.bind(this)} onMouseLeave={this.hideImg.bind(this)}>
										<img src={require("../../assets/img/rayon.png")} className="img-fluid rayon" alt="Rayon" />
										<h3 style={{ padding: '0px', margin: '0'}} className="" >{hive.name.toUpperCase()}</h3>
										<Link to={'/hive/'+hive.id} style={{ color: '#666666', fontSize: '0.8em' }} >Voir en détails</Link>
									</div>
								)
							})}
							<div style={{ position : 'relative' }}>
								{this.state.hives.map((hive) => {
									return (
										<div style={{ backgroundImage: 'url('+config.cdn_url+'/'+hive.imgs[0]+')', height: '10em', width: '100%' }} alt={hive.name} className="ruche-img" id={"img-"+hive.id} />
									)
								})}
							</div>
						</div>
					</div>
					<div className="row justify-content-end align-items-center mb-4">
						<div className="col-lg-12">
							<h2 style={{ color: '#E49C00' }}>LES DERNIÈRES ACTUALITÉS</h2>
							<div style={{ width : '100%', height: '1px', backgroundColor: '#E49C00'}} className="mb-4" ></div>
					        {this.state.user && this.state.user.news.map((actu) => {
					            const date = new Date(actu.createdAt);
					            return (
					                <div className="my-2 row">
										<div className="actu-first-block col-lg-4">
						                    <div className="actu-img" style={{ backgroundImage: `url(${config.cdn_url}/${actu.img})` }} >
											</div>
										</div>
										<div className="actu-second-block col-lg-8">
					                        <h3 className="actu-title">{actu.title}<small className="actu-date">{moment(date).format("DD.MM.YYYY")}</small></h3>
											<div style={{ width : '100%', height: '1px', backgroundColor: '#E49C00'}} className="mb-4" ></div>
					                        <div className="actu-content">
												<p>
													{ReactHtmlParser(actu.content)}
												</p>
					                        </div>
					                        <p className="actu-btn" data-deployed="false" onClick={this.deployActu.bind(this)}>------- développer --------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>
										</div>
					                </div>
					            )
					        })}
							</div>
						</div>
					<FooterPage />
	            </div>
			</div>
        );
    }
}
