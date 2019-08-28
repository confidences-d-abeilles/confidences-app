import React, { Component } from 'react';
import { Columns, Item } from '@cda/flex';
import Create from './products/Create';
import List from './products/List';

export default class Products extends Component {
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
      <>
        <h1>Gérer les produits</h1>
        <Columns>
          <Item>
            <Create refresh={this.refresh} />
          </Item>
          <Item>
            <List refresh={refresh} />
          </Item>
        </Columns>
      </>
    );
  }
}
