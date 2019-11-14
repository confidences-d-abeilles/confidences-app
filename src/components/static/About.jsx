import React from 'react';
import { withTranslation } from 'react-i18next';
import styled from '@emotion/styled';

import Meta from '../utils/Meta';
import CoverPic from '../../assets/img/about.jpg';
import Cover from '../Cover';

const Signature = styled('p')`
  text-align: right;
  font-style: italic;
`;

export default withTranslation('about')(({ t }) => (
  <>
    <Meta title="Histoire" />
    <Cover img={CoverPic}>
      <div className="row mt-4 justify-content-center align-items-center">
        <div className="col">
          <h2>{t('quote')}</h2>
        </div>
        <div className="col">
          <h3>{t('title1')}</h3>
          <p>{t('block1')}</p>
        </div>
      </div>
      <h3>{t('title2')}</h3>
      <p dangerouslySetInnerHTML={{ __html: t('block2') }} />
      <Signature>{t('signature')}</Signature>
    </Cover>
  </>
));
