import React from 'react';
import styled from '@emotion/styled';
import { Item } from '@cda/flex';

const Wrapper = styled(Item)`
  text-align: center;
  padding: 1rem;
`;

const ProfilePic = styled('img')`
  border-radius: 50%;
  width: 10rem;
  margin: 1rem;
`;

const Name = styled('h3')`
  text-transform: uppercase;
`;

const Job = styled('h4')`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.25rem;
`;

const Bio = styled('p')`
  text-align: justify;
`;

export default ({
  profilePic, name, job, bio,
}) => (
  <Wrapper flex="1 0 30rem">
    <ProfilePic src={profilePic} alt={name} />
    <Name>{name}</Name>
    <Job>{job}</Job>
    <Bio>
      {bio}
    </Bio>
  </Wrapper>
);
