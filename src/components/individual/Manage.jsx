import React from 'react';
import {
  Redirect, Route, Switch,
} from 'react-router-dom';
import { faFolder } from '@fortawesome/free-solid-svg-icons';

import Sidebar from '@cda/sidebar';
import { Rows, Item } from '@cda/flex';

import { isLoggedIn } from '../../services/AuthService';
import IndividualManageInfos from './manage/Infos';
import Account from './manage/Account';
import Custom from './manage/custom/Custom';
import Bundle from './manage/Bundle';
import Meta from '../utils/Meta';
import NotFound from '../utils/NotFound';

const menu = [
  { label: 'Mon parrainage', icon: faFolder, link: '/individual/manage' },
  { label: 'Mes pots de miel', icon: faFolder, link: '/individual/manage/customize' },
  { label: 'Mes informations', icon: faFolder, link: '/individual/manage/infos' },
  { label: 'Mon compte', icon: faFolder, link: '/individual/manage/account' },
  { label: 'Deconnexion', icon: faFolder, link: '/logout' },
];

export default () => (
  <Rows>
    <Meta title="Mon espace personnel" />
    {(!isLoggedIn) ? <Redirect to="/" /> : null}
    <Item>
      <Sidebar items={menu} compact={false} />
    </Item>
    <Item>
      <Switch>
        <Route exact path="/individual/manage" component={Bundle} />
        <Route exact path="/individual/manage/customize" component={Custom} />
        <Route exact path="/individual/manage/infos" component={IndividualManageInfos} />
        <Route exact path="/individual/manage/account" component={Account} />
        <Route component={NotFound} />
      </Switch>
    </Item>
  </Rows>
);
