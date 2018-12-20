import React from 'react';
import FontAwesome from 'react-fontawesome';
import {
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import AdminManageUsers from './manage/Users';
import AdminManageUser from './manage/users/MainScreen';
import AdminManageUserId from './manage/users/Fiche';
import AdminManageFaq from './manage/Faq';
import AdminManageMails from './manage/Mails';
import AdminManageHives from './manage/Hives';
import AdminManageBundles from './manage/Bundles';
import AdminManageBundle from './manage/bundle/MainScreen';
import AdminManageBundleId from './manage/bundle/Uniq';
import AdminManageServer from './manage/Server';
import AdminManageHome from './manage/Home';
import Products from './manage/Products';
import Coupons from './manage/Coupons';


export default () => (
  <div className="container-fluid py-4">
    <div className="row justify-content-center">
      <div className="col-lg-2 col-md-6">
        <ul className="list-group">
          <li className="list-group-item active">Gestion clients</li>
          <Link to="/admin/manage/user" className="list-group-item">
            <FontAwesome name="user" fixedWidth />
            &nbsp;&nbsp;
            Utilisateurs
          </Link>
          <Link to="/admin/manage/users" className="list-group-item">
            <FontAwesome name="user" fixedWidth />
            &nbsp;&nbsp;
            Utilisateurs
          </Link>
          <Link to="/admin/manage/hives" className="list-group-item">
            <FontAwesome name="archive" fixedWidth />
            &nbsp;&nbsp;
            Ruches
          </Link>
          <Link to="/admin/manage/bundles" className="list-group-item">
            <FontAwesome name="folder" fixedWidth />
            &nbsp;&nbsp;
            Parrainages
          </Link>
          <Link to="/admin/manage/bundle" className="list-group-item">
            <FontAwesome name="folder" fixedWidth />
            &nbsp;&nbsp;
            Parrainages
          </Link>
          <Link to="/admin/manage/mails" className="list-group-item">
            <FontAwesome name="envelope" fixedWidth />
            &nbsp;&nbsp;
            Emailing
          </Link>
          <li className="list-group-item active">Gestion du contenu</li>
          <Link to="/admin/manage/products" className="list-group-item">
            <FontAwesome name="shopping-basket" fixedWidth />
            &nbsp;&nbsp;
            Produits
          </Link>
          <Link to="/admin/manage/coupons" className="list-group-item">
            <FontAwesome name="tag" fixedWidth />
            &nbsp;&nbsp;
            Coupons
          </Link>
          <Link to="/admin/manage/faq" className="list-group-item">
            <FontAwesome name="comment" fixedWidth />
            &nbsp;&nbsp;
            FAQ
          </Link>
          <li className="list-group-item active">Administration plateforme</li>
          <Link to="/admin/manage/server" className="list-group-item">
            <FontAwesome name="wrench" fixedWidth />
            &nbsp;&nbsp;
            Espace technique
          </Link>
        </ul>
      </div>
      <div className="col-lg-10 col-md-12">
        <div className="row">
          <div className="col-12">
            <Route exact path="/admin/manage" component={AdminManageHome} />
            <Route exact path="/admin/manage/user" component={AdminManageUser} />
            <Route exact path="/admin/manage/user/:id" component={AdminManageUserId} />
            <Route exact path="/admin/manage/users" component={AdminManageUsers} />
            <Route exact path="/admin/manage/mails" component={AdminManageMails} />
            <Route exact path="/admin/manage/hives" component={AdminManageHives} />
            <Route exact path="/admin/manage/bundles" component={AdminManageBundles} />
            <Route exact path="/admin/manage/bundle" component={AdminManageBundle} />
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
          </div>
        </div>
      </div>
    </div>
  </div>
);
