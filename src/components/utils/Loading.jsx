import React from 'react';
import loader from '../../assets/img/three-dots.svg';

const Loading = () => (
  <div style={{
    width: '100%', textAlign: 'center', height: '60px', paddingTop: '20px',
  }}
  >
    <img src={loader} alt="Loading" />
  </div>
);

export default Loading;
