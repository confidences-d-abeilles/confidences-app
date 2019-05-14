import styled from '@emotion/styled';

export const Item = styled.div`
  padding: ${({ noGutter }) => (noGutter ? 0 : '1rem 5rem')};
  flex: 1 25rem;
  align-self: center;
  text-align: ${({ textAlign }) => textAlign};
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
  justify-content: center;
`;
