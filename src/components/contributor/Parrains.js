import React, { Component } from 'react'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import { handleChange } from '../../services/FormService'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class ContributorParrains extends Component {

  constructor(props) {
    super(props);
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      leads : []
    }
  }

  componentDidMount() {
    request({
      url: '/lead',
      method: 'get'
    }, this.refs.notif).then((res) => {
      this.setState({ leads : res })
    });
  }

  render () {
    return (
      <div className="container">
        <Meta title="Les parrains"/>
        <NotificationSystem ref="notif" />
        <h2 className="text-center my-2">Liste des entreprises déjà démarchées</h2>
        <div className="row my-4 justify-content-center">
          <div className="col-lg-6">
            <input type="text" className="form-control" onChange={handleChange.bind(this)} name="filter" placeholder="Rechercher une raison sociale ou un numéro de SIRET" />
          </div>
        </div>
        <table className="table">
          <tbody>
            <tr><th>Raison sociale</th><th>Numéro de Siret</th></tr>
            {this.state.leads.map((lead) => {
              if (this.state.filter) {
                if (lead.siret.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0 || lead.company_name.toLowerCase().indexOf(this.state.filter.toLowerCase()) >= 0) {
                  return (
                    <tr key={lead.id}><td>{lead.company_name}</td><td>{lead.siret}</td></tr>
                  )
                } else {
                  return null;
                }
              } else {
                return (
                  <tr key={lead.id}><td>{lead.company_name}</td><td>{lead.siret}</td></tr>
                )
              }
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
