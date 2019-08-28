import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import moment from 'moment';
import request from '../../../services/Net';
import Meta from '../../utils/Meta';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class AdminHome extends Component {
  state = {
    bundles: [],
  };

  componentDidMount() {
    this.getBundles();
  }

  getBundles = () => {
    const { notification } = this.props;
    request({
      url: '/bundle',
      method: 'get',
    }, notification).then((res) => {
      const filtered = res.filter(({ state }) => state >= 2);
      const sorted = filtered.sort((a, b) => {
        const first = new Date(a.end_date).getTime();
        const second = new Date(b.end_date).getTime();
        return first - second;
      });
      this.setState({ bundles: sorted });
    });
  };

  render() {
    const { bundles } = this.state;
    return (
      <div>
        <Meta title="Espace administrateur" />
        <div className="col-4">
          <p>Parrainages arrivant bientôt à expiration :</p>
          <div className="newcard">
            {bundles.map(bundle => <p key={bundle.id}>{moment(bundle.end_date).format('DD/MM/YYYY')} - {bundle.owner.name} {bundle.owner.firstname} <Link to={`/admin/manage/bundle/${bundle.id}`}>Gérer</Link></p>)}
          </div>
        </div>
      </div>
    );
  }
});
