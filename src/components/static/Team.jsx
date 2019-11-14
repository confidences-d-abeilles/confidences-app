import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { withTranslation } from 'react-i18next';

import { Rows } from '@cda/flex';

import TeamMember from './TeamMember';

import Gaetan from '../../assets/img/gaetan.jpg';
import Nico from '../../assets/img/nico.jpg';
import Clem from '../../assets/img/clement.jpg';
import Mick from '../../assets/img/mickael.jpg';
import Benoit from '../../assets/img/benoit.jpg';
import Lea from '../../assets/img/lea.jpg';
import Marion from '../../assets/img/marion.jpg';
import Profile from '../../assets/img/profile.png';
import Meta from '../utils/Meta';
import logAnalytics from '../../services/analytics/logAnalytics';

const profilePics = {
  gaetan: Gaetan,
  nico: Nico,
  clem: Clem,
};

export default withTranslation('team')(logAnalytics(({ t }) => (
  <div className="container">
    <Meta title="L'équipe" />
    <h2 className="text-center my-4">Notre équipe</h2>
    <Rows wrap="wrap">
      {Object.keys(profilePics).map(firstname => (
        <TeamMember
          profilePic={profilePics[firstname]}
          name={t(`${firstname}.name`)}
          job={t(`${firstname}.job`)}
          bio={t(`${firstname}.bio`)}
        />
      ))}
    </Rows>
  </div>
)));
