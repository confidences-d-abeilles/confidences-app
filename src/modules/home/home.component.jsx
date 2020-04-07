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
import first from '../../assets/img/homepage/slidehome01.jpg';
import second from '../../assets/img/homepage/slidehome02.jpg';
import third from '../../assets/img/homepage/slidehome03.jpg';
import fourth from '../../assets/img/homepage/slidehome04.jpg';
import fifth from '../../assets/img/homepage/slidehome05.jpg';
import sixth from '../../assets/img/homepage/slidehome06.jpg';
import seventh from '../../assets/img/homepage/slidehome07.jpg';
import heigth from '../../assets/img/homepage/slidehome08.jpg';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';

import Jumbotron from '../../components/Jumbotron';

import '../../assets/styles/parrains_homepage.css';
import SpecialOfferWidget from '../../components/utils/specialOffer';

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
    <Jumbotron img={[first, second, third, fourth, fifth, sixth, seventh, heigth]}>
      <h1>{t('headline')}</h1>
      <p>
        {t('headblock')}
      </p>
      <SpecialOfferWidget />
      <p className="text-center">
        <ButtonLink to="/company/presentation" primary>{t('companyService')}</ButtonLink>
        <ButtonLink to="/individual/presentation" primary>{t('individualService')}</ButtonLink>
      </p>
    </Jumbotron>
    <Rows>
      <TextBlock>
        <p dangerouslySetInnerHTML={{ __html: t('mission') }} />
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
    <Rows justifyContent="center">
      <Item>
        <ButtonLink to="/hives">{t('discover')}</ButtonLink>
      </Item>
    </Rows>
    <Rows>
      <TextBlock>
        <p dangerouslySetInnerHTML={{ __html: t('ready') }} />
        <ButtonLink to="/presignup">{t('apply')}</ButtonLink>
        <ButtonLink to="/presignup">{t('visit')}</ButtonLink>
      </TextBlock>
    </Rows>
  </Fragment>
));
