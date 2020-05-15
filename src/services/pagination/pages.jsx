import React from 'react';
import PropTypes from 'prop-types';
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
}) => (
  <Rows>
    {page > 1 ? <Entry onClick={() => setPage(page - 1)}>{'<'}</Entry> : <Entry>&nbsp;</Entry>}
    {Array(pages).fill('').map((_, index) => <Entry key={Math.random()} selected={page === index + 1} onClick={() => setPage(index + 1)}>{index + 1}</Entry>)}
    {page < pages ? <Entry onClick={() => setPage(page + 1)}>{'>'}</Entry> : <Entry>&nbsp;</Entry>}
  </Rows>
);

Pages.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired,
  setPage: PropTypes.func.isRequired,
};

export default Pages;
