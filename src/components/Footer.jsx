import React from 'react';
import styled from '@emotion/styled';
import {
  faFacebookSquare, faInstagram, faLinkedin, faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { Rows, Item } from '@cda/flex';
import Link from '@cda/link';

import logo from '../assets/img/logo.png';

const Footer = styled(Rows)`
  background-color: rgb(247, 247, 247);
  text-align: center;
  padding: 1rem;
  margin-top: 1rem;
  flex-wrap: wrap;
  position: relative;
  bottom: 0;
`;

const Section = styled('ul')`
  list-style: none;
  text-align: left;
`;

export default () => (
  <Footer>
    <Item flex={2}>
      <Link to="/">
        <img src={logo} alt="Logo Confidences d'Abeilles" className="img-fluid" style={{ maxHeight: '128px' }} />
      </Link>
      <br />
      <br />
      <Link to="https://www.facebook.com/confidencesdabeille" external>
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </Link>
      <Link to="https://twitter.com/cdabeille" external>
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </Link>
      <Link to="https://www.instagram.com/confidences_dabeilles/" external>
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </Link>
      <Link to="https://www.linkedin.com/company/confidences-d'abeilles/" external>
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </Link>
    </Item>
    <Item flex={1}>
      <h3>Services</h3>
      <Section>
        <li><Link to="/company/presentation">Entreprise</Link></li>
        <li><Link to="/individual/presentation">Particulier</Link></li>
        <li><Link to="/partners">Partenaires</Link></li>
        <li><Link to="/individual/prices">Tarifs</Link></li>
        <li><Link to="/hives">Les ruches</Link></li>
      </Section>
    </Item>
    <Item flex={1}>
      <h3>La société</h3>
      <Section>
        <li><Link to="/about">Notre histoire</Link></li>
        <li><Link to="/ourvalues">Nos valeurs</Link></li>
        <li><Link to="/team">L&apos;équipe</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/jobs">Jobs</Link></li>
        <li><Link to="https://shop.confidencesdabeilles.fr/blogs/all" external>Blog</Link></li>
      </Section>
    </Item>
    <Item flex={1}>
      <h3>Ressources</h3>
      <Section>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/presse">Presse</Link></li>
        <li><Link to="/mentions_legales">Mentions légales</Link></li>
        <li><Link to="/cgv">CGV</Link></li>
      </Section>
    </Item>
  </Footer>
);
