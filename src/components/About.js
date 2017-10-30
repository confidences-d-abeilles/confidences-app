import React, { Component } from 'react';

export default class About extends Component {

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<img src={require('../assets/img/about.jpg')} alt="Gaetan et Nicolas" className="img-fluid" />
					</div>
				</div>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-4">
						<h2>« Sans la passion, Confidences d’Abeilles ne serait pas ce qu’elle est aujourd’hui »</h2>
					</div>
					<div className="col-5">
						<h3>Une évidence</h3>
						<p>Oui, Confidences d’Abeilles c’est
surtout une évidence ! Pas d’origine
précise, pas de révélations, pas de
plans sur la comète non, simplement le
moyen pour deux apiculteurs de vivre à
fond leur passion. D’aucuns
raccrocherons le début de l’aventure
en 2015, nous préférons parler d’un
héritage ; un héritage légué par notre

grand-oncle qui fut apiculteur en son temps. Nous lui devons notre passion pour les
abeilles, nous lui devons notre savoir-faire, nous lui devons beaucoup. Confidences
d’Abeilles s’est donc imposée à nous comme une suite logique ; un moyen de continuer
de rêver les yeux ouverts.</p>
					</div>
				</div>
				<div className="row justify-content-center ">
					<div className="col-9">
						<h3>Aujourd'hui</h3>
						<p>Confidences d’Abeilles, portée par le travail de plusieurs passionnés, poursuit son vol vers
de nouveaux horizons. Outre le travail d’apiculteur ou plutôt celui de gardien de la
biodiversité, c’est le partage et la découverte que met en avant Confidences d’Abeilles. La
fascination et l’admiration qu’éprouvent les curieux à l’ouverture de leur première ruche
sont suffisamment puissantes pour pousser l’équipe à poursuivre son travail dans cette
direction. L’implication du plus grand nombre dans le maintien des populations d’abeilles
peut notamment passer par le parrainage de ruche. C’est tout l’objet de ce service mis en
place Confidences d’Abeilles et accessible depuis la plateforme sur laquelle vous vous
trouvez en ce moment !<br /><br />
Confidences d’Abeilles soutient notamment ConnectHive dont elle est partenaire, dans le
développement de l’apiculture connectée de demain. Elle apporte son aide à l’association
EMAPI, association d’apiculture des Mines d’Alès, dans la gestion de son rucher.</p>
					</div>
				</div>
				<div className="row justify-content-center ">
					<div className="col-9">
						<h3>Remerciements</h3>
						<p>
							Que serait Confidences d’Abeilles sans vous ? Que serait-elle sans ses milliers de followers
							sur les réseaux sociaux, sans ses nombreux parrains, sans les personnes qui ont cru en
							elle ?<br /><br />
							Ce qui est certain c’est qu’elle n’en serait pas là aujourd’hui ! Alors merci et continuez la
							porter loin, très loin !
						</p>
					</div>
				</div>
			</div>
		)
	}
}
