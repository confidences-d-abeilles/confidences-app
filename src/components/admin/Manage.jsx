import React from 'react';
import {
  faIdCard, faArchive, faFolder, faTag, faEnvelope, faShoppingCart, faTicketAlt, faComment, faTools,
} from '@fortawesome/free-solid-svg-icons';
import {
  Route,
  Switch,
} from 'react-router-dom';
import Sidebar from '@cda/sidebar';
import { Rows, Item } from '@cda/flex';

import AdminManageUser from './manage/Users';
import AdminManageUserId from './manage/users/Fiche';
import AdminManageFaq from './manage/Faq';
import AdminManageMails from './manage/Mails';
import AdminManageHives from '../../modules/adminManageHives/hives.connector';
import AdminManageBundles from './manage/Bundles';
import AdminManageBundle from './manage/bundle/MainScreen';
import AdminManageBundleId from './manage/bundle/Uniq';
import AdminManageServer from './manage/Server';
import AdminManageHome from './manage/Home';
import Products from './manage/Products';
import Coupons from './manage/Coupons';
import AdminManageLabel from './manage/Label';

const items = [
  { icon: faIdCard, link: '/admin/manage/user', label: 'Utilisateurs' },
  { icon: faArchive, link: '/admin/manage/hive', label: 'Ruches' },
  { icon: faFolder, link: '/admin/manage/bundles', label: 'Parrainages (legacy)' },
  { icon: faFolder, link: '/admin/manage/bundle', label: 'Parrainages' },
  { icon: faTag, link: '/admin/manage/label', label: 'Etiquettes' },
  { icon: faEnvelope, link: '/admin/manage/mails', label: 'Emailing' },
  { icon: faShoppingCart, link: '/admin/manage/products', label: 'Produits' },
  { icon: faTicketAlt, link: '/admin/manage/coupons', label: 'Coupons' },
  { icon: faComment, link: '/admin/manage/faq', label: 'FAQ' },
  { icon: faTools, link: '/admin/manage/server', label: 'Espace technique' },
];


export default () => (
  <Rows alignItems="flex-start">
    <Item flex={1} alignSelf="top" noGutter>
      <Sidebar items={items} />
    </Item>
    <Item flex={40} alignSelf="top" noGutter>
      <Route exact path="/admin/manage" component={AdminManageHome} />
      <Route exact path="/admin/manage/user" component={AdminManageUser} />
      <Route exact path="/admin/manage/user/:id" component={AdminManageUserId} />
      <Route exact path="/admin/manage/mails" component={AdminManageMails} />
      <Route path="/admin/manage/hive" component={AdminManageHives} />
      <Route exact path="/admin/manage/bundles" component={AdminManageBundles} />
      <Route exact path="/admin/manage/bundle" component={AdminManageBundle} />
      <Route exact path="/admin/manage/Label" component={AdminManageLabel} />
      <Switch>
        <Route exact path="/admin/manage/bundle/unpaid" component={AdminManageBundle} />
        <Route exact path="/admin/manage/bundle/pending" component={AdminManageBundle} />
        <Route exact path="/admin/manage/bundle/paid" component={AdminManageBundle} />
        <Route exact path="/admin/manage/bundle/ok" component={AdminManageBundle} />
        <Route exact path="/admin/manage/bundle/:id" component={AdminManageBundleId} />
      </Switch>
      <Route exact path="/admin/manage/faq" component={AdminManageFaq} />
      <Route exact path="/admin/manage/products" component={Products} />
      <Route exact path="/admin/manage/coupons" component={Coupons} />
      <Route exact path="/admin/manage/server" component={AdminManageServer} />
    </Item>
  </Rows>
);
