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
          <ButtonLink url="/company/presentation" primary>{t('companyService')}</ButtonLink>
          <ButtonLink url="/individual/presentation" primary>{t('individualService')}</ButtonLink>
        </p>
      </Item>
      <Item>
        <img src={first} />
      </Item>
    </Rows>
    <Rows>
      <Item>
        <p>{t('mission')}</p>
      </Item>
    </Rows>
    <Rows>
      <Item>
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
      </Item>
    </Rows>
    <Rows>
      <Item>
        <p>{t('ready')}</p>
      </Item>
    </Rows>
    <Rows>
      <Item>
        <ButtonLink url="/presignup">{t('sponsor')}</ButtonLink>
      </Item>
      <Item>
        <ButtonLink url="/hives">{t('discover')}</ButtonLink>
      </Item>
    </Rows>
  </Fragment>
));
