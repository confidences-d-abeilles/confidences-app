import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import { handleChange } from '../services/FormService';
import { login, isLoggedIn } from '../services/AuthService';
import Loading from './utils/Loading';
import request from '../services/Net';
import Meta from './utils/Meta';
import { ButtonStyle } from './utils/Button';

export default class Signup extends Component {
  state = {
    email: '',
    password: '',
    redirect: false,
    loading: false,
  }

  componentDidMount() {
    const { location: { pathname } } = this.props;
    this.direction = pathname.substr(6);
    if (this.direction.length === 0) {
      this.direction = '/account';
    }
    if (isLoggedIn(true)) {
      this.setState({ redirect : true });
    }
  }

  login(e) {
    e.preventDefault();
    const { email, password } = this.state;
    if (!email || !password) {
      this.refs.notificationSystem.addNotification({
        message: "Merci de renseigner tous les champs",
        level: 'warning',
      });
    } else {
      this.setState({
        loading: true,
      });

      request({
        url: '/authenticate',
        method: 'POST',
        data: {
          email,
          password,
        }
      }, this.refs.notificationSystem).then((res) => {
        login(res.id, res.token, res.user_type);
        this.setState({
          redirect: true,
        });
      }).catch(() => {
        this.setState({
          loading: false,
        });
      });
    }
  }

  render() {
    const { loading, redirect } = this.state;
    return (
      <div className="container py-4">
        <Meta title="Connexion"/>
        <NotificationSystem ref="notificationSystem" />
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <h2 className="text-center my-4">Connexion</h2>
            {loading
              ? <Loading />
              : (
                <form className="text-center">
                  <div className="form-group">
                    <input type="email" name="email" className="form-control" placeholder="Adresse email" onChange={handleChange.bind(this)} autoComplete="email" />
                  </div>
                  <div className="form-group">
                    <input type="password" name="password" className="form-control" placeholder="Mot de passe" onChange={handleChange.bind(this)} />
                  </div>
                  <ButtonStyle type="submit" onClick={this.login.bind(this)}>Se connecter</ButtonStyle><br />
                  <Link to="/forgot">Mot de passe oublié ?</Link>
                  <br />
                  <Link to="/presignup">Je n'ai pas encore de compte</Link>
                  <br />
                </form>
              )}
          </div>
        </div>
        {redirect
          ? <Redirect to={this.direction} />
          : null}
      </div>
    );
  }
}
