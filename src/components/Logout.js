import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import { logout } from '../services/AuthService';

export default class MyAccount extends Component {
  constructor(props) {
    super(props);
    logout();
    ReactGA.pageview(this.props.location.pathname);
  }

  render() {
    return (
      <Redirect to="/" />
    );
  }
}
