import React, { Component } from 'react';
import Create from './products/Create';
import List from './products/List';

export default class Products extends Component {
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
        <h1>Gérer les produits</h1>
        <hr />
        <div className="row">
          <div className="col">
            <Create refresh={this.refresh.bind(this)} />
          </div>
          <div className="col">
            <List refresh={this.state.refresh} />
          </div>
        </div>
      </div>
    );
  }
}
