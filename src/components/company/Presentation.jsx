import React, { Fragment } from 'react';
import { withTranslation } from 'react-i18next';
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

export default withTranslation('company')(({ t }) => (
  <Fragment>
    <Meta title="Parrainer des ruches" />
    <Rows>
      <Item>
        <h1 className="text-left">{t('headline')}</h1>
        <p className="text-left">{t('headblock')}</p>
        <p className="text-center">
          <ButtonLink url="/signup/company" primary>{t('go')}</ButtonLink>
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
