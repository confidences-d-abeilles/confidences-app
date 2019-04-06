import React, { Component } from 'react';

import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import Meta from '../utils/Meta';
import { withNotification } from '../../services/withNotification';

export default withNotification(class ContributorParrains extends Component {
  state = {
    leads : []
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/lead',
      method: 'get'
    }, notification).then((res) => {
      this.setState({ leads : res })
    });
  }

  render () {
    return (
      <div className="container">
        <Meta title="Les parrains"/>
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
});
