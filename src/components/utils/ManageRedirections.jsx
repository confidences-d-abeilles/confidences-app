import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

const ManageRedirections = () => (
  <Switch>
    <Redirect exact from="/tarif:regex(s)?" to="/prices" />
  </Switch>
);

export default ManageRedirections;
