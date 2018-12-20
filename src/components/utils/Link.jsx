import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

const MyLink = ({
  url,
  label,
  external,
  ...props
}) => (external ? (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    {...props}
  >
    {label}
    &nbsp;
    <FontAwesome name="external-link" />
  </a>
) : <Link to={url} {...props}>{label}</Link>);

MyLink.propTypes = {
  external: PropTypes.bool,
  url: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

MyLink.defaultProps = {
  external: false,
};

export default MyLink;
