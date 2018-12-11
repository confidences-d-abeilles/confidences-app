import React, { Component } from 'react';
import ReactGA from 'react-ga';
import request from '../../../services/Net';
import Meta from '../../utils/Meta';

export default class Bills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      bills: null,
    };
    ReactGA.pageview(this.props.location.pathname);
  }

  componentDidMount() {
    request({
      url: '/bill/mine',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        bills: res,
      });
    });
  }

  render() {
    return (
      <div className="row">
        <Meta title="Mes factures" />
        <div className="col-lg-12">
          <h2 className="text-center my-5">Mes factures</h2>
          <p className="alert alert-info">Factures en ligne bientôt disponibles</p>
        </div>
      </div>
    );
  }
}
