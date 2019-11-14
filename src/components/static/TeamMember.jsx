import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBehanceSquare,
  faFacebookSquare, faInstagram,
  faLinkedin,
  faMedium,
  faTwitterSquare
} from '@fortawesome/free-brands-svg-icons';

import { Item } from '@cda/flex';
import { faEnvelope, faGlobeEurope } from '@fortawesome/free-solid-svg-icons';

const Wrapper = styled(Item)`
  text-align: center;
  margin: 2rem;
  padding: 1rem 2rem;
  box-shadow: 0 0 10px #DDD;
`;

const ProfilePic = styled('img')`
  border-radius: 50%;
  width: 10rem;
  margin: 1rem;
`;

const Name = styled('h3')`
  text-transform: uppercase;
  margin: 1rem;
`;

const Job = styled('h4')`
  text-transform: uppercase;
  font-weight: lighter;
  font-size: 1.25rem;
  margin: 1rem;
`;

const Bio = styled('p')`
  text-align: justify;
`;

const NoStyleA = styled('a')`
  color: inherit;
  margin: 5px;
  
  &:hover, &:active, &:focus {
    color: inherit;
  }
`;

export default ({
  profilePic, name, job, bio, linkedIn, facebook, twitter, medium, mail, behance, website, instagram,
}) => (
  <Wrapper flex="0 0 25rem">
    <ProfilePic src={profilePic} alt={name} />
    <Name>{name}</Name>
    <Job>{job}</Job>
    {linkedIn && <NoStyleA href={linkedIn} target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" /></NoStyleA>}
    {facebook && <NoStyleA href={facebook} target="_blank"><FontAwesomeIcon icon={faFacebookSquare} size="2x" /></NoStyleA>}
    {twitter && <NoStyleA href={twitter} target="_blank"><FontAwesomeIcon icon={faTwitterSquare} size="2x" /></NoStyleA>}
    {medium && <NoStyleA href={medium} target="_blank"><FontAwesomeIcon icon={faMedium} size="2x" /></NoStyleA>}
    {mail && <NoStyleA href={mail} target="_blank"><FontAwesomeIcon icon={faEnvelope} size="2x" /></NoStyleA>}
    {behance && <NoStyleA href={behance} target="_blank"><FontAwesomeIcon icon={faBehanceSquare} size="2x" /></NoStyleA>}
    {website && <NoStyleA href={website} target="_blank"><FontAwesomeIcon icon={faGlobeEurope} size="2x" /></NoStyleA>}
    {instagram && <NoStyleA href={instagram} target="_blank"><FontAwesomeIcon icon={faInstagram} size="2x" /></NoStyleA>}
    <Bio>
      {bio}
    </Bio>
  </Wrapper>
);
