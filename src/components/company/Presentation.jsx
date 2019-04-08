import React, { Fragment } from 'react';
import { Rows, Item } from '../utils/layout/Flex';
import { ButtonLink } from '../utils/Button';
import first from '../../assets/img/E/1.jpg';
import second from '../../assets/img/E/2.jpg';
import third from '../../assets/img/E/3.jpg';
import fourth from '../../assets/img/E/4.jpg';
import fifth from '../../assets/img/E/5.jpg';
import sixth from '../../assets/img/E/6.jpg';
import seventh from '../../assets/img/E/7.jpg';
import eighth from '../../assets/img/E/8.jpg';

import Meta from '../utils/Meta';
import leaflet from '../../assets/leaflet_e.pdf';

export default () => (
  <Fragment>
    <Meta title="Parrainer des ruches" />
    <Rows>
      <Item>
        <h1 className="text-left">
          Vos abeilles n’ont
          jamais été aussi
          proche de prendre leur
          envol !
        </h1>
        <p className="text-left">
          Pour parrainer votre première ruche c’est très
          simple : complétez notre formulaire en moins
          de 3 minutes et voilà ! Vous avez accès à la
          page dédiée à votre entreprise.
        </p>
        <p className="text-center">
          <ButtonLink url="/signup/company" primary>Parrainer des ruches</ButtonLink>
        </p>
      </Item>
      <Item>
        <div id="carouselHome" className="carousel slide" data-interval="3000" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            <div className="carousel-item active">
              <img className="d-block w-100 h-100" src={first} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={second} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={third} alt="Third slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={fourth} alt="Fourth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={fifth} alt="Fifth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={sixth} alt="Sixth slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={seventh} alt="Seventh slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100 h-100" src={eighth} alt="Eighth slide" />
            </div>
          </div>
        </div>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <h2>Le parrainage de ruche c’est :</h2>
      </Item>
    </Rows>
    <Rows>
      <Item>
        <h3 className="text-center my-4">Pour l'entreprise</h3>
        <ul>
          <li>
            Adopter une démarche participative et responsable vis-à- vis de l’environnement
          </li>
          <li>
            S’engager concrètement dans la <strong>protection de la biodiversité</strong>
          </li>
          <li>
            Une stratégie pour <strong>se démarquer de la concurrence</strong>
          </li>
          <li>
            Une histoire à partager avec ses partenaires
          </li>
          <li>
            Un <strong>contenu de qualité</strong>, original et engageant à publier régulièrement sur les <strong>réseaux sociaux</strong>
          </li>
          <li>
            Une ruche au nom et aux couleurs de l’entreprise
          </li>
          <li>
            Une <strong>page, dédiée à l'entreprise</strong>, détaille sa démarche environnementale ; des photos de sa ruche ainsi que des actualités y sont régulièrement postées
          </li>
          <li>
            Une visibilité digitale supplémentaire
          </li>
          <li>
            <strong>40 pots de miel de 250g personnalisés</strong> aux couleurs de l’entreprise : un cadeau unique pour ses collaborateurs, ses partenaires ou encore ses clients</li>
          <li>
            La possibilité d'organiser avec son équipe une <strong>visite de la ruche</strong> sous la fameuse tenue d'apiculteur
          </li>
        </ul>
      </Item>
      <Item>
        <h3 className="text-center my-4">Pour l'apiculteur</h3>
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
          <li>Une visibilité supplémentaire</li>
          <li>Un moyen de sensibiliser un grand
          nombre de personnes à la protection
          des abeilles</li>
        </ul>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url="/signup/company">Parrainer une ruche</ButtonLink>
      </Item>
      <Item textAlign="center">
        <ButtonLink url="/company/more">En savoir plus</ButtonLink>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url={leaflet} external primary>Télécharger la plaquette de présentation</ButtonLink>
      </Item>
    </Rows>
  </Fragment>
);
