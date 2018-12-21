import React from 'react';
import {CardElement} from 'react-stripe-elements';
import {injectStripe} from 'react-stripe-elements';

export default class Card extends React.Component {
  render() {
    return (
      <label>
        Card details
        <CardElement style={{base: {fontSize: '18px'}}} />
      </label>
    );
  }
};
