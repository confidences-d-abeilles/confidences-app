import React from 'react';
import PropTypes from 'prop-types';

const SquareImg = ({ src }) => (
  <div style={{
    width: '100%', paddingTop: '100%', backgroundImage: `url(${src})`, backgroundSize: 'cover',
  }}
  />
);

SquareImg.propTypes = {
  src: PropTypes.string.isRequired,
};

export default SquareImg;
