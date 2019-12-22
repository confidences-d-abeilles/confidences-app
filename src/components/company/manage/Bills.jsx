import React, { Component } from 'react';
import moment from 'moment';
import FontAwesome from 'react-fontawesome';

import request from '../../../services/Net';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class CompanyManageBills extends Component {
  state = {
    user: null,
    bills: [],
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/bill/mine',
      method: 'get',
    }, notification)
      .then((res) => {
        this.setState({
          bills: res,
        });
      });
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col">
            <h2 className="text-center my-4">Mes reçus fiscaux</h2>
            <table className="table">
              <tbody>
              <tr>
                <th>Numéro d’ordre du reçu</th>
                <th>Somme du don</th>
                <th>Date</th>
                <th></th>
              </tr>
              {this.state.bills.map((bill) => (
                  <tr key={bill.id}>
                    <td>{bill.number}</td>
                    <td>{bill.price} €</td>
                    <td>{moment(bill.date)
                      .format('DD/MM/YYYY')}</td>
                    <td>{(bill.file) ?
                      <a href={process.env.REACT_APP_CONTENT_DOMAIN + '/bills/' + bill.file}
                         target="_blank" rel="noopener noreferrer" download><FontAwesome
                        name="cloud-download"/></a> : ''}</td>
                  </tr>
                )
              )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
});
