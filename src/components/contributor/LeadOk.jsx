import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta';

export default class ContributorLeadOk extends Component {
  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {

    };
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Ajout validé" />
        <NotificationSystem ref="notif" />
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{ width: '100%' }} />
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <h2 className="text-center my-4">Bonne nouvelle, votre ajout à été validé !</h2>
            <p>
            Retrouvez dès à présent votre nouvel ajout
            dans la liste des entreprises déjà démarchées.
            Ne l’oubliez pas, la conversion est un travail
            de longue haleine ! Il vous faudra relancer
            votre contact / la société pour espérer
            convertir votre prospect en parrain. N’hésitez
            pas à consulter
              {' '}
              <Link to="/contributor/approach">nos conseils</Link>
              {' '}
pour améliorer
            votre taux de conversion.
              <br />
              <br />


            Pour suivre l’évolution de vos démarches,
            rendez-vous sur votre tableau de bord.

            </p>
            <div className="row">
              <div className="col text-center">
                <Link className="btn btn-primary" to="/account">Mon tableau de bord</Link>
              </div>
              <div className="col text-center">
                <Link className="btn btn-primary" to="/contributor/manage/leads">Mes démarches</Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}
