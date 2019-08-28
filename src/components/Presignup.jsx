import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ButtonLink from '@cda/button-link';
import Meta from './utils/Meta';
import { isLoggedIn } from '../services/AuthService';

export default class Presignup extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    if (isLoggedIn(true)) {
      this.setState({ redirect: 'account' });
    }
  }

  render() {
    const { redirect } = this.state;
    return (
      <div className="container">
        {redirect && <Redirect to={`/${redirect}`} />}
        <Meta title="Créer un compte" />
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <h2 className="text-center my-5">Je suis ...</h2>
            <p className="text-center">
              <ButtonLink to="/signup/company" primary>Une entreprise</ButtonLink>
              <ButtonLink to="/signup/individual" data-cy="individual" primary>Un particulier</ButtonLink>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
