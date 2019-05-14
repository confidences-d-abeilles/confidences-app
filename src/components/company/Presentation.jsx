import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
import { Rows, Item } from '../utils/layout/Flex';
import { ButtonLink } from '../utils/Button';
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
        <ButtonLink url="/signup/company" primary>{t('go')}</ButtonLink>
      </p>
    </Jumbotron>
    <Rows>
      <Item textAlign="center">
        <h2>{t('secondTitle')}</h2>
      </Item>
    </Rows>
    <Rows>
      <Item>
        <h3 className="text-center my-4">{t('forCompany')}</h3>
        <ul>
          {t('forCompanyPoints').map(point => <li>{point}</li>)}
        </ul>
      </Item>
      <Item>
        <h3 className="text-center my-4">{t('forUs')}</h3>
        <ul>
          {t('forUsPoints').map(point => <li>{point}</li>)}
        </ul>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url="/signup/company">{t('sponsor')}</ButtonLink>
      </Item>
      <Item textAlign="center">
        <ButtonLink url="/company/more">{t('more')}</ButtonLink>
      </Item>
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url={leaflet} external primary>{t('download')}</ButtonLink>
      </Item>
    </Rows>
  </Fragment>
));
