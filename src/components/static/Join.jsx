import React from 'react';
import { withTranslation } from 'react-i18next';

import ButtonLink from '@cda/button-link';

import Banner from '../../assets/img/join.jpg';
import Meta from '../utils/Meta';
import Cover from '../Cover';

export default withTranslation('join')(({ t }) => (
  <div>
    <Meta title="Nos valeurs" />
    <Cover img={Banner}>
      <h2 className="text-center my-5">{t('title')}</h2>
      <h3>{t('subtitle1')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('block1') }} />
      <h3>{t('subtitle2')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('block2') }} />
      <p style={{ textAlign: 'center' }}><ButtonLink to="/signup/individual">{t('cta')}</ButtonLink></p>
    </Cover>
  </div>
));
