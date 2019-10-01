import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import ButtonLink from '@cda/button-link';
import { Rows, Item } from '@cda/flex';
import first from '../../assets/img/E/1.jpg';

import Meta from '../utils/Meta';
import leaflet from '../../assets/leaflet_e.pdf';
import Jumbotron from '../Jumbotron';

export default withTranslation('company')(({ t }) => (
  <Fragment>
    <Meta title="Parrainer des ruches" />
    <Jumbotron img={first}>
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
    <Rows justifyContent="center">
      <Item>
        <h3 className="text-center my-4">{t('forCompany')}</h3>
      </Item>
      <Item>
        <h3 className="text-center my-4">{t('forUs')}</h3>
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
