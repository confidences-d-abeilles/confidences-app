
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'
import imgPlaceholder from '../../assets/img/img-placeholder.gif';

export default class ContributorApproach extends Component {

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col-6">
						<h2 className="text-center">Comment démarcher une entreprise ?</h2>
						<p>
							Une fois trouvée, nous vous aidons à la
							contacter en remplissant un formulaire très
							court. Il ne vous reste alors plus qu’attendre
							qu’elle parraine ses premières ruches.
						</p>
						<div className="row">
							<div className="col my-2 text-center">
								<Link to="/contributor/prelead" className="btn btn-secondary">Ajouter une entreprise</Link>
							</div>
							<div className="col my-2 text-center">
								<Link to="/contributor/parrains" className="btn btn-secondary">Consulter la liste des parrains</Link>
							</div>
						</div>
					</div>
					<div className="col">
						<div id="carouselHome" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Third slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-8">
						<h3 className="text-center my-4">Que faut-il faire en pratique ?</h3>
						<h4>Définir une liste d’entreprise</h4>
						<p>
							Pour commencer il faut que vous déterminiez les entreprises que vous souhaitez
							contacter. Choisissez les bien puisque vous ne pouvez en ajouter que 10 au départ. Faites
							le tour de votre réseau, de vos connaissances et ne retenez que celles avec lesquelles
							vous avez le plus de chance de réussir.<br /><br />
							Si l’une des entreprises que vous avez contactées parraine des ruches, elle vous donnera
							alors la possibilité de contacter 5 entreprises de plus.<br /><br />
							N'hésitez pas à consulter la liste des entreprises marraines pour vérifier que celles que
							vous vouliez contacter ne s’y trouvent pas déjà.
						</p>
						<h4>Contacter l'entreprise</h4>
						<p>
							Pour prendre contact il y a deux possibilités :
						</p>
						<ul>
							<li>
								Directement à partir de cette plateforme : lorsque vous choisissez d&#39;ajouter une
								entreprise il vous est proposé de lui envoyer un mail. Pour vous aider, des templates
								sont proposés et il ne vous reste plus qu&#39;à les compléter / modifier. L&#39;adresse mail
								utilisée pour l&#39;envoi vous est attribuée par défaut et c&#39;est à celle-ci que répondra
								l&#39;entreprise. Exemple, l&#39;adresse mail de Baptiste Claire serait
								bacl@parrainagederuches.fr. Vous pourrez consulter les messages reçus depuis votre
								compte.
							</li>
							<li>
								Avec vos propres ressources : Vous avez aussi la possibilité d&#39;utiliser votre messagerie
								classique, votre téléphone ou encore mieux de rencontrer directement des membres
								de l&#39;entreprise sélectionnée. Pour vous aider, des supports de communication sont à
								votre disposition ci-dessous ainsi que des templates de mail à copier / coller /
								modifier. Vous êtes libres de les imprimer et de les utiliser.
							</li>
						</ul>
						<h4>Ajouter l'entreprise à votre liste des démarches effectuées</h4>
						<p>
							Que vous ayez choisi l&#39;une ou l&#39;autre des méthodes il vous faudra renseigner quelques
détails concernant l&#39;entreprise contactée pour pouvoir toucher une commission. Il vous
suffit pour cela de cliquer sur &quot;AJOUTER UNE ENTREPRISE&quot; puis de compléter le petit
formulaire ; bien remplir le champ numéro siret et celle-ci sera ajoutée à votre liste. Il ne
vous reste alors plus qu&#39;à attendre une inscription et un parrainage de la part de
l&#39;entreprise que vous avez contacté. Son statut sera mis à jour dans la liste des entreprises
démarchées.<br /><br />
Bien entendu, une relance téléphonique augmente très fortement votre taux de
conversion. Retrouvez nos conseils ci-dessous.
						</p>
						<div className="row">
							<div className="col my-2 text-center">
								<Link to="/contributor/prelead" className="btn btn-secondary">Ajouter une entreprise</Link>
							</div>
							<div className="col my-2 text-center">
								<Link to="/contributor/parrains" className="btn btn-secondary">Consulter la liste des parrains</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-9">
						<a href="/contributor/approach"><p className="text-center lead my-4" data-toggle="collapse" data-target="#advices" >Conseils pour améliorer votre taux de conversion <FontAwesome name='chevron-down' /></p></a>
						<div className="collapse" id="advices">
							<ul>
							<li>Conseil n°1 : Ne pas envoyer d’email sur des boites « fourre-tout » type contact@ ou
info@ ou encore hello@. Toujours trouver l’email du gérant / d’un responsable / d’un
directeur. Si le mail n’est pas trouvable sur le site internet de la société, sur <a target="_blank" rel="noopener noreferrer" href="http://hunter.io">hunter.io</a>,
faire une recherche google « @nomdelentreprise.fr ou .com » (garder les guillemets)
pour trouver la nomenclature des mails et donc par extension déterminer celui du
gérant.</li>
							<li className="my-2">
								Conseil n°2 : Pour avoir un excellent taux de réponse à vos emails, il faut vous limiter à
trois phrases :
<ul>
	<li>Phrase 1 : Je me permets de vous contacter au sujet de, de la part de, à propos de</li>
	<li>Phrase 2 : Ce que vous faites (Nous proposons aux entreprises de répondre à leurs
enjeux en termes de RSE en parrainant des ruches…)</li>
	<li>Phrase 3 : A quel moment et sur quel numéro seriez-vous joignable pour en
discuter ?</li>
</ul>
							</li>
							<li className="my-2">Conseil n° 3 : pour un premier mail « tentative de contact » en objet attire l’attention.
Pour un second mail « Je n’arrive pas à vous joindre ». Pour un troisième et dernier mail
« dernière tentative de contact »</li>
<li className="my-2">Conseil n°4 : Rappeler la personne deux jours après l’envoi de votre email</li>
<li className="my-2">Conseil n°5 : sans réponse ou retour d’une personne au bout de 3 tentatives, il faut
laisser tomber</li>
<li className="my-2">Conseil n°6 : Toujours commencer par se présenter et s’assurer que notre interlocuteur a
un peu de temps. Script type :<ul>
<li>Monsieur X ?</li>
<li>Oui</li>
<li>Untel, étudiant en … à l’école de …, <strong>je ne vous dérange pas ?</strong></li>
<li>Non</li>
<li>Présentation succincte de deux ou trois phrases maximum destinée à accrocher
l’attention de la personne et entamer une discussion</li>
</ul></li>
<li className="my-2">Conseil n°7 : Le but est de faire parler votre interlocuteur et de rebondir sur ses points
d’attention. Il faut toujours essayer de tisser un lien avec lui (proximité géographique,
connaissance en commun, loisir commun, etc.).</li>
<li className="my-2">Conseil n°8 : Téléphoner debout si possible (aisance et assurance dans la voix qui rassure)</li>
						</ul>
						</div>
						<a href="/contributor/approach" className="link-nostyle"><p className="text-center lead my-4" data-toggle="collapse" data-target="#supports" >Supports de communication <FontAwesome name='chevron-down' /></p></a>
						<div className="collapse" id="supports">
							Missing content
						</div>
						<a href="/contributor/approach"><p className="text-center lead my-4" data-toggle="collapse" data-target="#faq" >FAQ <FontAwesome name='chevron-down' /></p></a>
						<div className="collapse" id="faq">
							Missing content
						</div>
					</div>
				</div>
			</div>
		);
	}
}
