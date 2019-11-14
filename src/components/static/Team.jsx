import React from 'react';
import { withTranslation } from 'react-i18next';

import { Rows } from '@cda/flex';

import TeamMember from './TeamMember';

import Gaetan from '../../assets/img/gaetan.jpg';
import Nico from '../../assets/img/nico.jpg';
import Clem from '../../assets/img/clement.jpg';
import Mick from '../../assets/img/mickael.jpg';
import Lea from '../../assets/img/lea.jpg';
import Marion from '../../assets/img/marion.jpg';
import Laure from '../../assets/img/laure.jpg';
import Meta from '../utils/Meta';
import logAnalytics from '../../services/analytics/logAnalytics';

const profilePics = {
  gaetan: Gaetan,
  nico: Nico,
  clem: Clem,
  mick: Mick,
  lea: Lea,
  marion: Marion,
  laure: Laure,
};

export default withTranslation('team')(logAnalytics(({ t }) => (
  <>
    <Meta title="L'équipe" />
    <h2 className="text-center my-4">Notre équipe</h2>
    <Rows wrap="wrap" justifyContent="center">
      {Object.keys(profilePics).map(firstname => (
        <TeamMember
          profilePic={profilePics[firstname]}
          name={t(`${firstname}.name`)}
          job={t(`${firstname}.job`)}
          bio={t(`${firstname}.bio`)}
          linkedIn={t(`${firstname}.linkedIn`)}
          facebook={t(`${firstname}.facebook`)}
          twitter={t(`${firstname}.twitter`)}
          medium={t(`${firstname}.medium`)}
          mail={t(`${firstname}.mail`)}
          behance={t(`${firstname}.behance`)}
          website={t(`${firstname}.website`)}
          instagram={t(`${firstname}.instagram`)}
        />
      ))}
    </Rows>
  </>
)));
