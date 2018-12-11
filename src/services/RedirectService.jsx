
import React from 'react';
import { Redirect } from 'react-router-dom';

const redirect = (route) => {
  return <Redirect to={route} />;
}

export default redirect;
