import React, { Component } from 'react'
import { Link } from 'react-router-dom'
const config = require('../../config.js');

export default class More extends Component {

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-9">
						<h2 className="text-center">Notre proposition pour les entreprises</h2>
						<p>
							Vous cherchez à inscrire votre entreprise dans une démarche participative et responsable
							vis-à- vis de son environnement ? Faites donc le choix du parrainage de ruche. Contre une
							participation annuelle, vous recevez les pots de miel correspondant à la récolte des ruches
							que vous avez parrainées. Ces pots sont personnalisés avec votre logo et vos couleurs.<br/><br/>
							Un tel parrainage s’inscrit complètement dans la démarche de « Responsabilité Sociale
							des Entreprises » (RSE). C’est aussi un formidable message envoyé à vos collaborateurs,
							vos partenaires et vos clients. Vous pouvez utiliser le parrainage dans votre
							communication interne et fédérer ainsi vos équipes autour d’une ou plusieurs ruches. Ils
							suivront avec attention le développement des colonies et se languiront peut-être de
							recevoir un pot de miel de « leurs » abeilles en fin d’année. Ces pots de miel sont aussi un
							cadeau d’entreprise unique et original que ne manqueront pas d’apprécier vos
							partenaires ou vos clients.<br/><br/>
							Le parrainage de ruche c’est d’abord une façon de penser votre quotidien, une culture
							d’entreprise, une démarche porteuse de sens et de cohésion.
						</p>
						<h3 className="text-center">Conditions et tarifs</h3>
						<p>
							L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie. Bien
							entendu nous vous accueillerons volontiers pour vous faire découvrir vos abeilles. Vous
							souhaitiez voir vos ruches installées sur le site de votre entreprise, sur son toit pas
							exemple ? N’hésitez pas à nous en faire la demande. Nous étudierons la faisabilité du
							projet et nous reviendrons vers vous avec un devis si cela est envisageable (les tarifs
							présents sur le site ne concernent pas cette prestation).<br/><br/>
							<Link to="/tarifs">Consulter les tarifs</Link><br/><br/>
							Ces tarifs comprennent l’envoi d’un certificat de parrainage, la création d’une page sur
							notre site internet spécialement dédiée à votre entreprise (voir ci-dessous) ; vous aurez la
							possibilité d’y consulter les informations relatives à vos ruches, de suivre son actualité et
							de retrouver des photos de vos ruches. Sont aussi inclus les frais de port pour l’envoi de
							vos pots de miel (France métropolitaine) et la personnalisation de leur étiquette.
						</p>
						<h3 className="text-center">Quand parrainer ?</h3>
						<p>
							Vous pouvez parrainer des abeilles tout au long de l’année. Il faut savoir que pour un
							parrainage effectué entre :<br/><br/>
							Le 1er juillet et le 31 décembre, vous recevrez le miel de vos abeilles après la récolte de
							printemps ; c’est-à- dire à dire à partir du mois de mai de l’année suivante.<br/><br/>
							Le 1er janvier et le 30 juin, vous recevrez le miel de vos abeilles à l’automne, à partir du
							mois d’octobre.
						</p>
						<h3 className="text-center">Visibilité du parrainage</h3>
						<p>
							Nous attachons une grande importance à la mise en valeur de votre action et c’est
							pourquoi nous vous proposons de communiquer dessus de deux manières.
							<ul>
								<li>Une page de notre site sera spécialement dédiée à votre entreprise (un exemple
								ci-après). Elle comportera votre identité visuelle, une présentation de votre
								entreprise, une présentation de votre action en faveur des abeilles et de
								l’environnement ainsi que des photos et actualités de vos ruches. Les textes de
								présentation sont du ressort de l’entreprise ; de notre côté nous alimenterons
								régulièrement la page en photos et actualités.</li>
								<li>Les réseaux sociaux sur lesquels nous sommes très présents sont utilisés pour
								communiquer sur les ruches parrainées par les entreprises. Pas moins de 15.000
								followers nous suivent sur Instagram, Twitter et Facebook.</li>
							</ul>
						</p>
						<p className="text-center">
							<Link to="/signup/company" className="btn btn-secondary mr-4">Parrainer une ruche</Link><a href={config.cdn_url+'/commercial.pdf'} className="btn btn-secondary mr-4" target="_blank">Télécharger la plaquette de présentation</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
