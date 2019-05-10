import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { withTranslation } from 'react-i18next';
import '../../assets/styles/parrains_homepage.css';
import styled from '@emotion/styled';
import first from '../../assets/img/homepage/4.jpg';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';

import {
  Rows,
  Item,
} from '../../components/utils/layout/Flex';
import { ButtonLink } from '../../components/utils/Button';

const defaultImg = require('../../assets/img/profile.png');

const Jumbotron = styled(Rows)`
  align-items: stretch;
  background-color: #111;
  overflow: hidden;
  min-height: 20rem;
`;

const Jumbcontent = styled(Item)`
  color: #DDD;
  flex: 1;
  z-index: 10;
  position: relative;
  &::after {
    content: ' ';
    width: 100%;
    transform: rotate(7deg);
    background-color: #111;
    right: 0;
    display: block;
    right: -10%;
    top: -200%;
    z-index: -1;
    height: 600%;
    position: absolute;
  }
`;

const JumboImage = styled(Item)`
  width: 100%;
  align-self: stretch;
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
  @media(max-width: 800px) {
    display: none;
  }
`;

const TextBlock = styled(Item)`
  background-color: #F1F1F1;
  font-size: 1.1rem;
  font-weight: 300;
  padding: 5vh 20vw;
`;

export default withTranslation('homepage')(({ loading, users, t }) => (
  <Fragment>
    <Meta title="Accueil" />
    <Jumbotron>
      <Jumbcontent>
        <h1>{t('headline')}</h1>
        <p>
          {t('headblock')}
        </p>
        <p className="text-center">
          <ButtonLink url="/company/presentation" primary>{t('companyService')}</ButtonLink>
          <ButtonLink url="/individual/presentation" primary>{t('individualService')}</ButtonLink>
        </p>
      </Jumbcontent>
      <JumboImage src={first} />
    </Jumbotron>
    <Rows>
      <TextBlock>
        <p>{t('mission')}</p>
      </TextBlock>
    </Rows>
    <Rows>
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
      </TextBlock>
    </Rows>
    <Rows>
      <TextBlock>
        <ButtonLink url="/presignup">{t('sponsor')}</ButtonLink>
      </TextBlock>
      <TextBlock>
        <ButtonLink url="/hives">{t('discover')}</ButtonLink>
      </TextBlock>
    </Rows>
  </Fragment>
));
