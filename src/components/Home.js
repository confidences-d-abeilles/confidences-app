import React, { Component } from 'react';
import imgPlaceholder from '../assets/img/img-placeholder.gif';
import NotificationSystem from 'react-notification-system'
import request from '../services/Net'
import { Link } from 'react-router-dom'
import '../assets/styles/parrains_homepage.css'
import first from '../assets/img/homepage/1.jpg';
import second from '../assets/img/homepage/2.jpg';
import third from '../assets/img/homepage/3.jpg';
import fourth from '../assets/img/homepage/4.jpg';
import fifth from '../assets/img/homepage/5.jpg';
import sixth from '../assets/img/homepage/6.jpg';
import seventh from '../assets/img/homepage/7.jpg';
import Slider from 'react-slick';
import Loading from './utils/Loading';
import FontAwesome from 'react-fontawesome'
import ReactGA from 'react-ga';
import { isLoggedIn, getUserType } from '../services/AuthService';
import Meta from './utils/Meta'

const defaultImg = require("../assets/img/profile.png")
const config = require('../config.js');

export default class Home extends Component {

	constructor (props) {
		super (props)
		this.state = {
			users : null,
		}
	}

	componentDidMount() {
		ReactGA.pageview(this.props.location.pathname);
		request({
			url : '/user/public',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				users : res.reverse()
			});
			this.autoplay = setInterval(() => { this.refs.slider.slickNext() }, 5000);
		})
	}

	componentWillUnmount() {
		clearInterval(this.autoplay);
	}

    render () {
        return (
			<div className="container py-4">
				<Meta title="Accueil"/>
				<NotificationSystem ref="notif" />
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-6 col-md-10 col-sm-12">
						<h1>Parrainez une ruche, aidez-nous à protéger les abeilles</h1>
						<p>
							Confidences d’Abeilles vous propose
							aujourd’hui de l’aider à poursuivre sa
							mission. Vous aussi participez à la protection
							des abeilles, à la préservation de la
							biodiversité en parrainant une ruche.
						</p>
						<p className="text-center">
							<Link to="/company/presentation" className="btn btn-secondary m-2">Service entreprise</Link>
							<Link to="/individual/presentation" className="btn btn-secondary m-2">Service particulier</Link>
						</p>
					</div>
					<div className="col-lg-6 col-md-10 hidden-sm-down my-4">
						<div id="carouselHome" className="carousel slide" data-interval="2500" data-ride="carousel">
							<ol className="carousel-indicators">
								<li data-target="#carouselHome" data-slide-to="0" className="active"></li>
								<li data-target="#carouselHome" data-slide-to="1"></li>
								<li data-target="#carouselHome" data-slide-to="2"></li>
								<li data-target="#carouselHome" data-slide-to="3"></li>
								<li data-target="#carouselHome" data-slide-to="4"></li>
								<li data-target="#carouselHome" data-slide-to="5"></li>
								<li data-target="#carouselHome" data-slide-to="6"></li>
							</ol>
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block" src={first} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={second} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={third} alt="Third slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fourth} alt="Fourth slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={fifth} alt="Fifth slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={sixth} alt="Sixth slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block" src={seventh} alt="Seventh slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<p>
							Cette mission nous la menons avec vous, particuliers, entreprises, citoyens avertis qui nous
							accompagnez depuis nos débuts. En finançant un rucher pédagogique vous nous avez déjà
							permis d’organiser des journées découvertes et de formation ; nous sommes fiers
							aussi d’avoir lancé plusieurs néophytes dans le grand bain de l’apiculture !
						</p>
					</div>
				</div>
				<div className="row justify-content-center align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Ils parrainent déjà des ruches</h2>
						{(this.state.users)?
							<Slider ref="slider" {...{
									dots: false,
									infinite: true,
									speed: 1000,
									slidesToShow: 4,
									slidesToScroll: 4,
									arrows: true,
								}}>
								{this.state.users.map((user) => {
									if (user.user_type === 1 || user.user_type  === 2) {
										let img;
										if (user.logo) {
											img = config.cdn_url+'/'+user.logo;
										} else if (user.hive_img) {
											img = config.cdn_url+'/'+user.hive_img;
										} else {
											img = defaultImg;
										}
										return (
											<div key={user.id}>
												<Link to={(user.namespace)?'/'+user.namespace:'/hive/'+user.hive_id}>
													<img className="img-fluid" src={img} alt={(user.company_name)?user.company_name:user.firstname+' '+user.name}/>
													<p className="my-2" style={{ height: '2em', lineHeight: '2em', overflow: 'hidden'}}>{(user.company_name)?user.company_name:user.firstname+' '+user.name}</p>
												</Link>
											</div>
										)
									} else {
										return null;
									}
								})}
							</Slider>
							:<Loading />}
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<p>
							Vous voulez apporter votre pierre à l’édifice et participer à cette belle aventure ? Nous vous
							proposons de parrainer une ruche. En échange de quoi, les butineuses vous feront découvrir
							leur précieux butin : une partie du miel qu’elles auront amassé !
						</p>
					</div>
				</div>
				<div className="row align-items-center justify-content-center">
					<div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
						<Link to="/account"><button className="btn btn-secondary" data-toggle="modal" data-target="#createAccount">Parrainer une ruche</button></Link>
					</div>
					<div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
						<Link to="/hives" className="btn btn-secondary">Découvrir les ruches</Link>
					</div>
				</div>
			</div>
        );
    }
}
