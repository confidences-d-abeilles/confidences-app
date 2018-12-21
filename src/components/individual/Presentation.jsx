import React, { Fragment } from 'react';
import { ButtonLink } from '../utils/Button';
import { Rows, Item } from '../utils/layout/Flex';
import first from '../../assets/img/P/1.jpg';
import second from '../../assets/img/P/2.jpg';
import third from '../../assets/img/P/3.jpg';
import fourth from '../../assets/img/P/4.jpg';
import fifth from '../../assets/img/P/5.jpg';
import sixth from '../../assets/img/P/6.jpg';
import seventh from '../../assets/img/P/7.jpg';
import eighth from '../../assets/img/P/8.jpg';
import leaflet from '../../assets/leaflet_p.pdf';

import Meta from '../utils/Meta';

export default () => (
  <Fragment>
    <Meta title="Parrainer des abeilles" />
    <Rows>
      <Item>
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
          <ButtonLink url="/signup/individual" label="Parrainer mes permières abeilles" primary />
          <ButtonLink url="/present" label="Offrir un parrainage" primary />
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
        <ButtonLink url="/signup/individual" label="Parrainer des abeilles" />
      </Item>
      <Item textAlign="center">
        <ButtonLink url="/individual/more" label="En savoir plus" />
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url={leaflet} external primary label="Télécharger la plaquette de présentation" />
      </Item>
    </Rows>
  </Fragment>
);
