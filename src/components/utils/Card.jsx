import React from 'react';
import { CardElement } from 'react-stripe-elements';


export default () => (
  <label>
    Card details
    <CardElement style={{ base: { fontSize: '18px' } }} />
  </label>
);
