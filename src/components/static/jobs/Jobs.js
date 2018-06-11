import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from '../../utils/Meta'

export default class Jobs extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta title="Jobs" />
				<div className="row">
					<div className="col">
						<img src={require('../../../assets/img/jobs.jpg')} alt="Gaetan et Nicolas" className="img-fluid" />
					</div>
				</div>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">
							<span className="align-middle">Travailler avec nous ?&nbsp;</span>
							<img src={require('../../../assets/img/smiley/in-love.svg')} alt="smiley in love"
								style={{ height: '1em' }} />
						</h1>
						<p>
							Chez Confidences d’Abeilles il y a précisément 5.504.152
							collaborateurs ; <strong>des collaboratrices à 98%</strong> même !
							Oui, vous avez bien lu ! Et au niveau du management cela se passe
							comment ? En fait, il faut savoir qu’une ruche c’est <strong>50 000 ouvrières</strong> qui
							travaillent de concert pour servir leur reine mère.<br/>
							<span className="align-middle">Ceci explique donc cela&nbsp; </span>
							<img src={require('../../../assets/img/smiley/nerd.svg')} alt="smiley nerd"
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
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#internship">Stage de 4 à 6 mois</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#contributor">Mission freelance</a>
							</li>
						</ul>
						<div className="tab-content">
							<div id="internship" className="tab-pane active pt-4" role="tabpanel">
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
								<p className="text-center">
									<Link className="btn btn-secondary" to="/jobs/businessdev">Business Developer</Link>
								</p>
								<p className="my-4">
									Aucune offre ne vous correspond ? Confidences d’Abeilles et ses partenaires sont toujours
									à la recherche de personnes talentueuses, n’hésitez pas à postuler !
								</p>
								<p className="text-center">
									<Link className="btn btn-secondary" to="/apply">Postuler</Link>
								</p>
							</div>
							<div id="contributor" className="tab-pane" role="tabpanel">
								<div className="row justify-content-center align-items-center">
									<div className="col-lg-9 col-md-10 col-sm-12">
										<h2 className="text-center my-4">Un apporteur d'affaires, c'est quoi ?</h2>
										<p>
											Que vous soyez étudiant en école de commerce, d&#39;ingénieurs, à la FAC, en IUT ou même non
											étudiant, peu importe en fait ; la seule chose qui compte c&#39;est votre motivation, votre réseau
											et vos compétences commerciales. Votre mission ? Promouvoir le service de parrainage de
											ruches proposé par Confidences d&#39;Abeilles ! Votre objectif ? Faire parrainer des ruches par des
											entreprises. Keep calm, on vous aide pour ça :)
										</p>
									</div>
								</div>
								<div className="row justify-content-around align-items-start">
									<div className="col-lg-5 col-md-6 col-sm-10">
										<h3 className="text-center my-4">Qu'est ce que j'y gagne ?</h3>
										<ul>
											<li>Une commission intéressante par ruche parrainée</li>
											<li>Un agrandissement et une consolidation de votre réseau</li>
											<li>Une belle occasion de travailler votre approche commerciale</li>
											<li>Un super contrat qui ne vous engage à rien au final</li>
										</ul>
									</div>
									<div className="col-lg-5 col-md-6 col-sm-10">
										<h3 className="text-center my-4">Que gagne Confidences d’Abeilles ?</h3>
										<ul>
											<li>Une optimisation de notre prospection</li>
											<li>Une mise en relation et une conclusion de parrainage accélérées</li>
											<li>Le développement de notre activité et l’assurance de maintenir notre cheptel et de l’accroitre</li>
											<li>Du temps pour se concentrer sur le cœur de son activité : l’apiculture</li>
										</ul>
									</div>
								</div>
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-12 text-center">
										<Link to="/signup/contributor" className="btn btn-primary my-4">Je m'inscris</Link>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-12 text-center">
										<Link to="/company/more" className="btn btn-primary my-4">En savoir plus sur l'offre de parrainage</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
