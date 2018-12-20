import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Meta from '../utils/Meta'


export default class ContributorFinal extends Component {

    constructor(props) {
        super(props)
        
    }

    render () {
        return (
      <div className="container py-4">
                <Meta title="Félicitations"/>
        <div className="row justify-content-center">
          <div className="col-9">
            <h2 className="text-center my-4">Félicitation ! Vous faîtes désormais
            partie de l’équipe d’apporteurs
            d’affaires.</h2>
            <p className="lead text-center"><span className="align-middle">Toute l’équipe de Confidences
            d’Abeilles vous souhaite la
            bienvenue. Nous sommes impatients
            et curieux de voir quelles entreprises
            vous aller démarcher. Bon courage </span><img src={require('../../assets/img/smiley/happy.svg')} alt="smiley happy"
              style={{ height: '1em' }} /></p>
            <div className="row">
              <div className="col text-center">
                <Link to="/account" className="btn btn-primary">Mon compte</Link>
              </div>
              <div className="col text-center">
                <Link to="/contributor/approach" className="btn btn-primary">Démarcher ma première entreprise</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        );
    }
}
