import React, { Component } from 'react';
import Create from './coupons/Create';
import List from './coupons/List';

export default class Coupons extends Component {
  state = {
    refresh: false,
  };

  refresh = () => {
    this.setState(({ refresh }) => ({
      refresh: !refresh,
    }));
  };

  render() {
    const { refresh } = this.state;
    return (
      <div className="container-fluid">
        <h1>Gérer les coupons</h1>
        <hr />
        <div className="row">
          <div className="col-lg-3"><Create refresh={this.refresh} /></div>
          <div className="col-lg-9"><List refresh={refresh} /></div>
        </div>
      </div>
    );
  }
}
