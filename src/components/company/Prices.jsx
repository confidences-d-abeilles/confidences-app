import React from 'react';
import ButtonLink from '@cda/button-link';
import { Item, Rows } from '@cda/flex';
import Meta from '../utils/Meta';
import PriceCard from '../PriceCard';
import camambert from '../../assets/img/E/utilisation-don-ruche-entreprise.png';

const UNIT = '/ an / ruche';

const tenOffer = [
  { id: 'beehive', value: 'Ruches aux couleurs de votre entreprise' },
  { id: 'page', value: 'Une page dédiée à votre entreprise' },
  { id: 'miel', value: '40 pots de miel de 250g par ruche', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

const twentyOffer = [
  { id: 'beehive', value: 'Ruches aux couleurs de votre entreprise' },
  { id: 'page', value: 'Une page dédiée à votre entreprise' },
  { id: 'miel', value: '40 pots de miel de 250g par ruche (ou 80 de 125g)', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

export default () => (
  <>
    <Meta title="Tarifs particuliers" />
    <ButtonLink to="/individual/prices" primary>Tarifs particuliers ></ButtonLink>
    <h2 className="text-center my-4">Tarifs entreprises</h2>
    <Rows justifyContent="center">
      <PriceCard title="1 à 4 ruches" price={635} items={tenOffer} unit={UNIT} level={1} />
      <PriceCard title="5 ruches ou +" price={560} items={twentyOffer} unit={UNIT} level={2} />
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <ButtonLink to="/signup/company" primary>Parrainer maintenant</ButtonLink>
      </Item>
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <img src={camambert} alt="Utilisation dons" />
      </Item>
      <Item textAlign="center" gutters>
        <h3>*Mécénat d'entreprise et dons aux associations</h3>
        <p>
          L'association Confidences d’Abeilles est un organisme d’intérêt
          général. A ce titre et en contrepartie des dons qu'elle reçoit, elle
          émet des reçus fiscaux (CERFA N°11580*03) qui permettent à ses
          mécènes de bénéficier d’une réduction d’impôt sur le revenu ou sur
          les sociétés. Celle-ci est de 60 % du montant des dons et elle
          s'applique dans la limite de 5 ‰ (5 pour mille) du chiffre d'affaires
          annuel hors taxe. En cas de dépassement du plafond, il est possible
          de reporter l'excédent sur les 5 exercices suivants. Les montants
          reportés ne peuvent s'ajouter aux dons effectués chaque année que
          dans la limite du plafond annuel.
          <br /><br />
          Plus d’information sur ce lien :&nbsp;
          <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F22263" target="_blank" rel="noopener noreferrer">
            https://www.service-public.fr/professionnels-entreprises/vosdroits/F22263
          </a>
        </p>
      </Item>
    </Rows>
  </>
);
