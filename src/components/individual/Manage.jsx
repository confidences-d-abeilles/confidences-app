import React from 'react';
import {
  Link, Redirect, Route, Switch,
} from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { isLoggedIn } from '../../services/AuthService';
import IndividualManageInfos from './manage/Infos';
import Account from './manage/Account';
import Custom from './manage/custom/Custom';
import Bundle from './manage/Bundle';
import Meta from '../utils/Meta';
import NotFound from '../utils/NotFound';

export default () => (
  <div className="container py-4">
    <Meta title="Mon espace personnel" />
    {(!isLoggedIn) ? <Redirect to="/" /> : null}
    <div className="row">
      <div className="col-lg-3 col-sm-12">
        <ul className="list-group">
          <Link to="/individual/manage" className="list-group-item">
            <FontAwesome name="archive" fixedWidth />
            &nbsp;&nbsp;Mon parrainage
          </Link>
          <Link to="/individual/manage/customize" className="list-group-item">
            <FontAwesome name="flask" fixedWidth />
            &nbsp;&nbsp;Mes pots de miel
          </Link>
          <Link to="/individual/manage/infos" className="list-group-item">
            <FontAwesome name="address-card" fixedWidth />
            &nbsp;&nbsp;Mes informations
          </Link>
          <Link to="/individual/manage/account" className="list-group-item">
            <FontAwesome name="gears" fixedWidth />
            &nbsp;&nbsp;Mon compte
          </Link>
          <Link to="/logout" className="list-group-item">
            <FontAwesome name="sign-out" fixedWidth />
            &nbsp;&nbsp;Deconnexion
          </Link>
        </ul>
      </div>
      <div className="col-lg-9 col-sm-12">
        <Switch>
          <Route exact path="/individual/manage" component={Bundle} />
          <Route exact path="/individual/manage/customize" component={Custom} />
          <Route exact path="/individual/manage/infos" component={IndividualManageInfos} />
          <Route exact path="/individual/manage/account" component={Account} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  </div>
);
