import React from 'react';
import PropTypes from 'prop-types';
import ReactStars from 'react-stars';

/**
 * @param {int} value
 * @param {Function} handler
 * @returns {*}
 * @constructor
 */
const Rating = ({ value, handler }) => (
  <ReactStars
    count={5}
    value={value}
    onChange={handler}
    size={24}
    color2="#ffd700"
  />
);

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  handler: PropTypes.func.isRequired,
};

export default Rating;
