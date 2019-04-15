import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel';
import { handleChange } from '../services/FormService'
import { login, isLoggedIn } from '../services/AuthService'
import request from '../services/Net.js'
import Meta from './utils/Meta';
import { withNotification } from '../services/withNotification';
import { Button } from './utils/Button';

export default withNotification(class Signup extends Component {
  constructor(props) {
    super(props);
    const { match : { params } } = props;
    this.state = {
      sexe_m: '',
      firstname: '',
      name: '',
      email: '',
      phone: '',
      school: '',
      password: '',
      confirmation: '',
      user_type: this.getType(params.type),
      message: '',
      redirect: false,
    };
  }

  componentDidMount() {
    if (isLoggedIn(true)) {
      this.setState({ redirect : 'account' })
    }
  }

  getType(type) {
    switch (type) {
      case 'individual':
        return 1;
      case 'company':
        return 2;
      case 'contributor':
        return 3;
      default:
        return 0;
    }
  }

  register = (e) => {
    e.preventDefault();
    const {
      password,
      confirmation,
      sexe_m,
      firstname,
      name,
      email,
      phone,
      school,
      user_type,
    } = this.state;
    const { notification } = this.props;
    if (password !== confirmation) {
      notification.addNotification({
        message: 'Le mot de passe et sa confirmation ne sont pas identiques',
        level: 'error',
      });
    } else {
      request({
        method: 'post',
        url: '/user',
        data: {
          sexe_m,
          firstname,
          name,
          email,
          phone,
          school,
          password,
          user_type,
        },
      }, notification)
        .then(() => {
          ReactPixel.track('Lead', {});
          request({
            url: '/authenticate',
            method: 'post',
            data: {
              email,
              password,
            },
          }, notification).then(({ id, token, user_type: uT }) => {
            login(id, token, uT);
            if (uT === 2) {
              this.setState({
                redirect: 'company/identity',
              });
            } else if (uT === 1) {
              this.setState({
                redirect: 'individual/address',
              });
            } else if (uT === 3) {
              this.setState({
                redirect: 'contributor/address',
              });
            }
          });
        });
    }
  };

  render() {
    const {
      user_type: userType,
      redirect,
      message,
      sexe_m,
    } = this.state;
    const linkInfoPresent = () => (userType === 1) && (
      <Link to="/present">
        <button type="button" className="btn btn-link btn-sm">
          Comment offrir un parrainage en 6 étapes ?
        </button>
      </Link>
    );

    return (
      <div className="container py-4">
        <Meta title="Inscription"/>
        {redirect && <Redirect to={`/${redirect}`} />}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '25%' }} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <form className="text-center">
              <h2 className="text-center my-4">Créer votre compte</h2>
              {message && <p className="alert alert-danger">{message}</p>}
              <div className="form-group d-flex">
                <label className="radio-inline form-check-label">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sexe_m"
                    value="1"
                    onChange={handleChange.bind(this)}
                    checked={sexe_m === '1'}
                    autoComplete="gender"
                    data-cy="male"
                  />
                  &nbsp;M *
                </label>
                <label className="radio-inline form-check-label ml-4">
                  <input
                    type="radio"
                    className="form-check-input"
                    name="sexe_m"
                    value="0"
                    onChange={handleChange.bind(this)}
                    checked={this.state.sexe_m === '0'}
                    autoComplete="sex"
                  />
                  &nbsp;Mme *
                </label>
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="firstname"
                  className="form-control"
                  placeholder="Prénom *"
                  onChange={handleChange.bind(this)}
                  autoComplete="given-name"
                  data-cy="firstName"
                />
              </div>
              <div className="form-group">
                <input type="text" name="name" className="form-control" placeholder="Nom *" onChange={handleChange.bind(this)} autoComplete="lastName" data-cy="lastName" />
              </div>
              <div className="form-group">
                <input type="email" name="email" className="form-control" placeholder="Adresse email *" onChange={handleChange.bind(this)} autoComplete="email" data-cy="email" />
              </div>
              <div className="form-group">
                <input
                  type={(userType === 3)?'text':'tel'}
                  name={(userType === 3)?'school':'phone'}
                  className="form-control"
                  placeholder={(userType === 3)?'Ecole ou établissement':'Numéro de telephone *'}
                  onChange={handleChange.bind(this)}
                  autoComplete={(userType === 3)?'organization':'tel'}
                  data-cy="phone"
                />
              </div>
              <div className="form-group">
                <input type="password" name="password" className="form-control" placeholder="Mot de passe *" onChange={handleChange.bind(this)} autoComplete="new-password" data-cy="password" />
              </div>
              <div className="form-group">
                <input type="password" name="confirmation" className="form-control" placeholder="Confirmation du mot de passe *" onChange={handleChange.bind(this)} data-cy="confirmation" />
              </div>
              <Button type="submit" onClick={this.register}>Valider</Button>
            </form>
            <p className="mt-3 text-center">
              Vous avez déjà un compte ? <Link to="/login">Connectez vous</Link><br />
              {linkInfoPresent()}
            </p>
          </div>
        </div>
      </div>
    );
  }
});
