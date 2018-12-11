import React from 'react';
import PropTypes from 'prop-types';
import MetaTags from 'react-meta-tags';

const Meta = ({ title }) => (
  <MetaTags>
    <title>{(title) ? `${title} | Confidences d'Abeilles` : 'Confidences d\'Abeilles'}</title>
  </MetaTags>
);

Meta.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Meta;
