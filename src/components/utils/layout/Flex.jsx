import styled from '@emotion/styled';

export const Item = styled.div`
  padding: 5rem;
  flex: 1 25rem;
  align-self: center;
`;

export const ItemNoGutter = styled.div`
  padding: 0;
  flex: 1 25rem;
`;

export const Columns = styled.div`
  display: flex;
  flex: 1 25rem;
  flex-direction: columns;
  align-items: stretch;
  justify-content: center;
`;

export const Rows = styled.div`
  display: flex;
  flex-direction: rows;
  flex-wrap: wrap;
`;
