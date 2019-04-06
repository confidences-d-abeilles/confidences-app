import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import request from '../../../services/Net';
import Bundle from './Bundle';
import Loading from '../../utils/Loading';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class AdminManageBundles extends Component {
  state = {
    bundles: null,
    manageId: '0',
  };

  componentDidMount() {
    this.get();
  }

  get() {
    const { notification } = this.props;
    request({
      url: '/bundle',
      method: 'get'
    }, notification).then((res) => {
      this.setState({
        bundles: res,
      });
    });
  }

  render() {
    const { bundles, manageId } = this.state;
    return (
      <div className="row">
        <div className="col">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
            <li className="breadcrumb-item active">Parrainages</li>
          </ol>
          <div className="row">
            <div className="col" style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
              {bundles ? (
                <table className="table table-sm">
                  <tbody>
                    <tr>
                      <th>Propriétaire</th>
                      <th>Pack</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                    {bundles.map((bundle) => {
                      return (
                        <tr className={manageId === bundle.id ? 'table-info' : null} key={bundle.id}>
                          <td>{(bundle.owner) ? bundle.owner.firstname + ' ' + bundle.owner.name + ' ' + bundle.owner.company_name : '[corrupted]'}</td>
                          <td>{(bundle.hives) ? bundle.hives + ' ruches' : bundle.bees + ' abeilles'}</td>
                          <td>{bundle.state}</td>
                          <td><button className="btn btn-link btn-sm" onClick={() => { this.setState({ manageId: bundle.id, bundle_owner: bundle.owner, bundle: bundle }) }}>Gérer</button></td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              ) : <Loading />}
            </div>
            <div className="col">
              {this.state.manageId !== "0" && <Bundle id={this.state.manageId} owner={this.state.bundle_owner} bundle={this.state.bundle} refresh={this.get.bind(this)} />}
            </div>
          </div>
        </div>
      </div>
    )
  }
});
