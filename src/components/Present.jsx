import React from 'react';
import { Link } from 'react-router-dom';
import ButtonLink from '@cda/button-link';
import presentPict from '../assets/img/present.jpg';
import Meta from './utils/Meta';
import Cover from './Cover';

export default () => (
  <Cover img={presentPict}>
    <Meta title="Offrir un parrainage" />
    <h2 className="text-center my-4">Offrir un parrainage d'abeilles : un cadeau aussi utile qu’original !</h2>
    <div className="row justify-content-center">
      <p className="mb-5">
        <strong>
          Vous cherchiez un cadeau original qu’on puisse à la fois toucher du regard, expérimenter, déguster et qui soit
          concrètement bénéfique pour notre
          environnement ?
        </strong>
&nbsp;Alors vous êtes au bon
      endroit ! En effet, le parrainage d’Abeilles ou
      de ruches a la particularité de réunir tous ces
      atouts !
      </p>
      <p className="text-center">
        <ButtonLink to="/signup/individual" primary>J’offre des abeilles</ButtonLink>
        <ButtonLink to="/individual/prices">Je découvre les coûts</ButtonLink>
      </p>
    </div>
    <ul className="nav nav-tabs justify-content-center" role="tablist">
      <li className="nav-item">
        <a className="nav-link active lead" data-toggle="tab" href="#how-offer">Comment offrir un parrainage ?</a>
      </li>
      <li className="nav-item">
        <a className="nav-link lead" data-toggle="tab" href="#presentation">Offrir un parrainage, c’est quoi ?</a>
      </li>
    </ul>
    <div className="tab-content" style={{ overflowX: 'auto' }}>
      <div id="how-offer" className="tab-pane active" role="tabpanel">
        <HowOfferPresent />
      </div>
      <div id="presentation" className="tab-pane" role="tabpanel">
        <PresentationPresent />
      </div>
    </div>
  </Cover>
);


const HowOfferPresent = () => (
  <div className="container mt-4">
    <div className="row">
      <div className="col">
        <p className="">
          <strong>C’est simple et rapide en suivant ces étapes :</strong>
        </p>
        <ol className="lead">
          <li className="my-4">
            Inscrivez-vous avec vos propres informations (elles sont nécessaires à la gestion du compte)
          </li>
          <li className="my-4">
            Choisissez le nombre d’abeilles à offrir
          </li>
          <li className="my-4">
            Désignez votre bénéficiaire en cochant « Ce parrainage est un cadeau » et en renseignant ses coordonnées.
          </li>
          <li className="my-4">
            Votre bénéficiaire recevra un mail à la date que vous aurez sélectionnée (le 25 décembre à Noël).
            Vous avez la possibilité d’imprimer un certificat de parrainage à offrir (disponible 4 jours après l’inscription).
          </li>
          <li className="my-4">
            Terminez en réglant votre cadeau
          </li>
          <li className="my-4">
            <span className="align-middle">C’est fait </span>
            <img
              src={require('../assets/img/smiley/happy.svg')}
              alt="smiley happy"
              style={{ height: '1em' }}
            />
          </li>
        </ol>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p className="text-center">
          <ButtonLink to="/signup/individual">J’offre des abeilles</ButtonLink>
        </p>
      </div>
    </div>
  </div>
);

const PresentationPresent = () => (
  <div className="container mt-4">
    <div className="row">
      <div className="col">
        <p>
          Votre cadeau permet à l’heureux bénéficiaire de devenir parrain de 10 000 abeilles (ou
          plus). 10 000, tant que ça ?! Eh oui, il faut savoir qu’une ruche compte en moyenne 50 000
          individus. Des informations comme celle-ci mais aussi des photos de leurs abeilles, les
          heureux parrains en recevront tout au long de l’année que dure leur parrainage. Il y a
          beaucoup à apprendre sur ce monde fascinant et plus captivant encore. Ils auront aussi la
          possibilité de prendre part aux visites des ruches au cours de l’année ! L’occasion pour eux
          d’enfiler la fameuse combinaison de l’apiculteur et de plonger littéralement au cœur de la
          colonie !
        </p>
        <p>
          Enfin, après avoir bien travaillé, les abeilles partageront une partie de leur trésor pour le
          plus grand plaisir des petits et des grands. Un moment gastronomique inoubliable.
        </p>
        <p>
          <strong>
Par votre cadeau, les parrains prennent plaisir à suivre l’évolution de leur ruche via une
            page dédiée et participent également à la sauvegarde d’un métier et d’une espèce menacée.
          </strong>
          <br />
          Les abeilles, par leur activité de pollinisation, protègent la biodiversité et préservent donc
          notre environnement. Celui-ci étant plus fécond il nécessite moins de traitements
          nuisibles aux abeilles. C’est un cercle vertueux qu’il faut réussir à amorcer !
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col">
        <p className="text-center">
          <Link to="/individual/more" className="btn btn-secondary">En savoir plus</Link>
        </p>
      </div>
    </div>
  </div>
);
