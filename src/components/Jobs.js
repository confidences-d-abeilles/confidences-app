import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import hire from '../assets/img/hiring.jpg'
import Meta from './utils/Meta'

export default class Jobs extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta
					title="Jobs"
					ogTitle="Vous cherchez un stage ? C’est parfait, on embauche !"
					ogDescription="Rejoindre une jeune équipe, dynamique, passionnée et participer au succès de son aventure vous tente ? Formidable, nous cherchons un(e) developer ReactJS, un(e) UX designer, un(e) communication | marketing manager"
					ogImage={hire}
					url="https://parrainagederuches.fr/jobs" />
				<div className="row">
					<div className="col">
						<img src={require('../assets/img/jobs.jpg')} alt="Gaetan et Nicolas" className="img-fluid" />
					</div>
				</div>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">
							<span className="align-middle">Travailler avec nous ?&nbsp;</span>
							<img src={require('../assets/img/smiley/in-love.svg')} alt="smiley in love"
								style={{ height: '1em' }} />
						</h1>
						<p>
							Chez Confidences d’Abeilles il y a précisément 5.504.152
							collaborateurs ; <strong>des collaboratrices à 98%</strong> même !
							Oui, vous avez bien lu ! Et au niveau du management cela se passe
							comment ? En fait, il faut savoir qu’une ruche c’est <strong>50 000 ouvrières</strong> qui
							travaillent de concert pour servir leur reine mère.<br/>
							<span className="align-middle">Ceci explique donc cela&nbsp; </span>
							<img src={require('../assets/img/smiley/nerd.svg')} alt="smiley nerd"
								style={{ height: '1em' }} />
						</p>
						<p>
							Trêve de plaisanterie. Vous êtes en freelance, vous cherchez un stage, vous avez
							des talents à revendre ? Rejoindre <strong>une jeune équipe, dynamique et
							passionnée</strong> par son travail vous tente ? Alors n’hésitez plus, nous avons
							des challenges et des missions à la hauteur de <strong>vos ambitions</strong> !
							Nous sommes comme vous, jeunes et entreprenants, nous croyons au travail passionné et à la réussite !
						</p>
						<p>
							Pour accompagner notre développement ou celui de nos partenaires nous avons
							besoin de nouveaux talents, de personnes passionnées ; non, nous ne cherchons
							pas que des apiculteurs, bien au contraire !
						</p>
						<p>
							Que ce soit en <strong>Web Development</strong> (FRONT/BACK), <strong>Web
							Design</strong> (UI/UX), <strong>Business Development</strong>, <strong>Communication |
							Marketing</strong>, <strong>Community | Event Management</strong> ou encore en <strong>Systèmes
							embarqués | communicants</strong> nous sommes intéressés. Retrouvez nos offres de stage de 4 à 6 mois.
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/reactjs">Stage ReactJS / NodeJS developer</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/designer">Stage UX Designer</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/marketing">Stage Communication / Marketing</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/event">Stage Community / Event Manager</Link>
						</p>
						<p className="text-center my-5">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<p>
							Aucune offre ne vous correspond ? Confidences d’Abeilles et ses partenaires sont toujours
							à la recherche de personnes talentueuses, n’hésitez pas à postuler !
						</p>
					</div>
				</div>
			</div>
		)
	}
}
