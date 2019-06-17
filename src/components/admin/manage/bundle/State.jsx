import React from 'react';
import PropTypes from 'prop-types';

const State = ({ level }) => (
  <div>
    {(level === 0) ? <span className="badge badge-danger">Non reglé</span> : null}
    {(level === 1) ? <span className="badge badge-warning">En attente de validation</span> : null}
    {(level === 2) ? <span className="badge badge-success">Payé</span> : null}
    {(level === 3) ? <span className="badge badge-info">Payé et en place</span> : null}
  </div>
);

State.propTypes = {
  level: PropTypes.number.isRequired,
};

export default State;
