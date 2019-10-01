import React from 'react';
import ButtonLink from '@cda/button-link';
import { Item, Rows } from '@cda/flex';
import Meta from '../utils/Meta';
import PriceCard from '../PriceCard';
import camambert from '../../assets/img/P/utilisation-don-ruche-particulier.png';

const UNIT = '/ an';

const tenOffer = [
  { id: 'test', value: 'Votre nom sur une ruche' },
  { id: 'test', value: 'Une page dédiée' },
  { id: 'miel', value: '8 pots de 250g', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

const twentyOffer = [
  { id: 'test', value: 'Votre nom sur une ruche' },
  { id: 'test', value: 'Une page dédiée' },
  { id: 'miel', value: '16 pots de 250g', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

const thirtyOffer = [
  { id: 'test', value: 'Votre nom sur une ruche' },
  { id: 'test', value: 'Une page dédiée' },
  { id: 'miel', value: '24 pots de 250g', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

const fourtyOffer = [
  { id: 'test', value: 'Votre nom sur une ruche' },
  { id: 'test', value: 'Une page dédiée' },
  { id: 'miel', value: '32 pots de 250g', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

const fiftyOffer = [
  { id: 'test', value: 'Votre nom sur une ruche' },
  { id: 'test', value: 'Une page dédiée' },
  { id: 'miel', value: '40 pots de 250g', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

export default () => (
  <>
    <Meta title="Tarifs particuliers" />
    <ButtonLink to="/company/prices" primary>Tarifs entreprises ></ButtonLink>
    <h2 className="text-center my-4">Tarifs particuliers</h2>
    <Rows justifyContent="center" wrap="wrap">
      <PriceCard title="10 000 abeilles" price={85} items={tenOffer} unit={UNIT} level={1} subtitle="soit 29€ après réduction d’impôt*" />
      <PriceCard title="20 000 abeilles" price={160} items={twentyOffer} unit={UNIT} level={2} subtitle="soit 55€ après réduction d’impôt*" />
      <PriceCard title="30 000 abeilles" price={231} items={thirtyOffer} unit={UNIT} level={3} subtitle="soit 79€ après réduction d’impôt*" />
      <PriceCard title="40 000 abeilles" price={295} items={fourtyOffer} unit={UNIT} level={4} subtitle="soit 101€ après réduction d’impôt*" />
      <PriceCard title="50 000 abeilles" price={350} items={fiftyOffer} unit={UNIT} level={5} subtitle="soit 119€ après réduction d’impôt*" />
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center" gutters>
        <ButtonLink to="/signup/individual" primary>Parrainer maintenant</ButtonLink>
      </Item>
    </Rows>
    <Rows justifyContent="center" wrap="wrap">
      <Item textAlign="center" gutters>
        <img src={camambert} alt="Utilisation dons" style={{ maxWidth: '100%' }} />
      </Item>
      <Item textAlign="center" gutters>
        <h3>*Dons aux associations et organismes d'intérêt général</h3>
        <p>
          L'association Confidences d’Abeilles est un organisme d’intérêt
          général. A ce titre et en contrepartie des dons qu'elle reçoit, elle
          émet des reçus fiscaux (CERFA N°11580*03) qui permettent à ses
          donateurs de bénéficier d’une réduction d’impôt sur le revenu.
          Celle-ci est de 66 % du montant des dons et elle s'applique dans la
          limite de 20 % du revenu imposable. Lorsque le montant des dons
          dépasse la limite de 20 % du revenu imposable, l'excédent est
          reporté sur les 5 années suivantes et ouvre droit à la réduction
          d'impôt dans les mêmes conditions.
          <br /><br />
          Plus d’information sur ce lien :&nbsp;
          <a href="https://www.service-public.fr/particuliers/vosdroits/F426" target="_blank" rel="noopener noreferrer">https://www.service-public.fr/particuliers/vosdroits/F426</a>
        </p>
      </Item>
    </Rows>
  </>
);
