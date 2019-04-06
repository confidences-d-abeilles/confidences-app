import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import Meta from './utils/Meta';
import { isLoggedIn } from '../services/AuthService';
import { ButtonLink } from './utils/Button';

export default class Presignup extends Component {
  state = {
    redirect: false,
  }

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
              <ButtonLink to="/signup/company" primary label="Une Entreprise" />
              <ButtonLink to="/signup/individual" data-cy="individual" primary label="Un Particulier" />
            </p>
          </div>
        </div>
      </div>
    );
  }
}
