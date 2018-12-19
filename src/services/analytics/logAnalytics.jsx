import React from 'react';
import ReactGA from 'react-ga';

export default BaseComponent => (props) => {
  const { location: { pathname } } = props;
  ReactGA.pageview(pathname);
  return <BaseComponent {...props} />;
};
