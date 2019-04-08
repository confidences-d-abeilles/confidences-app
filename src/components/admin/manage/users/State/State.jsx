import React from 'react';
import PropTypes from 'prop-types';

const State = ({ level }) => (
  <span>
    {level === 0 && <span className="badge badge-danger">Non reglé</span>}
    {level === 1 && <span className="badge badge-warning">En attente de validation</span>}
    {level === 2 && <span className="badge badge-success">Payé</span>}
    {level === 3 && <span className="badge badge-info">Payé et en place</span>}
  </span>
);

State.propTypes = {
  level: PropTypes.number.isRequired,
};

export default State;
