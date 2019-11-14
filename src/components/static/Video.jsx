import React from 'react';
import styled from '@emotion/styled';
import ButtonLink from '@cda/button-link';

import Video from '../../assets/presentation.mp4';

const Wrapper = styled('div')`
  text-align: center;
`;

const StyledVideo = styled('video')`
  width: 60%;
`;

const StyledButton = styled(ButtonLink)`
  margin: 3rem;
`;

export default () => (
  <Wrapper>
    <StyledVideo src={Video} controls />
    <br />
    <StyledButton to="/presignup">Je soutiens mes abeilles</StyledButton>
  </Wrapper>
);
