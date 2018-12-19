import React from 'react';
import { Redirect } from 'react-router-dom';
import { logout } from '../services/AuthService';

export default () => {
  logout();
  return <Redirect to="/" />;
};
