import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import ButtonLink from '@cda/button-link';
import { Rows, Item } from '@cda/flex';
import first from '../../assets/img/E/1.jpg';

import Meta from '../utils/Meta';
import leaflet from '../../assets/leaflet_e.pdf';
import Jumbotron from '../Jumbotron';
import forUs from '../../assets/img/schema-apport-pour-les-api.png';
import forYou from '../../assets/img/schema-parrainage-apport-pour-les-E.png';

export default withTranslation('company')(({ t }) => (
  <Fragment>
    <Meta title="Parrainer des ruches" />
    <Jumbotron img={[first]}>
      <h1 className="text-left">{t('headline')}</h1>
      <p className="text-left">{t('headblock')}</p>
      <p className="text-center">
        <ButtonLink to="/signup/company" primary>{t('go')}</ButtonLink>
      </p>
    </Jumbotron>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <h2>{t('secondTitle')}</h2>
      </Item>
    </Rows>
    <Rows justifyContent="center" wrap="wrap">
      <Item flex="1 0 20rem">
        <h3 className="text-center my-4">{t('forCompany')}</h3>
        <img src={forYou} alt="for you" width="100%" />
      </Item>
      <Item flex="1 0 20rem">
        <h3 className="text-center my-4">{t('forUs')}</h3>
        <img src={forUs} alt="for you" width="100%" />
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <ButtonLink to="/signup/company">{t('sponsor')}</ButtonLink>
      </Item>
      <Item textAlign="center">
        <ButtonLink to="/company/more">{t('more')}</ButtonLink>
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <p>{t('paragraph')}</p>
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <ButtonLink to={leaflet} external primary>{t('download')}</ButtonLink>
      </Item>
    </Rows>
  </Fragment>
));
