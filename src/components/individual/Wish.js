import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import { handleChange } from '../../services/FormService';
import { isLoggedIn } from '../../services/AuthService';
import request from '../../services/Net';
import Loading from '../utils/Loading';
import Meta from '../utils/Meta';

export default class IndividualWish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bees: '10000',
      loading: false,
    };
    ReactGA.pageview(this.props.location.pathname);
  }

  selectBundle(e) {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    request({
      url: '/bundle',
      method: 'post',
      data: {
        bees: this.state.bees,
      },
    }, this.refs.notif)
      .then((res) => {
        this.setState({ redirect: true });
      });
  }

  getPrice(bees) {
    if (bees === '10000') {
      return (85);
    } if (bees === '20000') {
      return (160);
    } if (bees === '30000') {
      return (230);
    } if (bees === '40000') {
      return (295);
    } if (bees === '50000') {
      return (350);
    }
    return (0);
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Choix du parrainage" />
        <NotificationSystem ref="notif" />
        {(isLoggedIn()) ? null : <Redirect to="/" />}
        {(this.state.redirect)
          ? <Redirect to="/individual/checkout" />
          : null}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '75%' }} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {(this.state.loading)
            ? <Loading />
            : (
              <form className="col-6">
                <p className="text-center lead my-4">
              Je décide de parrainer

                </p>
                <div className="form-group">
                  <select name="bees" className="form-control" onChange={handleChange.bind(this)}>
                    <option value="10000">10 000 abeilles</option>
                    <option value="20000">20 000 abeilles</option>
                    <option value="30000">30 000 abeilles</option>
                    <option value="40000">40 000 abeilles</option>
                    <option value="50000">50 000 abeilles, soit une ruche complète</option>
                  </select>
                </div>
                <p className="lead text-center">
              soit
                  {' '}
                  {this.getPrice(this.state.bees)}
                  {' '}
€ / an

                </p>
                <ul>
                  <li>
Ce sont
                    {this.state.bees}
                    {' '}
abeilles de plus qui viendront renforcer la population du rucher et participer à la préservation de la biodiversité.
                  </li>
                  <br />
                  <li>Je choisis la future étiquette de mes pots de miel et je la personnalise.</li>
                  <br />
                  <li>
Je recois
                    {this.state.bees * 8 / 10000}
                    {' '}
pots de miel (250g) produits par mes abeilles.
                  </li>
                </ul>
                <p className="text-center">
                  <button onClick={this.selectBundle.bind(this)} className="btn btn-primary">Continuer</button>
                </p>
              </form>
            )}
        </div>
      </div>
    );
  }
}
