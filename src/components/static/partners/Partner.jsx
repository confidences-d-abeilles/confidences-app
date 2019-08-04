import React from 'react';
import styled from '@emotion/styled';

import { Rows, Item } from '@cda/flex';
import Link from '@cda/link';

const ImageSection = styled(Item)`
  text-align: center;
`;

const StyledImg = styled('img')`
  max-height: 10rem;
  max-width: 10rem;
  margin: 1rem;
`;

const Partner = ({ img, title, content, link }) => (
  <Rows>
    <ImageSection alignSelf="center" flex={1}>
      <StyledImg src={img} alt="Thomas Apiculture" />
    </ImageSection>
    <Item flex={3}>
      <h3 className="mb-4" style={{ color: '#E49C00' }}>{title}</h3>
      <p style={{ color: '#666666' }} dangerouslySetInnerHTML={{ __html: content }} />
      <p className="text-center">
        <Link href={link} external>En savoir plus</Link>
      </p>
    </Item>
  </Rows>
);

export default Partner;
