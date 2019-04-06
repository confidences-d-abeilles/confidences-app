import React, { Component } from 'react';
import moment from 'moment';

import request from '../../../services/Net';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class ContributorManageApproaches extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      leads: [],
    };
  }

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      res.leads.map((lead, index, initial_array) => {
        request({
          url: `/getUser/${lead.siret}`,
          method: 'GET',
        }).then((res) => {
          initial_array[index].commission = '';
          initial_array[index].hive = '0';
          initial_array[index].status = 'Démarchée';
          if (res && res.bundles[0]) {
            initial_array[index].hive = res.bundles[0] ? res.bundles[0].hives : '0';
            if (res.bundles[0]) {
              if (res.bundles[0].state === 0) {
                initial_array[index].status = 'Inscrite';
              } else if (res.bundles[0].state === 1) {
                initial_array[index].status = 'Marraine';
              } else if (res.bundles[0].state === 2) {
                initial_array[index].status = 'Terminée';
                initial_array[index].commission = `${100 * res.bundles[0].state}€`;
              }
            }
          }
          this.setState({ leads: initial_array });
        });
        return null;
      });
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="row">
        {(this.state.loading) ? 'Chargement en cours...'
          : (
            <div className="col-12">
              <table className="table">
                <tbody>
                  <tr>
                    <th>Nom de l'entreprise</th>
                    <th>Statut</th>
                    <th>Date</th>
                    <th>Ruches parrainées</th>
                    <th>Commission perçue</th>
                  </tr>
                  {this.state.leads.map(lead => (
                    <tr>
                      <td>{lead.company_name}</td>
                      <td>{lead.status}</td>
                      <td>{moment(lead.createdAt).format('DD/MM/YYYY')}</td>
                      <td>{lead.hive}</td>
                      <td>{lead.commission}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
        }
      </div>
    );
  }
});
