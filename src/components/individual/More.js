import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class More extends Component {

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-9">
						<h2 className="text-center">Notre proposition pour les particuliers</h2>
						<p>
							Sensibilisés à la cause des abeilles vous voulez ajouter votre pierre à l’édifice et nous aider
							à les protéger. Oui mais voilà, vous ne savez pas comment faire et n’aspirez pas forcément
							à devenir apiculteur du jour au lendemain – surtout que cela demande une formation et
							du temps. Le parrainage d’une ruche est une solution qui vous convient parfaitement !<br/><br/>
							Vous disposez de votre propre ruche dont nous prenons soin. Vous pouvez suivre son
							développement via notre site web et vous recevrez à la fin de la saison le fruit du travail
							des abeilles : le miel. Attention, pas n’importe quel miel, celui produit par vos abeilles !
							Aucune comparaison possible avec ceux que l’on peut trouver en grande surface… C’est
							un cadeau unique et exceptionnel de vos abeilles vous remerciant pour votre
							engagement.<br/><br/>
							Si vous le désirez et sur rendez-vous, vous pourrez venir rendre visite à votre ruche en
							enfilant la fameuse combinaison d’apiculteur. Frissons et miel frais garantis !
						</p>
						<h3 className="text-center">Conditions et tarifs</h3>
						<p>
							L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie ou en
							Savoie.<br/><br/>
						<Link to="/tarifs">Consulter les tarifs</Link><br/><br/>
							Dès lors que vous choisissez de parrainer des abeilles ou une ruche complète votre nom
							sera inscrit sur une ruche et vous aurez la possibilité de consulter ses informations sur une
							page spécialement dédiée à votre ruche. Des photos de votre ruche seront aussi
							disponibles sur cette même page.<br/><br/>
							Une fois la récolte effectuée, le miel mis en pot et les étiquettes personnalisées collées
							nous vous expédierons le miel de vos abeilles ainsi qu’un certificat de parrainage ! Il n’y a
							rien à payer en plus, les frais de port sont compris dans le montant du parrainage pour la
							France métropolitaine. Pour une livraison à l’étranger nous étudierons au cas par cas les
							envois.
						</p>
						<h3 className="text-center">Quand parrainer ?</h3>
						<p>
							Vous pouvez parrainer des abeilles tout au long de l’année. Il faut savoir que pour un
							parrainage effectué entre :
							<ul>
							<li>Le 1er juillet et le 31 décembre, vous recevrez le miel de vos abeilles après la récolte de
							printemps ; c’est-à- dire à dire à partir du mois de mai de l’année suivante.</li>
							<li>Le 1er janvier et le 30 juin, vous recevrez le miel de vos abeilles à l’automne, à partir du
							mois d’octobre.</li>
							</ul>
						</p>
						<h3 className="text-center">Visibilité du parrainage</h3>
						<p>
							Nous attachons une grande importance à la mise en valeur de votre action. Une page de
							notre site est dédiée à la ruche qui abritent vos abeilles ; vous pouvez y retrouver des
							photos et actualités.
						</p>
						<h3 className="text-center">Rendre visite à mes abeilles</h3>
						<p>
							Nous réfléchissons à la mise en place d’une alerte mail vous prévenant lorsque nous
							planifions une intervention sur les ruches abritant vos abeilles. Vous aurez alors la
							possibilité de réserver une ou plusieurs places disponibles pour nous accompagner lors de
							cette visite.
						</p>
						<p className="text-center">
							<Link to="/signup/individual" className="btn btn-secondary mr-4">Parrainer une ruche</Link><Link to="/faq" className="btn btn-secondary">Consulter la FAQ</Link>
						</p>
					</div>
				</div>
			</div>
		)
	}
}
