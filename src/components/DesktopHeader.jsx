import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import logoSquare from '../assets/img/logo-square.png';
import { isLoggedIn } from '../services/AuthService';
import MyLink from './utils/Link';
import { ButtonLink } from './utils/Button';
import navLinks from '../config/navLinks';
import { withNotification } from '../services/withNotification';

const Wrapper = styled('nav')`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: space-between;
  flex-wrap: no-wrap;
  padding: 1rem;
  width: 100%;
  height: 100px;
  background-color: white;
  @media (max-width: 1201px) {
    display: none;
  }
`;

const Section = styled('div')`
  display: flex;
  flex: 3;
  align-items: center;
  flex-wrap: wrap;
  justify-content: start;
  height: 64px;
`;

const RightSection = styled(Section)`
  justify-content: end;
  flex: 2;
`;

const DropdownPostion = styled('div')`
  position: relative;
  width: 100px;
`;

const DropdownWrapper = styled('div')`
  position: absolute;
  height: auto;
  z-index: 1000;
  top: 3rem;
  box-shadow: 0 0 3px silver;
  background-color: white;
  display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};;
  flex-direction: column;
  overflow: hidden;
`;

const DropdownElement = styled(MyLink)`
  padding: 0.5rem 1rem;
  flex: 1;
  width: 10rem;
`;

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleHandler = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <DropdownPostion>
      <a href="/" onClick={toggleHandler}>La société</a>
      <DropdownWrapper onMouseLeave={toggleHandler} isOpen={isOpen}>
        {navLinks.desktop.dropdown.map(({ label, ...props }) => (
          <DropdownElement
            key={props.url}
            {...props}
          >
            {label}
          </DropdownElement>
        ))}
      </DropdownWrapper>
    </DropdownPostion>
  );
};

export default withNotification(() => (
  <Wrapper>
    <Section>
      <Link to="/">
        <img src={logoSquare} width="auto" height="64" alt="Logo Confidences d'Abeilles" />
      </Link>
      {navLinks.desktop.visitors.map(({ label, ...props }) => (
        <MyLink className="nav-link" {...props}>{label}</MyLink>
      ))}
    </Section>
    <RightSection>
      <Dropdown />
      {isLoggedIn()
        ? (
          <>
            <ButtonLink url="/account" primary>Mon Compte</ButtonLink>
            <ButtonLink url="/logout">Deconnexion</ButtonLink>
          </>
        ) : (
          <>
            <ButtonLink url="/login" primary>Se connecter</ButtonLink>
            <ButtonLink url="/presignup" data-cy="create-account">Créer un compte</ButtonLink>
          </>
        )}
    </RightSection>
  </Wrapper>
));
