import styled from '@emotion/styled';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Item, Rows } from '@cda/flex';


const JumbotronWrapper = styled(Rows)`
  background-color: #E49C00;
  overflow: hidden;
  min-height: 30rem;
  margin-bottom: 2rem;
`;


const Jumbcontent = styled(Item)`
  color: black;
  padding: 1rem; 
  flex: 1;
  z-index: 10;
  position: relative;
  &::after {
    content: ' ';
    width: 100%;
    transform: rotate(7deg);
    background-color: #E49C00;
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
  flex: 2;
  background-color: black;
  position: relative;
  
  @media(max-width: 800px) {
    display: none;
  }
`;

const Image = styled('img')`
  opacity: ${({ show }) => show ? 1 : 0};
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: opacity 1s ease-in-out;
`;

const Jumbotron = ({ children, img }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const ticker = setInterval(() => {
      setCurrentIndex(currentIndex + 1 === img.length ? 0 : currentIndex + 1);
    }, 4000);
    return () => clearInterval(ticker);
  }, [currentIndex]);

  return (
    <JumbotronWrapper alignItems="center">
      <Jumbcontent flex={1}>
        {children}
      </Jumbcontent>
      <JumboImage flex={1}>
        {img.map((currentImg, index) => <Image src={currentImg} show={index === currentIndex} />)}
      </JumboImage>
    </JumbotronWrapper>
  );
};

Jumbotron.propTypes = {
  img: PropTypes.array.isRequired,
  children: PropTypes.node.isRequired,
};

export default Jumbotron;
