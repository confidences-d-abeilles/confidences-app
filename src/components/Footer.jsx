import React from 'react';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import { Columns, Item } from '@cda/flex';

import logo from '../assets/img/logo.png';

const Footer = styled(Columns)`
  background-color: rgb(247, 247, 247);
`;

export default () => (
  <Footer>
    <Item>
      <div>
        <Link to="/">
          <img src={logo} alt="Logo Confidences d'Abeilles" className="img-fluid" style={{ maxHeight: '128px' }} />
        </Link>
        <br />
        <br />
        <a href="https://www.facebook.com/confidencesdabeille" target="_blank" rel="noopener noreferrer" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://twitter.com/cdabeille" target="_blank" rel="noopener noreferrer" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.instagram.com/confidences_dabeilles/" target="_blank" rel="noopener noreferrer" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/company/confidences-d'abeilles/" target="_blank" rel="noopener noreferrer" />
      </div>
    </Item>
    <Item>
      <h3>Services</h3>
      <ul>
        <li><Link to="/company/presentation" className="noStyleLink">Entreprise</Link></li>
        <li><Link to="/individual/presentation" className="noStyleLink">Particulier</Link></li>
        <li><Link to="/partners" className="noStyleLink">Partenaires</Link></li>
        <li><Link to="/individual/prices" className="noStyleLink">Tarifs</Link></li>
        <li><Link to="/hives" className="noStyleLink">Les ruches</Link></li>
      </ul>
    </Item>
    <Item className="col-lg-4 col-md-4 col-sm-6 mb-4">
      <h3>La société</h3>
      <ul>
        <li><Link to="/about" className="noStyleLink">Notre histoire</Link></li>
        <li><Link to="/ourvalues" className="noStyleLink">Nos valeurs</Link></li>
        <li><Link to="/team" className="noStyleLink">L&apos;équipe</Link></li>
        <li><Link to="/contact" className="noStyleLink">Contact</Link></li>
        <li><Link to="/jobs" className="noStyleLink">Jobs</Link></li>
        <li><a href="https://confidencesdabeilles.fr/blog" target="_blank" rel="noopener noreferrer">Blog</a></li>
      </ul>
    </Item>
    <Item className="col-lg-4 col-md-4 col-sm-6 mb-4">
      <h3>Ressources</h3>
      <ul>
        <li><Link to="/faq" className="noStyleLink">FAQ</Link></li>
        <li><Link to="/presse" className="noStyleLink">Presse</Link></li>
        <li><Link to="/mentions_legales" className="noStyleLink">Mentions légales</Link></li>
        <li><Link to="/cgv" className="noStyleLink">CGV</Link></li>
      </ul>
    </Item>
  </Footer>
);
