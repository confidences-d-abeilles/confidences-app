import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Input from '@cda/input';

const Popup = styled('div')`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: 
  height: 200px;
  width: 400px;
  background-color: white;
  z-index: 100;
`;

const NewsletterPopup = () => {

  return <Popup>
    <form>
      <Input type="email" placeholder="Email" />
      <Input type="text" placeholder="Nom" />
      <Input type="text" placeholder="Prénom" />
    </form>
  </Popup>;
};

NewsletterPopup.propTypes = {};

export default NewsletterPopup;