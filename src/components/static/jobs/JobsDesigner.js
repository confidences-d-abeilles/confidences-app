import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from '../../utils/Meta'
import { APropos } from './APropos'

export default class JobsDesigner extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta title="Offre de stage"/>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">Mission UX Designer</h1>
						<APropos/>
						<h2>Missions</h2>
						<p>
							Vous êtes toujours au fait des dernières innovations ? Vous aimez partager
							votre savoir et challenger les modèles en place ? Bienvenue chez Confidences
							d’Abeilles, où sous la responsabilité des fondateurs et du responsable produit
							vos principales responsabilités seront :
						</p>
						<ul>
							<li>
								A partir d'un brief concis (ou user story), puis d'un brainstorming
								avec les utilisateurs finaux, le responsable produit et les fondateurs,
								vous imaginerez l'expérience utilisateur sous forme de mock-ups. Vous
								designerez l'interface finale web puis, vous accompagnerez l'équipe de
								développeurs lors de l'intégration.
							</li>
							<li>La maintenance et les modifications graphiques de l’application web.</li>
						</ul>
						<h2>Profil recherché</h2>
						<ul>
							<li>
								Vous êtes entrepreneur(se) dans l’âme, l’aventure vous fait rêver et
								l’ambition avancer ? C’est un bon début.
							</li>
							<li>
								Vous avez le goût pour le travail bien fait et vous souhaitez vous
								investir dans des projets dont vous serez fiers ? Ça nous plait !
							</li>
							<li>
								Vous êtes designer avec une forte sensibilité à l’ergonomie, à
								l'expérience utilisateur et vous avez déjà dessiné et intégré des interfaces
								d'applications web ? Formidable.
							</li>
							<li>
								Vous maîtrisez les logiciels ou outils tels que Photoshop, Illustrator,
								Sketch, Marvel, InVision ? Épatant
							</li>
							<li>
								Vous êtes autonome ? (Vous serez le premier designer à intégrer l'équipe,
								vous serez donc à l'origine des processus de travail et du choix des outils de
								travail.) On aime les challengers.
							</li>
							<li>Vous avez un bon niveau d'anglais, au moins à l'écrit. Perfect.</li>
							<li>
								Vos capacités de priorisation, d’estimation et respect des délais
								sont vraisemblables ? Nous devrions nous entendre.
							</li>
						</ul>
						<p>Alors n’hésitez plus et rejoignez-nous !</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<h2>Conditions</h2>
						<p>
							Contactez-nous et faites-nous des propositions <img src={require('../../../assets/img/smiley/happy.svg')}
								alt="smiley happy" style={{ height: '1em' }} /><br/>
							Rémunération à la clé bien entendu<br/>
							Télétravail possible
						</p>
					</div>
				</div>
			</div>
		)
	}
}
