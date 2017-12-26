import React, { Component } from 'react';
import ReactGA from 'react-ga';

export default class Home extends Component {

    constructor(props) {
        super(props)
        ReactGA.pageview('/mentions_legales');
    }

    render () {
        return (
			<div className="container py-4">
				<h2>Mentions légales</h2>
				<h3>Editeur du site et prestataire de service :</h3>
				SAS Confidences d’Abeilles<br />
				Société par actions simplifiée au capital de 3 000,00 euros<br />
				Siège social situé au 319 chemin des plantées, 74 210 Faverges<br />
				RCS Annecy 814 152 518<br />
				<strong>SIRET :</strong> 814 152 518 000 19<br />
				<strong>Numéro de téléphone : 07 67 37 41 44</strong><br />
				<strong>Email :</strong> general@parrainagederuches.fr<br />
				<strong>Directeur de la publication :</strong> Gaëtan EKSZTEROWICZ<br /><br />

				<strong>Déclaration CNIL :</strong><br />
				Conformément à la loi &quot; Informatique et Libertés &quot;, le traitement des informations nominatives
				relatives aux clients à fait l&#39;objet d&#39;une déclaration auprès de la Commission Nationale de
				l&#39;Informatique et des Libertés (CNIL) sous le numéro 1943859<br /><br />
				<strong>Hébergement du présent site</strong><br />
				Le prestataire assurant le stockage direct et permanent du site est la société 1&1 Internet SARL<br />
				7, place de la Gare – BP 70109 – 57201 Sarreguemines Cedex<br />
				Numéro de téléphone : 0970 808 911<br />

			</div>
        );
    }
}
