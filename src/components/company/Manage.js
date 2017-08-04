import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';

export default class CompanyManage extends Component {

    render () {
        return (
            <div>
                <h1>Dashboard Entreprise</h1>
                <img src={logo} alt="Logo entreprise" width="25%" />
                <p>
                    Adresse de facturation
                </p>
                <p>
                    Adresse de livraison
                </p>
                <button>Voir ma page</button>
                <button>Modifier ma page</button>
                <button>Telecharger les fichiers modeles pour vos etiquettes</button>
                <button>Envoyer le logo a apposer sur vos etiquettes de pots de miel</button>
                <button>Soumettre un visuel pour vos etiquettes de pots de miel</button>
                <button>Se deconnecter</button>
            </div>
        );
    }
}
