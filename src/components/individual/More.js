import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from '../../assets/img/part_more.jpg';


export default class More extends Component {

	render () {
		return (
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<img src={Banner} alt="Banner" className="img-fluid"/>
					</div>
					<div className="col-9">
						<h2 className="text-center my-5">Notre proposition pour les particuliers</h2>
						<p>
							Sensibilisés à la cause des abeilles vous voulez ajouter votre pierre à l’édifice et nous aider
	à les protéger. Oui mais voilà, vous ne savez pas comment faire et n’aspirez pas forcément
	à devenir apiculteur du jour au lendemain – surtout que cela demande une formation et
	du temps. Le parrainage d’une ruche est donc une solution qui vous convient
	parfaitement !<br/><br/>
	Vous disposez de votre propre ruche dont nous prenons soin. Vous pouvez suivre son
développement via notre plateforme web et vous recevrez à la fin de la saison le fruit du
travail des abeilles : le miel. Attention, pas n’importe quel miel, celui produit par vos
abeilles ! Aucune comparaison possible avec ceux que l’on peut trouver en grande
surface… C’est un cadeau unique et exceptionnel de vos abeilles vous remerciant pour
votre engagement.<br/><br/>
Si vous le désirez et sur rendez-vous, vous pourrez venir rendre visite à votre ruche. Vous
enfilerez la fameuse combinaison d’apiculteur et découvrirez le monde fantastique des
abeilles. Frissons et miel frais garantis !
						</p>
						<h3 className="text-center">Conditions et tarifs</h3>
						<p>
							L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie ou en
Savoie.<br/><br/>
						<Link to="/tarifs">Consulter les tarifs</Link><br/><br/>
							Dès lors que vous choisissez de parrainer des abeilles ou une ruche complète votre
prénom sera inscrit sur une ruche ; vous aurez la possibilité de suivre ses actualités,
consulter ses photos et découvrir d’autres informations sur une page spécialement dédiée
à cette ruche.<br/><br/>
Depuis votre tableau de bord vous pourrez choisir l’étiquette de vos futurs pots de miel
ainsi que le nom à inscrire dessus ; il vous est aussi possible de modifier vos informations
et consulter l’état de votre parrainage.<br/><br/>
Une fois la récolte effectuée, le miel mis en pot et les étiquettes personnalisées collées
nous vous expédierons le miel de vos abeilles ainsi qu’un certificat de parrainage ! Il n’y a
rien à payer en plus, les frais de port sont compris dans le montant du parrainage pour la
France métropolitaine. Pour une livraison à l’étranger nous étudierons au cas par cas les
envois.<br/><br/>
<strong>Remarque : </strong>Il est possible <strong>d’offrir un parrainage d’abeilles</strong> ou une ruche complète en
cadeau et de choisir la date à partir de laquelle nous devons prévenir l’heureux
bénéficiaire. L’option vous est proposée au moment du paiement.
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
photos et actualités. Elle est optimisée pour être partagée sur les réseaux sociaux ; vos
amis pourront ainsi suivre l’actualité de vos abeilles.<br/><br/>
Régulièrement nous mettrons en avant les parrains et les dernières ruches parrainées sur
notre page d’accueil ou sur nos propres réseaux sociaux.<br/><br/>
Enfin, nous avons pour objectif d’intégrer cette plateforme au sein d’une grande
communauté apicole qui réunirait les apiculteurs amateurs, professionnels et les parrains
qui comme vous agissent en faveur des abeilles.
						</p>
						<h3 className="text-center">Rendre visite à mes abeilles</h3>
						<p>
							Nous réfléchissons à la mise en place d’une alerte vous prévenant lorsque nous planifions
une intervention sur les ruches abritant vos abeilles. Vous aurez alors la possibilité de
réserver une ou plusieurs places disponibles pour nous accompagner lors de cette visite.
Plus d’informations prochainement.
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
