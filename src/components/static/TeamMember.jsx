import React from 'react';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import {
  faBehanceSquare,
  faFacebookSquare, faInstagram,
  faLinkedin,
  faMedium,
  faTwitterSquare,
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

const TeamMember = ({
  profilePic,
  name,
  job,
  bio,
  linkedIn,
  facebook,
  twitter,
  medium,
  mail,
  behance,
  website,
  instagram,
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

TeamMember.defaultProps = {
  linkedIn: null,
  facebook: null,
  twitter: null,
  medium: null,
  mail: null,
  behance: null,
  website: null,
  instagram: null,
};

TeamMember.propTypes = {
  profilePic: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  job: PropTypes.string.isRequired,
  bio: PropTypes.string.isRequired,
  linkedIn: PropTypes.string,
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  medium: PropTypes.string,
  mail: PropTypes.string,
  behance: PropTypes.string,
  website: PropTypes.string,
  instagram: PropTypes.string,
};

export default TeamMember;
