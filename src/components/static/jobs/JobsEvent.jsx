import React from 'react';
import { Link } from 'react-router-dom';

import Meta from '../../utils/Meta'
import { APropos } from './APropos'

export default () => (
  <div className="container">
    <Meta title="Offre de stage" />
    <div className="row mt-4 justify-content-center align-items-center">
      <div className="col-lg-9 col-md-10 col-sm-12">
        <h1 className="text-center my-4">Offre de stage Community | Event Manager - Mars 2019</h1>
        <APropos />
        <h2>Missions</h2>
        <ul>
          <li>
            <strong>Prospection</strong> : identifier et cibler les partenaires et événements clés
            stratégiques (sur le terrain comme sur les réseaux sociaux)
          </li>
          <li>
            <strong>Prise de contact et négociation</strong>
          </li>
          <li>
            <strong>Déploiement opérationnel</strong> : logistique, animation,
            assurer le bon déroulement de la prestation
          </li>
          <li>
            <strong>Réflexion stratégique</strong> : proposition de l’amélioration du processus commercial
            général sur l’offre événementielle
          </li>
          <li>
            <strong>Gestion et animation des réseaux sociaux</strong> : réflexion créative et production régulière des
            contenus (visuels, GIF, infographie, étude, jeu concours, …) susceptibles de générer des
            interactions (social media, relais sur d’autres sites, retombées presse, …)
          </li>
          <li>
            <strong>Reporting et suivi de la performance</strong>
          </li>
          <li>
            <strong>Constitution d’un CRM</strong> : constituer un fichier d’influenceurs / blogueurs /
            youtubeurs avec lesquels des partenariats sont envisagés
          </li>
        </ul>
        <h2>Profil recherché</h2>
        <ul>
          <li>
            Vous êtes entrepreneur(se) dans l’âme, l’aventure vous fait rêver et l’ambition avancer ?
            C’est un bon début.
          </li>
          <li>Vous avez le permis ? On continue.</li>
          <li>Vous avez soif d’autonomie, de responsabilités et de liberté ? Ça nous plait !</li>
          <li>
            Vous connaissez bien les réseaux sociaux (reporting, insights) et avez déjà utilisé
            des outils comme Buffer, HootSuite, HubSpot ? C’est formidable.
          </li>
          <li>Vous êtes à l’aise en français et en anglais à l’écrit comme à l’oral ? Excellent.</li>
          <li>Vous avez déjà travaillé dans l’événementiel ? C'est super.</li>
          <li>Vous êtes créatif(ve) et force de proposition ? Épatant !</li>
          <li>Vous êtes dynamique et avez un très bon relationnel ? Nous devrions nous entendre.</li>
        </ul>
        <p>Alors n’hésitez plus et rejoignez-nous !</p>
        <p className="text-center">
          <Link className="btn btn-secondary" to="/apply">Postuler</Link>
        </p>
        <h2>Conditions</h2>
        <p>
          4-6 mois à partir de Mars 2019 – stage conventionné<br />
          Stage rémunéré
        </p>
      </div>
    </div>
  </div>
);
