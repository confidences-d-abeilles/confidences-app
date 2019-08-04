import React, { Component } from 'react';
import Create from './products/Create';
import List from './products/List';

export default class Products extends Component {
  state = {
    refresh: false,
  }

  refresh() {
    this.setState(({ refresh }) => ({
      refresh: !refresh,
    }));
  }

  render() {
    const { refresh } = this.state;
    return (
      <div className="container-fluid">
        <h1>Gérer les produits</h1>
        <div className="row">
          <div className="col">
            <Create refresh={this.refresh.bind(this)} />
          </div>
          <div className="col">
            <List refresh={refresh} />
          </div>
        </div>
      </div>
    );
  }
}
