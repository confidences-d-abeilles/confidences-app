import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../assets/img/part_more.jpg'
import leaflet from '../../assets/leaflet_p.pdf'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class More extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<Meta title="En savoir plus"/>
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<img src={Banner} alt="Banner" className="img-fluid"/>
					</div>
					<div className="col-9">
						<h2 className="text-center my-5">Le parrainage par les particuliers</h2>
						<p>
							Sensibilisé à la cause des abeilles, vous voulez ajouter votre pierre à l’édifice et nous aider à
							les protéger ?<br />
							Oui mais voilà, vous ne savez pas comment faire et n’aspirez pas forcément à devenir
							apiculteur du jour au lendemain – surtout que cela demande une formation et du temps.
							Le parrainage d’une ruche est donc une solution qui vous convient parfaitement!
						</p>
						<h3 className="text-center">Comment ça se passe ?</h3>
						<p>
							Vous disposez de vos propres abeilles dont nous prenons soin. Vous pouvez suivre leur
							développement via notre plateforme web et vous recevrez à la fin de la saison le fruit de
							leur travail : le miel. Attention, pas n’importe quel miel, celui produit par vos abeilles !
							Aucune comparaison possible avec ceux que l’on peut trouver en grande surface… Un
							cadeau unique et exceptionnel de vos abeilles vous remerciant pour votre engagement.<br/><br/>
							Dès lors que vous choisissez de parrainer des abeilles ou une ruche complète votre prénom
							sera inscrit sur une ruche. Vous aurez la possibilité de suivre actualités, photos et de
							découvrir d’autres informations sur une page spécialement dédiée à cette ruche.<br />
							Depuis votre tableau de bord vous pourrez choisir l’étiquette de vos futurs pots de miel
							ainsi que le nom à inscrire dessus, il vous est aussi possible de modifier vos informations et
							consulter l’état de votre parrainage<br />
							Une fois la récolte effectuée, le miel mis en pot et les étiquettes personnalisées collées
							nous vous expédierons le miel de vos abeilles ainsi qu’un certificat de parrainage !<br /><br />
							<strong>Remarque :</strong><em> Il est possible <strong>d’offrir un parrainage d’abeilles</strong> ou une ruche complète en
							cadeau et de choisir la date à partir de laquelle nous devons prévenir l’heureux
							bénéficiaire. L’option vous est proposée au moment du paiement.</em>
						</p>
						<h3 className="text-center">Quand parrainer ?</h3>
						<p>
							Vous pouvez parrainer des abeilles tout au long de l’année. Il faut savoir que pour un
							parrainage effectué entre :
							<ul>
								<li>
									Le 1er juillet et le 31 décembre, vous recevrez le miel de vos abeilles après la récolte de
									printemps ; c’est-à- dire à dire à partir du mois de mai de l’année suivante.</li>
								<li>
									Le 1er janvier et le 30 juin, vous recevrez le miel de vos abeilles à l’automne, à partir du
									mois d’octobre.
								</li>
							</ul>
						</p>
						<h3 className="text-center">Visibilité du parrainage</h3>
						<p>
							Comme précisé plus haut, nous attachons une grande importance à la mise en valeur de
							votre action. Une page de notre site est dédiée à la ruche qui abrite vos abeilles et est
							optimisée pour être partagée sur les réseaux sociaux ; vos amis pourront ainsi suivre
							l’actualité de vos abeilles<br/><br/>
							Régulièrement nous mettrons en avant les parrains et les dernières ruches parrainées sur
							notre page d’accueil ou sur nos propres réseaux sociaux.<br/><br/>
							Enfin, nous avons pour objectif d’intégrer cette plateforme au sein d’une grande
							communauté apicole qui réunirait les apiculteurs amateurs, professionnels et les parrains
							qui comme vous agissent en faveur des abeilles.
						</p>

						<h3 className="text-center">Tarifs & conditions</h3>
						<p>
							<Link to="/prices">Consulter les tarifs</Link><br/><br/>
							L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie ou en
							Savoie.<br/>
							Ces tarifs comprennent l’ensemble des éléments cités ci-dessus ainsi que les frais de port
							pour l’envoi des pots de miel en France métropolitaine.<br />
							Pour l’étranger, les situations seront étudiées au cas par cas, merci de nous contacter en amont
						</p>
						<h3 className="text-center">Rendre visite à mes abeilles</h3>
						<p>
							Si vous le désirez et sur rendez-vous, vous pourrez venir rendre visite à vos abeilles. Vous
							enfilerez la fameuse combinaison d’apiculteur et découvrirez le monde fantastique des
							abeilles. Frissons et miel frais garantis !
						</p>
						<p className="text-center">
							<Link to="/signup/individual" className="btn btn-secondary mr-4">Devenir parrain</Link>
							<a href={leaflet} className="btn btn-secondary mr-4" target="_blank">Découvrir la plaquette</a>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
