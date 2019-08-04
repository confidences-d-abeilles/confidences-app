import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const CoverPicture = styled('div')`
  background-image: ${({ src }) => `url("${src}")`};
  background-size: cover;
  background-position: cemter -5rem;
  width: 100%;
  min-height: 20rem;
  height: 30rem;
  max-height: 40vw;
  z-index: -1;
  top: 20rem;
  position: relative;
`;

const Wrapper = styled('div')`
  position: relative;
  height: auto;
  margin-top: -20rem;
  z-index: -1;
`;

const Shadow = styled('div')`
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.3);
  height: 10rem;
  position: relative;
  top: 8rem;
  padding: 1rem 3rem;
  z-index: 2;
  width: 80%;
  margin: auto;
`;

const ContentWrapper = styled('div')`
  top: -4rem;
  padding: 1rem 3rem;
  background-color: white;
  position: relative;
  width: 80%;
  z-index: 3;
  margin: auto;
`;


const Cover = ({ img, children }) => (
  <Wrapper>
    <CoverPicture src={img} />
    <Shadow />
    <ContentWrapper>
      {children}
    </ContentWrapper>
  </Wrapper>

);

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Cover;
