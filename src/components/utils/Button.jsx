import React from 'react';
import PropTypes from 'prop-types';
import Link from '@cda/link';
import { Button } from '@cda/button';

export const ButtonLink = ({ children, ...props }) => <Link {...props}><Button>{children}</Button></Link>

ButtonLink.propTypes = {
  primary: PropTypes.bool,
};

ButtonLink.defaultProps = {
  primary: false,
};
