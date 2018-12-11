import React, { Component } from 'react';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta';
import illustration from '../../assets/img/about.jpg';

export default class About extends Component {
  constructor(props) {
    super(props);
    const { location } = this.props;
    ReactGA.pageview(location.pathname);
  }

  render() {
    return (
      <div className="container">
        <Meta title="Histoire" />
        <div className="row">
          <div className="col">
            <img src={illustration} alt="Gaetan et Nicolas" className="img-fluid" />
          </div>
        </div>
        <div className="row mt-4 justify-content-center align-items-center">
          <div className="col-lg-4 col-md-6 col-sm-12 my-4">
            <h2>« Sans la passion, Confidences d’Abeilles ne serait pas ce qu’elle est aujourd’hui »</h2>
          </div>
          <div className="col-lg-5 col-md-6 col-sm-12">
            <h3>Un héritage</h3>
            <p>
              Oui, Confidences d’Abeilles est avant tout un héritage.
              Légué par notre grand-oncle, apiculteur en son temps, la fièvre nous a pris à l’occasion d’un goûter.
              <br />
              <br />
              <strong>« Et si nous faisions notre propre miel ? »</strong>
              <br />
              <br />
              Ni une ni deux, nous voilà parti sur le rucher familial, accompagnés de notre grand-oncle, pour notre première visite.
              Il n’aura pas fallu beaucoup plus de temps pour que la première ruche voie le jour.
              Fort du savoir-faire reçu, nous récoltons nos premiers kilos l’été 2007 !
              Depuis, saisons après saisons, ruches après ruches, notre passion n’a cessé de grandir et nous anime toujours plus intensément.

            </p>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <h3>Une évidence </h3>
            <p>
            Pas de révélations ni de plans sur la comète !
            Tout simplement le moyen pour deux apiculteurs de vivre à fond leur passion et surtout, de la faire connaître.
            Confidences d’Abeilles s’est donc imposée à nous comme une suite logique, un moyen de continuer de rêver les yeux ouverts.

            </p>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <h3>Aujourd'hui</h3>
            <p>
              Confidences d’Abeilles, portée par le travail de plusieurs passionnés, poursuit son vol vers de nouveaux horizons.
              Outre le travail d’apiculteur ou plutôt celui de gardien de la
              biodiversité, c’est le partage et la découverte que nous mettons en avant chez Confidences
              d’Abeilles.
              {' '}
              <br />
              Nous sommes convaincus que prendre des engagements forts tels que la maîtrise totale de
              la fabrication ou le travail avec des artisans passionnés est la plus belle manière de vous
              proposer des produits d’exception.
              {' '}
              <br />
              Ce modèle philanthropique est certes louable, mais sans soutien il ne peut pas perdurer.
              {' '}
              <br />
              <br />
              C’est tout l’objet du parrainage de ruches mis en place par Confidences d’Abeilles et
              accessible sur
              {' '}
              <a href="https://parrainagederuches.fr" rel="noopener noreferrer" target="_blank"> parrainagederuches.fr</a>
. Via ce service, nous vous invitons à ouvrir les yeux
              sur le monde des abeilles, à vous émerveiller devant leur génie et à les soutenir.
              Cette action est aussi le moyen pour nous de pérenniser notre activité dans un secteur en
              proie à diverses difficultés.

            </p>
          </div>
        </div>
        <div className="row justify-content-center ">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <h3>Demain ... </h3>
            <p>
            Confidences d’Abeilles soutient
              {' '}
              <a href="http://connecthive.com/" rel="noopener noreferrer" target="_blank">ConnectHive</a>
              {' '}
dans le développement de l’apiculture connectée de demain.
            Elle apporte également son aide à l’association
              {' '}
              <a href="https://emapiblog.wordpress.com/" rel="noopener noreferrer" target="_blank">EMAPI</a>
, association d’apiculture des Mines d’Alès, dans la gestion de son rucher.

            </p>
            <p className="text-right my-4">Nicolas &amp; Gaëtan &amp; les abeilles…</p>
          </div>
        </div>
      </div>
    );
  }
}
