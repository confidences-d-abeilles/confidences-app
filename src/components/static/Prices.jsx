import React, { Component } from 'react';
import styled from '@emotion/styled';

import { handleTick } from '../../services/FormService';
import Meta from '../utils/Meta';
import { ButtonLink } from '../utils/Button';

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  margin: '2rem',
});

const Item = styled('div')({
  flex: 1,
  padding: '0.5rem',
  fontWeight: 'light',
  fontSize: '1.2rem',
  textAlign: 'center',
});

export default () => (
  <div className="container">
    <Meta title="Tarifs" />
    <div className="row">
      <div className="col">
        <h2 className="text-center my-4">Tarifs</h2>
        <ul className="nav nav-tabs" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" data-toggle="tab" href="#individual">Particulier</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="tab" href="#company">Entreprise</a>
          </li>
        </ul>
        <div className="tab-content" style={{ overflowX: 'auto' }}>
          <div id="individual" className="tab-pane active" role="tabpanel">
            <IndividualPrices />
          </div>
          <div id="company" className="tab-pane" role="tabpanel">
            <CompanyPrices />
          </div>
        </div>
      </div>
    </div>
  </div>
);

class IndividualPrices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      several: false,
    };

    this.indPricesMo = [10, 17, 23, 27, 32];
    this.indPricesYe = [85, 160, 230, 295, 350];
  }

  render() {
    const pricesArr = (this.state.several) ? this.indPricesMo : this.indPricesYe;
    const pricesCells = pricesArr.map((price) => {
      let priceDispl;
      if (this.state.several) {
        priceDispl = `${price}€/mois (${price * 12}€/an)`;
      } else {
        priceDispl = `${price}€/an`;
      }
      return <td key={price}>{priceDispl}</td>;
    });

    return (
      <div>
        <Wrapper>
          <Item>Votre nom sur une ruche</Item>
          <Item>Une page dédiée à la ruche avec des photos de vos abeilles et des actualités régulières</Item>
          <Item>Des pots de miel personnalisés</Item>
          <Item>Expédition des pots via le service Colissimo incluse</Item>
        </Wrapper>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th>10 000 abeilles</th>
                <th>20 000 abeilles</th>
                <th>30 000 abeilles</th>
                <th>40 000 abeilles</th>
                <th>50 000 abeilles (1 ruche complète)</th>
              </tr>
              <tr>
                <td>8 pots de 250g</td>
                <td>16 pots de 250g</td>
                <td>24 pots de 250g</td>
                <td>32 pots de 250g</td>
                <td>40 pots de 250g</td>
              </tr>
              <tr>
                {pricesCells}
              </tr>
            </tbody>
          </table>
          <ButtonLink url="/signup/individual">Parrainer dès maintenant</ButtonLink>
        </div>
        <div className="form-check my-4">
          <label className="form-check-label">
            <input type="checkbox" className="form-check-input" name="several" onClick={handleTick.bind(this)} />
            {' '}
Paiement mensuel
          </label>
        </div>
      </div>
    );
  }
}

class CompanyPrices extends Component {
  constructor(props) {
    super(props);

    this.entrPricesYe = [635, 560];
  }

  render() {
    return (
      <React.Fragment>
        <Wrapper>
          <Item>Ruches aux couleurs de votre entreprise</Item>
          <Item>Une page dédiée à votre entreprise avec des photos de vos ruches et des actualités régulières</Item>
          <Item>Des pots de miel personnalisés</Item>
          <Item>Expédition des pots via le service Colissimo incluse</Item>
        </Wrapper>
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <th>1 à 4 ruches</th>
                <th>5 ruches ou plus</th>
              </tr>
              <tr>
                <td>40 pots de miel de 250g par ruche</td>
                <td>40 pots de miel de 250g par ruche</td>
              </tr>
              <tr>
                <td>
                  {this.entrPricesYe[0]}
€ HT /ruche
                </td>
                <td>
                  {this.entrPricesYe[1]}
€ HT /ruche
                </td>
              </tr>
            </tbody>
          </table>
          <ButtonLink url="/signup/company">Parrainer dès maintenant</ButtonLink>
        </div>
      </React.Fragment>
    );
  }
}
