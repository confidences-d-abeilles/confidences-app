import React from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

const Logger = BaseComponent => (props) => {
  // eslint-disable-next-line react/prop-types
  const { location: { pathname } } = props;
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(pathname);
    ReactPixel.pageView();
  }
  return <BaseComponent {...props} />;
};

export default Logger;
