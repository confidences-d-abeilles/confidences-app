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
    <Rows justifyContent="center">
      <Item>
        <h3 className="text-center my-4">...pour vous</h3>
      </Item>
      <Item>
        <h3 className="text-center my-4">...pour l’apiculteur</h3>
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <ButtonLink to="/signup/individual">C’est parti</ButtonLink>
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
          primary
        >
          Télécharger la plaquette de présentation
        </ButtonLink>
      </Item>
    </Rows>
  </Fragment>
);
