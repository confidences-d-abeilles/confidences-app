import React from 'react';
import PropTypes from 'prop-types';

const getDisplayName = ({ name, firstname, company_name }) => (company_name ? company_name : `${firstname} ${name}`);

const Parrains = ({ parrainsList }) => (
  <>
    <h2>Les Parrains</h2>
    {parrainsList.map(parrain => <p key={getDisplayName(parrain)}>{getDisplayName(parrain)}</p>)}
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
