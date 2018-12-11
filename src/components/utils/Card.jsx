import React from 'react';
import { CardElement } from 'react-stripe-elements';

const Card = () => (
  <p>
    Card details
    <CardElement style={{ base: { fontSize: '18px' } }} />
  </p>
);

export default Card;
