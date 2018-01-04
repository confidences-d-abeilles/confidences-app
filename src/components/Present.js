import React, { Component } from 'react'
import ReactGA from 'react-ga';
import cadeau from '../assets/img/cadeau.jpg'
import { Link } from 'react-router-dom'

export default class Present extends Component {

    constructor(props) {
        super (props)
        ReactGA.pageview(this.props.location.pathname);
    }

    render () {
        return (
          <div className="container">
            <div className="row">
                <div className="col">
                    <img className="img-fluid" src={cadeau} alt="Bannière cadeau" />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2 className="text-center my-5">Parrainer des abeilles : un cadeau aussi utile qu’original !</h2>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <p>
                        <strong>Vous cherchiez un cadeau original qu’on puisse à la fois toucher du regard, expérimenter, déguster et qui soit
                        concrètement bénéfique pour notre
                        environnement ?</strong> Alors vous êtes au bon
                        endroit ! En effet, le parrainage d’Abeilles ou
                        de ruches à la particularité de réunir tous ces
                        atouts !
                    </p>
                </div>
            </div>
    				<div className="row">
    					<div className="col">
    						<ul className="nav nav-tabs" role="tablist">
    							<li className="nav-item">
    								<a className="nav-link active" data-toggle="tab" href="#how-offer">Comment offrir un parrainage d'Abeilles</a>
    							</li>
    							<li className="nav-item">
    								<a className="nav-link" data-toggle="tab" href="#presentation">Présentation rapide</a>
    							</li>
    						</ul>
    						<div className="tab-content" style={{ overflowX : 'auto' }}>
    							<div id="how-offer" className="tab-pane active" role="tabpanel">
    								<HowOfferPresent />
    							</div>
    							<div id="presentation" className="tab-pane" role="tabpanel">
    								<PresentationPresent />
    							</div>
    						</div>
    					</div>
    				</div>
    			</div>
        )
    }
}

class HowOfferPresent extends Component {

	render () {
    return (
      <div className="container mt-2">
        <div className="row d-flex align-items-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <p>
                  Dans le but de garantir une bonne saisie des
                  informations <strong>nous vous invitons à lire ces
                  toutes étapes avant de commencer.</strong>
              </p>
              <ul>
                  <li>
                      Inscrivez vous avec vos propres
                      informations (elles sont nécessaires à la
                      gestion de votre compte / à la
                      facturation)
                  </li>
                  <li>
                      Choisissez un nombre d’abeilles à offrir
                  </li>
                  <li>
                      Désignez votre bénéficiaire en cochant
                      « Ce parrainage est un cadeau » et en
                      renseignant ses coordonnées.
                      ATTENTION à la date à partir de
                      laquelle doit être notifié le bénéficiaire.<br /><strong>Un délai de 3 jours est recommandé.</strong>
                  </li>
                  <li>
                      Terminez en réglant votre cadeau (la
                      confirmation de règlement est
                      nécessaire pour la génération du
                      parrainage)
                  </li>
                  <li>
                      <span>C’est terminé </span>
                      <img src={require('../assets/img/smiley/happy.svg')} alt="smiley happy"
        								style={{ height: '1em' }} />
                  </li>
              </ul>
            </div>
            <div className="col">
              <p className="text-center">
                  <Link to="/signup/individual" className="btn btn-secondary">J'offre un parrainage d’abeilles</Link>
              </p>
            </div>
        </div>
      </div>
		);
	}
}

class PresentationPresent extends Component {

	render () {
		return (
      <div className="container mt-2">
        <div className="row d-flex align-items-center">
            <div className="col-lg-8 col-md-8 col-sm-12">
              <p>
                  En deux mots, votre heureux bénéficiaire
                  devient le parrain de 10 000 abeilles par
                  exemple. 10 000, tant que ça ?! Eh oui, il faut
                  savoir qu’une ruche compte en moyenne 50
                  000 individus. Des informations comme celle-ci mais aussi des photos de leurs abeilles, les
                  heureux parrains en recevront tout au long
                  de l’année que dure leur parrainage. Il y a
                  beaucoup à apprendre sur ce monde
                  fascinant. Plus captivant encore, ils auront la
                  possibilité de prendre part aux visites des
                  ruches au cours de l’année ! L’occasion pour
                  eux d’enfiler la fameuse combinaison de
                  l’apiculteur et de plonger littéralement au
                  cœur de la colonie !<br /><br />
                  Enfin, après avoir bien travaillé, les abeilles
                  partageront une partie de leur trésor pour le
                  plus grand plaisir des petits et des grands. Un
                  moment gastronomique inoubliable.<br /><br />
                  <strong>Non seulement les parrains prennent plaisir
                  à suivre l’évolution de leur ruche via une
                  page dédiée mais en plus ils participent la
                  sauvegarde d’une espèce menacée</strong> ; les
                  abeilles, par leur activité de pollinisation,
                  protège la biodiversité et préservent donc
                  notre environnement. Celui-ci étant plus
                  fécond il nécessite moins de traitements
                  nuisibles aux abeilles par exemple. C’est un
                  cercle vertueux qu’il faut réussir à amorcer !
              </p>
            </div>
            <div className="col">
              <p className="text-center" >
                  <Link to="/individual/more" className="btn btn-secondary">En savoir plus</Link>
              </p>
            </div>
        </div>
      </div>
		);
	}
}
