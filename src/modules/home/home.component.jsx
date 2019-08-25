import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';
import styled from '@emotion/styled';
import ButtonLink from '@cda/button-link';
import {
  Rows,
  Item,
} from '@cda/flex';
import first from '../../assets/img/homepage/4.jpg';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';

import Jumbotron from '../../components/Jumbotron';

import '../../assets/styles/parrains_homepage.css';

const defaultImg = require('../../assets/img/profile.png');

const TextBlock = styled(Item)`
  font-size: 1.1rem;
  font-weight: 300;
  padding: 5vh 20vw;
  text-align: center;
`;

export default withTranslation('homepage')(({ loading, users, t }) => (
  <Fragment>
    <Meta title="Accueil" />
    <Jumbotron img={first}>
      <h1>{t('headline')}</h1>
      <p>
        {t('headblock')}
      </p>
      <p className="text-center">
        <ButtonLink url="/company/presentation" primary>{t('companyService')}</ButtonLink>
        <ButtonLink url="/individual/presentation" primary>{t('individualService')}</ButtonLink>
      </p>
    </Jumbotron>
    <Rows>
      <TextBlock>
        <p>{t('mission')}</p>
      </TextBlock>
    </Rows>
    <Rows justifyContent="center">
      <Item style={{ maxWidth: '100vw' }}>
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
      <TextBlock>
        <p>{t('ready')}</p>
        <ButtonLink url="/presignup">{t('sponsor')}</ButtonLink>
        <ButtonLink url="/hives">{t('discover')}</ButtonLink>
      </TextBlock>
    </Rows>
  </Fragment>
));
