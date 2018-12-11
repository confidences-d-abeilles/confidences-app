import React, { Component } from 'react';
import Create from './coupons/Create';
import List from './coupons/List';

export default class Coupons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refresh: false,
    };
  }

  refresh() {
    this.setState({
      refresh: !this.state.refresh,
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <h1>Gérer les coupons</h1>
        <hr />
        <div className="row">
          <div className="col-lg-3"><Create refresh={this.refresh.bind(this)} /></div>
          <div className="col-lg-9"><List refresh={this.state.refresh} /></div>
        </div>
      </div>
    );
  }
}
