import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';

import { handleChange } from '../services/FormService';
import request from '../services/Net';
import Meta from './utils/Meta';

export default class RequestLabel extends Component {
  state = {
    name: '',
    firstname: '',
    society: '',
    email: '',
    feedback: '',
    attachment: '',
    redirect: false,
    success: false,
  }

  componentDidMount() {
    request({
      url: '/user/me',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        name: res.name,
        firstname: res.firstname,
        society: res.company_name,
        email: res.email,
        userState: res.user_type,
      });
    });
  }

  sendMail(e) {
    e.preventDefault();
    const {
      name,
      firstname,
      society,
      userState,
      email,
      feedback,
    } = this.state;
    const data = new FormData();
    data.append('name', name);
    data.append('firstname', firstname);
    data.append('society', userState === 2 ? society : null);
    data.append('email', email);
    data.append('feedback', feedback);
    if (document.getElementById('attachment').files[0]) {
      data.append('attachment', document.getElementById('attachment').files[0]);
    }
    request({
      url: '/contact/label',
      method: 'post',
      data: data,
    }, this.refs.notif).then(() => {
      this.setState({
        redirect: true,
      });
      setTimeout(() => { this.setState({ redirecte: true }); }, 5000);
    });
  }


  render() {
    const {
      redirect,
      name,
      firstname,
      society,
      email,
      attachment,
      feedback,
      success,
    } = this.state;
    return (
      <div className="container">
        <Meta title="Label" />
        <NotificationSystem ref="notif" />
        <div className="row justify-content-center">
          {!redirect ? (
            <div className="col-lg-6 col-md-10 col-sm-12">
              <h5 className="text-center my-4">Formulaire de contact</h5>
              <p className="align-middle">
                Ce formulaire vous permet de contacter
                Marine du Peloux, graphiste, qui pourra
                vous aider à réaliser votre étiquette
                personnalisée. Soumettez lui votre
                demande en l’accompagnant d’un brief ou
                            tout autre fichier que vous jugeriez utile.<br />
                <i>Ce service n’est pas inclus dans l’offre de
                parrainage, attendez-vous donc à recevoir un
                            devis.</i> </p>

              <form onSubmit={this.sendMail.bind(this)} className="mt-4 text-center">
                <div className="form-group">
                  <input type="text" value={name} onChange={handleChange.bind(this)} placeholder="Votre nom *" name="name" className="form-control" />
                </div>
                <div className="form-group">
                  <input type="text" value={firstname} onChange={handleChange.bind(this)} placeholder="Votre prenom *" name="firstname" className="form-control" />
                </div>
                {this.userState === 2 ?
                  <div className="form-group">
                    <input type="text" value={society} onChange={handleChange.bind(this)} placeholder="Nom de l'entreprise *" name="society" className="form-control" />
                  </div>
                  : null}
                <div className="form-group">
                  <input type="text" value={email} onChange={handleChange.bind(this)} placeholder="Votre email *" name="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label>Joindre un fichier (png, jpg, pdf, indd, ai)</label>
                  <label htmlFor="attachment" className={(attachment) ? 'active-upload' : 'upload'} style={{ position: 'relative' }}>
                    <input type="file" className="form-control" id="attachment" onChange={() => { this.setState({ attachment: document.getElementById("attachment").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001' }} />
                    Glissez votre fichier ici ou cliquez pour en sélectionner un parmi vos fichiers. (Taille limitée à 5Mo.)<br />
                    {(attachment) ? 'Sélectionné : ' + attachment : "Aucun fichier sélectionné"}
                  </label>
                </div>

                <div className="form-group">
                  <textarea value={feedback} rows="10" onChange={handleChange.bind(this)} placeholder="Votre demande *" name="feedback" className="form-control" />
                </div>
                {success
                  && <p className="alert alert-success">Votre demande a été envoyée avec succès</p>}
                <button type="submit" className="btn btn-primary btn-sm">Envoyer</button>
              </form>
            </div>
          ) : (
              <div className="col-lg-6 col-md-10 col-sm-12">
                <p className="text-center align-middle">
                  <h3 className="text-center my-4">
                    Votre demande a bien été envoyée &nbsp;
                    <img
                      src={require('../assets/img/smiley/happy.svg')}
                      alt="smiley happy"
                      style={{ height: '1em' }}
                    />
                    <br />
                  </h3>
                </p>
                Vous allez être redirigé(e) sur la page de personnalisation.
        {redirect && <Redirect to="/individual/manage/customize" />}
              </div>
            )}
        </div>
      </div>
    )

  }

}
