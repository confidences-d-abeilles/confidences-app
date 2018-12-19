import React from 'react';
import { Redirect } from 'react-router-dom';
import { isLoggedIn, getUserType } from '../services/AuthService';

export default () => (
  <div>
    {!isLoggedIn() && <Redirect to="/login" />}
    {getUserType() === '1' && <Redirect to="/individual/manage" />}
    {getUserType() === '2' && <Redirect to="/company/manage" />}
    {getUserType() === '3' && <Redirect to="/contributor/manage" />}
    {getUserType() === '4' && <Redirect to="/admin/manage" />}
    {getUserType() === '5' && <Redirect to="/admin/manage" />}
  </div>
);
