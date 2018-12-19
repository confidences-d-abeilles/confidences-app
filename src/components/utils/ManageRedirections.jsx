import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

export default () => (
  <Switch>
    <Redirect exact from="/tarif:regex(s)?" to="/prices" />
  </Switch>
);
