import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system';
import { handleTick } from '../../services/FormService';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class ContributorCheckout extends Component {

  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      contracts : [],
      signed : false
    }
  }

  componentDidMount() {
    request({
      url : '/contract',
      method: 'get'
    }, this.refs.notif).then((res) => {
      this.setState({ contracts : res });
    })
  }

  proceed() {
    if (!this.state.signed) {
      this.refs.notif.addNotification({
        message : 'Merci d\'accepter les termes du contrats',
        level : 'warning'
      });
    } else {
      request({
        url : '/contract',
        method : 'put',
        data : {
          signed : true
        }
      }, this.refs.notif).then((res) => {
        this.setState({ redirect : true });
      }).catch((err) => {})
    }
  }

    render () {
        return (
      <div className="container py-4">
        <Meta title="Signature du contrat"/>
        <NotificationSystem ref="notif" />
        {(this.state.redirect)?<Redirect to="/contributor/final" />:null}
        <div className="row justify-content-center">
          <div className="col">
            <div className="progress">
              <div className="progress-bar" role="progressbar" style={{width: '100%'}}></div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            <h2 className="text-center my-4">Validation et signature électronique du contrat</h2>
            {this.state.contracts.map((contract) => {
              return (
                <object data={process.env.REACT_APP_CONTENT_DOMAIN+"/"+contract.filename} type="application/pdf" style={{ width: '100%', height: '500px' }}>

                </object>
              )
            })}
            <p>
              <input type="checkbox" name="signed" onChange={handleTick.bind(this)} checked={this.state.signed} /> En cochant cette case, je confirme avoir pris connaissance du présent contrat et en accepte les conditions.
            </p>
            <p className="text-center">
              <button onClick={this.proceed.bind(this)} className="btn btn-primary">Signer le contrat</button>
            </p>
          </div>
        </div>
      </div>
        );
    }
}
