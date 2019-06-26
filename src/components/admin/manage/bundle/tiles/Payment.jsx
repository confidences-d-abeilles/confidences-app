import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@cda/button';

const Payment = ({ changeState, submitState, state }) => (
  <div className="newcard">
    <h4>Paiement</h4>
    <select onChange={changeState} name="state" value={state}>
      <option value="0">Non reglé</option>
      <option value="1">Paiement en attente de validation</option>
      <option value="2">Payé</option>
      <option value="3">Payé et en place</option>
    </select>
    <Button type="button" onClick={submitState}>Enregistrer</Button>
  </div>
);

Payment.propTypes = {
  changeState: PropTypes.func.isRequired,
  submitState: PropTypes.func.isRequired,
  state: PropTypes.string.isRequired,
};

export default Payment;
