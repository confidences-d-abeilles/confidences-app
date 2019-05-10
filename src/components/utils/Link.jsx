import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const StyleLink = styled(Link)`
  cursor: pointer;
`;

const MyLink = ({
  url,
  to,
  external,
  className,
  children,
  ...props
}) => (external ? (
  <a
    href={url || to}
    target="_blank"
    rel="noopener noreferrer"
    className={className}
    {...props}
  >
    {children || url}
    &nbsp;
    <FontAwesome name="external-link" />
  </a>
) : <StyleLink to={url} className={className}>{children || url}</StyleLink>);

MyLink.propTypes = {
  external: PropTypes.bool,
  url: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

MyLink.defaultProps = {
  external: false,
  className: null,
  children: null,
};

export default MyLink;
