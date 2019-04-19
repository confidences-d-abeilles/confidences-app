import React from 'react';
import ReactGA from 'react-ga';
import ReactPixel from 'react-facebook-pixel';

export default BaseComponent => (props) => {
  const { location: { pathname } } = props;
  if (process.env.NODE_ENV === 'production') {
    ReactGA.pageview(pathname);
    ReactPixel.pageView();
  }
  return <BaseComponent {...props} />;
};
