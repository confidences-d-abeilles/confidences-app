import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class JobsReact extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">Offre de stage ReactJS / NodeJS Developer - Janvier 2018</h1>
						<h2>A propos</h2>
						<p>
							Confidences d’Abeilles est une jeune entreprise annécienne qui développe des produits et
							des services autour de l’apiculture.
						</p>
						<p>
							L’esprit de la marque est la découverte et le partage des trésors que peuvent produire les abeilles.
							L’excellence est une exigence qui amène chaque jour les membres de l’équipe à travailler avec passion,
							respect et humilité. L’authenticité est le maître mot chez Confidences d’Abeilles.<br/>
							L’équipe est actuellement composée des deux fondateurs et d’une troisième personne qui a rejoint
							l’aventure pour le lancement du service de parrainage. Des freelances interviennent régulièrement.
						</p>
						<h2>Missions</h2>
						<p>
							Vous êtes toujours au fait des dernières innovations ? Vous aimez partager votre savoir et
							challenger les modèles en place ? Bienvenue chez Confidences d’Abeilles, où vous évoluerez
							avec une grande autonomie et collaborerez régulièrement avec les fondateurs.
						</p>
						<p>Vos missions :</p>
						<ul>
							<li>Travailler sur la conception et l’architecture d’une application web</li>
							<li>Participer à l'intégration des nouvelles fonctionnalités ainsi que du design</li>
							<li>
								En fonction de votre profil et votre sensibilité, vous serez amené(e) à
								travailler plus particulièrement sur le front-end ou sur le back-end de notre application web.
							</li>
						</ul>
						<p>Notre Stack :</p>
						<ul>
							<li>ReactJS / Webpack / Babel</li>
							<li>NodeJS / MongoDB</li>
							<li>Bootstrap / SCSS</li>
						</ul>
						<h2>Profil recherché</h2>
						<ul>
							<li>
								Vous êtes entrepreneur(se) dans l’âme,
								l’aventure vous fait rêver et l’ambition avancer ? C’est un bon début.
							</li>
							<li>
								Vous avez le goût pour le travail bien fait et vous souhaitez vous
								investir dans des projets dont vous serez fiers ? Ça nous plait !
							</li>
							<li>
								Vous avez une expérience significative sur au moins un framework du
								moment (ReactJS, Angular 2+, Vue) ? C’est formidable.
							</li>
							<li>Vous maîtrisez NodeJS et Express ? Bien.</li>
							<li>Vous êtes au fait des dernières normes ES6 + ? Super.</li>
							<li>Vous maitrisez les bases de données NoSQL, comme MongoDB ? Parfait.</li>
							<li>
								Vous connaissez les habitudes de développement collaboratif
								(versionning, bugs reports…) ? Extra.
							</li>
							<li>
								Vous êtes à l’aise avec la conception d’API Rest (avoir déjà manipulé
								celle de Facebook est un plus) ? Épatant !
							</li>
							<li>Vous aimez relever des défis ? Nous devrions nous entendre.</li>
						</ul>
						<p>Alors n’hésitez plus et rejoignez-nous !</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<h2>Conditions</h2>
						<p>
							4-6 mois à partir de Janvier 2018 – stage conventionné<br/>
							Stage rémunéré selon profil<br/>
							Télétravail possible
						</p>
					</div>
				</div>
			</div>
		)
	}
}
