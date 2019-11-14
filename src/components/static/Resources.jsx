import React from 'react';
import { withTranslation } from 'react-i18next';

import Banner from '../../assets/img/resources.jpg';
import Meta from '../utils/Meta';
import Cover from '../Cover';

export default withTranslation('resources')(({ t }) => (
  <div>
    <Meta title={t('title')} />
    <Cover img={Banner}>
      <h2 className="text-center my-5">{t('title')}</h2>
      <p dangerouslySetInnerHTML={{ __html: t('block1') }} />
    </Cover>
  </div>
));
