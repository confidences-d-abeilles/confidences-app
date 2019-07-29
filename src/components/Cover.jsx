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
`;

const Wrapper = styled('div')`
  position: relative;
  height: auto;
  margin-bottom: -20rem;
`;

const Shadow = styled('div')`
  box-shadow: 0 -0.5rem 1rem rgba(0, 0, 0, 0.3);
  height: 10rem;
  top: -10rem;
  padding: 0;
  z-index: 0;
`;

const ContentWrapper = styled('div')`
  top: -20rem;
  padding: 1rem 3rem;
  background-color: white;
`;


const Cover = ({ img, children }) => (
  <Wrapper>
    <CoverPicture src={img} />
    <Shadow className="container" />
    <ContentWrapper className="container">
      {children}
    </ContentWrapper>
  </Wrapper>

);

Cover.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Cover;
