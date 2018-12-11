import ReactGA from 'react-ga';
import React, { Component } from 'react';
import { Redirect } from 'react-router';
import PropTypes from 'prop-types';
import { client } from './Net';

export function login(id, token, userType) {
  localStorage.setItem('id', id);
  localStorage.setItem('token', token);
  localStorage.setItem('userType', userType);
  client.defaults.headers.common.Authorization = `Bearer ${token}`;
  if (userType === 4) {
    ReactGA.ga('set', 'dimension1', 1);
  }
  return true;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('id');
  localStorage.removeItem('user_type');
  ReactGA.ga('set', 'dimension1', 0);
}

export function isLoggedIn() {
  const token = localStorage.getItem('token');
  if (token) {
    client.defaults.headers.common.Authorization = `Bearer ${token}`;
    return true;
  }
  return false;
}

export function getToken() {
  return localStorage.getItem('token');
}

export function getId() {
  return localStorage.getItem('id');
}

export function getUserType() {
  return localStorage.getItem('user_type');
}

export const individualOnly = ({ location: { pathname } }) => {
  const userType = getUserType();
  if (userType === null) {
    return (<Redirect to={`/login${pathname}`} />);
  } if (userType !== '1') {
    return (<Redirect to="/account" />);
  }
  return null;
};


individualOnly.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const contributorOnly = ({ location: { pathname } }) => {
  const userType = getUserType();
  if (userType === null) {
    return (<Redirect to={`/login${pathname}`} />);
  } if (userType !== '3') {
    return (<Redirect to="/account" />);
  }
  return null;
};

contributorOnly.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export const companyOnly = ({ location: { pathname } }) => {
  const userType = getUserType();
  if (userType === null) {
    return (<Redirect to={`/login${pathname}`} />);
  } if (userType !== '2') {
    return (<Redirect to="/account" />);
  }
  return null;
};

companyOnly.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export class adminOnly extends Component {
  constructor(props) {
    super(props);
    this.state = { denied: false };
  }

  componentDidMount() {
    if (localStorage.getItem('user_type') < '4') {
      this.setState({ denied: true });
    }
  }

  render() {
    const { denied } = this.state;
    return (<div>{denied && <Redirect to="/" />}</div>);
  }
}
