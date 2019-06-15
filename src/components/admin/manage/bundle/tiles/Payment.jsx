import React from 'react';

const Payment = ({ changeState, submitState, state }) => (
  <div className="card mb-4 bg-light">
    <h4 className="card-header">Paiement</h4>
    <div className="card-body p-2 text-center">
      <div className="form-group">
        <select className="form-control" onChange={changeState} name="state" value={state}>
          <option value="0">Non reglé</option>
          <option value="1">Paiement en attente de validation</option>
          <option value="2">Payé</option>
          <option value="3">Payé et en place</option>
        </select>
      </div>
      <button type="button" className="btn btn-info btn-sm" onClick={submitState}>Enregistrer</button>
    </div>
  </div>
);

export default Payment;
