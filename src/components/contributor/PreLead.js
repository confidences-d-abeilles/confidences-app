import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { handleChange } from '../../services/FormService';
import NotificationSystem from 'react-notification-system';

import Meta from '../utils/Meta'

export default class ContributorPreLead extends Component {

  constructor(props) {
    super(props);
    
    this.state = {
      redirect : false,
      how: '1'
    }
  }

  next() {
    if (this.state.how === '1') {
      this.setState({redirect:true})
    }
  }


  render () {
    return (
      <div className="container py-4">
        <Meta title="Ajouter une démarche"/>
        <NotificationSystem ref="notif" />
        {(this.state.redirect)?
        <Redirect to="/contributor/lead" />
        :null}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '33%'}}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-6">
            <form className="text-center">
              <h2 className="text-center my-4">Ajouter une entreprise</h2>
              <div className="form-group">
                <label className="form-check-label">
                    <input className="form-check-input" type="radio" name="how" value="1" checked={(this.state.how === '1')?true:false} onChange={handleChange.bind(this)} />
                  J'ai contacté l'entreprise par mes propres moyens
                </label>
              </div>
              <div className="form-group">
                <label className="form-check-label">
                  <input className="form-check-input" type="radio" name="how" value="2" checked={(this.state.how === '2')?true:false} disabled onChange={handleChange.bind(this)}/>
                  Je contacte l'entreprise via la plateforme (non disponible aujourd'hui)
                </label>
              </div>
              <input type="submit" className="btn btn-primary" value="Continuer" onClick={this.next.bind(this)} />
            </form>
          </div>
        </div>

      </div>
    );
  }
}
