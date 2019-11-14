import React, { Fragment } from 'react';
import ButtonLink from '@cda/button-link';
import { Rows, Item } from '@cda/flex';
import first from '../../assets/img/P/slideP01.jpg';
import second from '../../assets/img/P/slideP02.jpg';
import third from '../../assets/img/P/slideP03.jpg';
import fourth from '../../assets/img/P/slideP04.jpg';
import fivth from '../../assets/img/P/slideP05.jpg';
import sixth from '../../assets/img/P/slideP06.jpg';
import seventh from '../../assets/img/P/slideP07.jpg';
import heigth from '../../assets/img/P/slideP08.jpg';
import leaflet from '../../assets/leaflet_p.pdf';
import forYou from '../../assets/img/schema-parrainage-apport-pour-les-P.png';
import forUs from '../../assets/img/schema-apport-pour-les-api.png';

import Meta from '../utils/Meta';
import Jumbotron from '../Jumbotron';

export default () => (
  <Fragment>
    <Meta title="Parrainer des abeilles" />
    <Jumbotron img={[first, second, third, fourth, fivth, sixth, seventh, heigth]}>
      <h1 className="text-left">
        Prêt(e) à soutenir vos abeilles ? à profiter de votre miel ?
      </h1>
      <p className="text-left">
        Pour parrainer vos premières abeilles c’est simple : complétez le formulaire, supportez autant d’abeilles que souhaité,
        et on s’occupe de les installer dans une ruche !
      </p>
      <p className="text-center">
        <ButtonLink to="/signup/individual" primary>C’est parti</ButtonLink>
        <ButtonLink to="/present" primary>Je veux l’offrir 🎁</ButtonLink>
      </p>
    </Jumbotron>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <h2>Parrainer des abeilles c’est...</h2>
      </Item>
    </Rows>
    <Rows justifyContent="center" wrap="wrap">
      <Item flex="1 0 20rem">
        <h3 className="text-center my-4">...pour vous</h3>
        <img src={forYou} alt="for you" width="100%" />
      </Item>
      <Item flex="1 0 20rem">
        <h3 className="text-center my-4">...pour l’apiculteur</h3>
        <img src={forUs} alt="for you" width="100%" />
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <ButtonLink to="/signup/individual" primary>C’est parti</ButtonLink>
      </Item>
      <Item textAlign="center">
        <ButtonLink to="/individual/more">En savoir plus</ButtonLink>
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <p>
          Vous voulez en parler autour de vous et nous aider à
          diffuser cette initiative ? Récupérez donc une
          présentation en version PDF.
        </p>
        <ButtonLink
          to={leaflet}
          external
        >
          Télécharger la plaquette de présentation
        </ButtonLink>
      </Item>
    </Rows>
  </Fragment>
);
