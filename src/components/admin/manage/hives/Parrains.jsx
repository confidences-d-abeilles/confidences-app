import React from 'react';
import PropTypes from 'prop-types';

const Parrains = ({ parrainsList }) => (
  <>
    <h2>Les Parrains</h2>
    {parrainsList.map(({ name, firstname }) => <p key={`${firstname} ${name}`}>{`${firstname} ${name}`}</p>)}
  </>
);

Parrains.propTypes = {
  parrainsList: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    firstname: PropTypes.string.isRequired,
  })),
};

Parrains.defaultProps = {
  parrainsList: [],
};

export default Parrains;
