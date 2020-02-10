import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

import logo from '../assets/img/logo.png';
import onePercent from '../assets/img/1percent.png';
import '../assets/styles/footer.css';

const WithMarginImage = styled('img')`
  margin: 10px 5vw;
  height: 128px;
`;

const LogoWrapper = styled('div')`
  display: flex;
  // height: 128px;
  justify-content: space-around;
`;

export default () => (
  <footer className="bg-faded">
    <div className="container-fluid">
      <div className="row justify-content-around">
        <div className="col-lg-4 mb-4">
          <div>
            <Link to="/">
              <LogoWrapper>
                <WithMarginImage src={logo} alt="Logo Confidences d'Abeilles" className="img-fluid" style={{ marginTop: '3px' }} />
                <WithMarginImage src={onePercent} alt="Logo Confidences d'Abeilles" className="img-fluid" />
              </LogoWrapper>
            </Link>
            <br />
            <br />
            <a href="https://www.facebook.com/confidencesdabeille" target="_blank" rel="noopener noreferrer">
              <FontAwesome name="facebook-official" size="2x" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://twitter.com/cdabeille" target="_blank" rel="noopener noreferrer">
              <FontAwesome name="twitter" size="2x" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.instagram.com/confidences_dabeilles/" target="_blank" rel="noopener noreferrer">
              <FontAwesome name="instagram" size="2x" />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.linkedin.com/company/confidences-d'abeilles/" target="_blank" rel="noopener noreferrer">
              <FontAwesome name="linkedin" size="2x" />
            </a>
          </div>
        </div>
        <div className="col-lg-6 col-md-12 row">
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <h3 className="text-left">Soutenir</h3>
            <ul>
              <li><Link to="/company/presentation" className="noStyleLink">Entreprises</Link></li>
              <li><Link to="/individual/presentation" className="noStyleLink">Particuliers</Link></li>
              <li><Link to="/individual/prices" className="noStyleLink">Coût</Link></li>
              <li><Link to="/hives" className="noStyleLink">Les ruches de nos mécènes</Link></li>
              <li><Link to="/#" className="noStyleLink">Adhérer</Link></li>
              <li><Link to="/#" className="noStyleLink">Participer aux visites</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <h3 className="text-left">L&apos;association</h3>
            <ul>
              <li><Link to="/about" className="noStyleLink">L&apos;histoire</Link></li>
              <li><Link to="/ourvalues" className="noStyleLink">Les valeurs</Link></li>
              <li><Link to="/team" className="noStyleLink">L&apos;équipe et le conseil d&apos;administration</Link></li>
              <li><Link to="/partners" className="noStyleLink">Les partenaires</Link></li>
              <li><Link to="/jobs" className="noStyleLink">Rejoindre l&apos;aventure</Link></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 col-sm-6 mb-4">
            <h3 className="text-left">En savoir plus</h3>
            <ul>
              <li><Link to="/#" className="noStyleLink">Les rapports d&apos;activité</Link></li>
              <li><Link to="/faq" className="noStyleLink">FAQ</Link></li>
              <li><Link to="/contact" className="noStyleLink">Contacter</Link></li>
              <li><Link to="/mentions_legales" className="noStyleLink">Mentions légales</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
);
