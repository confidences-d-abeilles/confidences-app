import React, { Component } from 'react';

export default class Coupon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: 1,
    };
  }

  coupon = this.props.coupon;

  products = this.props.products;

  componentWillReceiveProps(next) {
  }

  render() {
    return (
      <div />
    );
  }
}
