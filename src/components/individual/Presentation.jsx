import React, { Fragment } from 'react';
import ButtonLink from '@cda/button-link';
import { Rows, Item } from '@cda/flex';
import first from '../../assets/img/P/1.jpg';
import leaflet from '../../assets/leaflet_p.pdf';

import Meta from '../utils/Meta';
import Jumbotron from '../Jumbotron';

export default () => (
  <Fragment>
    <Meta title="Parrainer des abeilles" />
    <Jumbotron img={first}>
      <h1 className="text-left">
        Vos abeilles n’ont
        jamais été aussi
        proche de prendre leur
        envol !
      </h1>
      <p className="text-left">
        Pour parrainer vos premières abeilles c’est très
        simple : complétez le formulaire d’inscription,
        choisissez le nombre d’abeilles et voilà !
      </p>
      <p className="text-center">
        <ButtonLink url="/signup/individual" primary>Parrainer mes permières abeilles</ButtonLink>
        <ButtonLink url="/present" primary>Offrir un parrainage</ButtonLink>
      </p>
    </Jumbotron>
    <Rows>
      <Item textAlign="center">
        <h2>Parrainer une ruche c'est :</h2>
      </Item>
    </Rows>
    <Rows>
      <Item>
        <h3 className="text-center my-4">Pour vous</h3>
        <ul>
          <li>
            Adopter une démarche participative et responsable vis-à-vis de l’environnement</li>
          <li>
            S’engager concrètement dans la <strong>protection de la biodiversité</strong>
          </li>
          <li>
            Une histoire à partager avec vos amis
							</li>
          <li>
            Une ruche portant votre nom
							</li>
          <li>
            Une page dédiée à la ruche dans laquelle vos abeilles évoluent, des photos de la ruche et des abeilles ainsi que des actualités seront régulièrement postées</li>
          <li>
            Entre 8 et 40 <strong>pots de miel personnalisés avec votre nom</strong> ou celui de la personne à qui est offert le parrainage : un cadeau unique qui ravira votre famille et vos amis.
							</li>
          <li>
            La possibilité de <strong>rendre visite à vos abeilles</strong> équipé(e) de la fameuse tenue de protection de l'apiculteur
							</li>
        </ul>
      </Item>
      <Item>
        <h3 className="text-center my-4">Pour nous les apiculteurs</h3>
        <ul>
          <li>C’est l’assurance de maintenir notre
							cheptel et de l’accroitre</li>
          <li>Un nombre plus important de ruches
          nous permet plus facilement
							d’équilibrer les colonies entre elles</li>
          <li>L’implantation de nouveaux ruchers
          permet localement d’agir sur la
          biodiversité (pollinisation) mais aussi
          d’organiser des visites pédagogiques
							pour les curieux</li>
          <li>Un moyen de sensibiliser un grand
          nombre de personnes à la protection
							des abeilles</li>
        </ul>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url="/signup/individual">Parrainer des abeilles</ButtonLink>
      </Item>
      <Item textAlign="center">
        <ButtonLink url="/individual/more">En savoir plus</ButtonLink>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink
          url={leaflet}
          external
          primary
        >
          Télécharger la plaquette de présentation
        </ButtonLink>
      </Item>
    </Rows>
  </Fragment>
);
