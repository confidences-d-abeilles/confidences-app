import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import NotificationSystem from 'react-notification-system';
import Main from '../../assets/img/end_part.jpg';
import Meta from '../utils/Meta';
import request from '../../services/Net';
import Loading from '../utils/Loading';

export default class CompanyEnd extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      namespace: '',
      loading: false,
    };
  }

  componentDidMount() {
    this.setState({ loading: true });
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif)
      .then((res) => {
        this.setState({
          namespace: res.namespace,
          firstname: res.firstname,
          name: res.name,
          bundleState: res.bundles[0].state,
          loading: false,
        });
        // request({
        //   url: '/newsletter/create',
        //   method: 'put',
        //   data: {
        //     firstname: user.firstname,
        //     email: user.email,
        //     id: user.id
        //   }
        // }).then((res) => {
        //   console.log('good');
        // })
        setTimeout(() => { this.setState({ redirecte: true }); }, 8000);
      });
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Félicitations" />
        <NotificationSystem ref="notif" />
        {this.state.redirecte ? <Redirect to="/company/manage" /> : null}
        <div className="row justify-content-center">
          {(this.state.loading)
            ? (
              <div className="col-8 text-center">
                <h3>En attente de confirmation</h3>
                <Loading />
              </div>
            )
            : (
              <div className="col-8">
                {!this.state.bundleState ? <h2 className="text-center my-4">Génial ! Vous avez choisi de rejoindre notre aventure.</h2>
                  : <h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains de ruches.</h2>
          }
                <p className="text-center">
                  <img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
                  <br />
                  {!this.state.bundleState
                    ? <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous souhaite la bienvenue.</h4>
                    : <h4 className="text-center my-4">Toute l'équipe de Confidences  d'Abeilles vous remercie !</h4>
              }
                </p>
                <div className="row justify-content-center">
                  <div className="col text-center">
                    <Link to="/company/manage" className="btn btn-primary btn-lg">{!this.state.bundleState ? 'Découvrir mon espace' : 'Mon compte'}</Link>
                  </div>
                  <div className="col text-center">
                    <Link to={`/parrains/${this.state.namespace}`} className="btn btn-primary btn-lg">Découvrir notre page</Link>
                  </div>
                </div>
              </div>
            )
        }
        </div>
      </div>
    );
  }
}
