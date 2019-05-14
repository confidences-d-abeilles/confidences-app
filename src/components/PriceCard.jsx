import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import { Item } from './utils/layout/Flex';

const Wrapper = styled(Item)`
  margin: 0.5rem;
  flex: 0 1 14rem;
  background-color: #f7f7f7;
  align-self: end;
`;

const Header = styled(Item)`
  background-color: black;
  color: #f7f7f7;
  text-align: center;
  padding: 1rem 0.25rem;
  max-width: 20rem;
  padding-top: ${({ level }) => `${1 + level * 0.25}rem`};
  padding-bottom: ${({ level }) => `${1 + level * 0.25}rem`};
  
  h1 {
    font-weight: 200;
    strong {
    }
  }
  
  h4 {
    font-weight: 200;
  }
`;

const List = styled('ul')`
  list-style: none;
  padding: 0;
  
  li {
    margin: 1rem ;
  }
`;


const PriceCard = ({
  title, items, price, level, unit,
}) => (
  <Wrapper noGutter>
    <Header noGutter level={level}>
      <h1>
        <strong>€</strong>
        {' '}
        {price}
        {' '}
        <small>{unit}</small>
      </h1>
      <h4>{title}</h4>
    </Header>
    <List>
      {items.map(e => <li key={title + e.id}>{e.bold ? <strong>{e.value}</strong> : e.value }</li>)}
    </List>
  </Wrapper>
);

PriceCard.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf.isRequired,
  unit: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
};

export default PriceCard;
