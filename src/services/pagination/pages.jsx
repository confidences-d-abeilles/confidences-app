import React from 'react';
import { Item, Rows } from '@cda/flex/src';
import styled from '@emotion/styled';

const Entry = styled(Item)`
  padding: 1rem;
  cursor: pointer;
  font-weight: ${({ selected }) => selected && 'bold'};
`;

const Pages = ({
  page,
  pages,
  setPage,
  setPages,
}) => (
  <Rows>
    {Array(pages).fill('').map((_, index) => <Entry key={Math.random()} selected={page === index + 1} onClick={() => setPage(index + 1)}>{index + 1}</Entry>)}
  </Rows>
);

export default Pages;
