import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';
import '../../assets/styles/parrains_homepage.css';
import first from '../../assets/img/homepage/1.jpg';
import second from '../../assets/img/homepage/2.jpg';
import third from '../../assets/img/homepage/3.jpg';
import fourth from '../../assets/img/homepage/4.jpg';
import fifth from '../../assets/img/homepage/5.jpg';
import sixth from '../../assets/img/homepage/6.jpg';
import seventh from '../../assets/img/homepage/7.jpg';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';

import {
  Rows,
  Item,
} from '../../components/utils/layout/Flex';
import { ButtonLink } from '../../components/utils/Button';

const defaultImg = require('../../assets/img/profile.png');

const carouselSlides = [
  { element: first, label: 'first' },
  { element: second, label: 'second' },
  { element: third, label: 'third' },
  { element: fourth, label: 'fourth' },
  { element: fifth, label: 'fifth' },
  { element: sixth, label: 'sixth' },
  { element: seventh, label: 'seventh' },
];

export default withTranslation('homepage')(({ loading, users, t }) => (
  <Fragment>
    <Meta title="Accueil" />
    <Rows>
      <Item>
        <h1>{t('headline')}</h1>
        <p>
          {t('headblock')}
        </p>
        <p className="text-center">
          <ButtonLink url="/company/presentation" primary>Service entreprise</ButtonLink>
          <ButtonLink url="/individual/presentation" primary>Service particulier</ButtonLink>
        </p>
      </Item>
      <Item>
        <div id="carouselHome" className="carousel slide" data-interval="2500" data-ride="carousel">
          <div className="carousel-inner" role="listbox">
            {carouselSlides.map(({ element, label }, key) => (
              <div className={key === 0 ? 'carousel-item active' : 'carousel-item'} key={label}>
                <img className="d-block w-100 h-100" src={element} alt={label} />
              </div>
            ))}
          </div>
        </div>
      </Item>
    </Rows>
    <div className="container py-4">
      <div className="row justify-content-center align-items-center">
        <div className="col-lg-9 col-md-10 col-sm-12">
          <p>{t('mission')}</p>
        </div>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col">
          <h2 className="text-center my-4">{t('ourClients')}</h2>
          {!loading
            ? (
              <Slider
                dots={false}
                infinite
                speed={1000}
                slidesToShow={4}
                slidesToScroll={4}
                arrows
              >
                {users.map((user) => {
                  if (user.user_type === 1 || user.user_type === 2) {
                    let img;
                    if (user.logo) {
                      img = `${process.env.REACT_APP_CONTENT_DOMAIN}/${user.logo}`;
                    } else if (user.hive_img) {
                      img = `${process.env.REACT_APP_CONTENT_DOMAIN}/${user.hive_img}`;
                    } else {
                      img = defaultImg;
                    }
                    return (
                      <div key={user.id}>
                        <Link to={(user.namespace) ? `/parrains/${user.namespace}` : `/hive/${user.hive_id}`}>
                          <img className="img-fluid" src={img} alt={(user.company_name) ? user.company_name : `${user.firstname} ${user.name}`} />
                          <p className="my-2" style={{ height: '2em', lineHeight: '2em', overflow: 'hidden' }}>{(user.company_name) ? user.company_name : `${user.firstname} ${user.name}`}</p>
                        </Link>
                      </div>
                    );
                  }
                  return null;
                })}
              </Slider>
            ) : <Loading />}
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-9 col-md-10 col-sm-12">
          <p>{t('ready')}</p>
        </div>
      </div>
      <div className="row align-items-center justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <ButtonLink url="/presignup">Parrainer une ruche</ButtonLink>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
          <ButtonLink url="/hives">Découvrir les ruches</ButtonLink>
        </div>
      </div>
    </div>
  </Fragment>
));
