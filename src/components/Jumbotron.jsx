import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Item, Columns } from '@cda/flex';


const JumbotronWrapper = styled(Columns)`
  background-color: #111;
  overflow: hidden;
  min-height: 30rem;
  margin-bottom: 2rem;
`;


const Jumbcontent = styled(Item)`
  color: #DDD;
  padding: 1rem; 
  flex: 1;
  z-index: 10;
  position: relative;
  &::after {
    content: ' ';
    width: 100%;
    transform: rotate(7deg);
    background-color: #111;
    right: 0;
    display: block;
    right: -10%;
    top: -200%;
    z-index: -1;
    height: 600%;
    position: absolute;
  }
`;

const JumboImage = styled(Item)`
  width: 100%;
  align-self: stretch;
  background-image: ${props => `url("${props.src}")`};
  background-size: cover;
  background-position: center;
  @media(max-width: 800px) {
    display: none;
  }
`;

const Jumbotron = ({ children, img }) => (
  <JumbotronWrapper alignItems="center">
    <Jumbcontent>
      {children}
    </Jumbcontent>
    <JumboImage src={img} />
  </JumbotronWrapper>
);

Jumbotron.propTypes = {
  img: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Jumbotron;
