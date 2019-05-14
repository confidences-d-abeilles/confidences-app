import React from 'react';

import { withTranslation } from 'react-i18next';
import Meta from '../utils/Meta';
import CoverPic from '../../assets/img/about.jpg';
import Cover from '../Cover';

export default withTranslation('about')(({ t }) => (
  <>
    <Meta title="Histoire" />
    <Cover img={CoverPic}>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="col">
          <h2>{t('quote')}</h2>
        </div>
        <div className="col">
          <h3>{t('title1')}</h3>
          <p>{t('block1')}</p>
        </div>
      </div>
      <h3>Une évidence</h3>
      <p>
        Pas de révélations ni de plans sur la comète !
        Tout simplement le moyen pour deux apiculteurs de vivre à fond leur passion et surtout, de la faire connaître.
        Confidences d’Abeilles s’est donc imposée à nous comme une suite logique, un moyen de continuer de rêver les yeux ouverts.
      </p>
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
    </Cover>
  </>
));
