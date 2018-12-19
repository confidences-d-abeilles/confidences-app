import React from 'react';

export default ({ src }) => (
  <div
    style={{
      width: '100%',
      paddingTop: '100%',
      backgroundImage: `url(${src})`,
      backgroundSize: 'cover',
    }}
  />
);
