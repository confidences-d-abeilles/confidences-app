import React from 'react';
import ButtonLink from '@cda/button-link';
import { Item, Rows } from '@cda/flex';
import Meta from '../utils/Meta';
import PriceCard from '../PriceCard';

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
    <Rows justifyContent="center">
      <PriceCard title="10 000 abeilles" price={85} items={tenOffer} unit={UNIT} level={1} />
      <PriceCard title="20 000 abeilles" price={160} items={twentyOffer} unit={UNIT} level={2} />
      <PriceCard title="30 000 abeilles" price={230} items={thirtyOffer} unit={UNIT} level={3} />
      <PriceCard title="40 000 abeilles" price={295} items={fourtyOffer} unit={UNIT} level={4} />
      <PriceCard title="50 000 abeilles" price={350} items={fiftyOffer} unit={UNIT} level={5} />
    </Rows>
    <Rows justifyContent="center">
      <Item textAlign="center">
        <ButtonLink to="/signup/individual" primary>Parrainer maintenant</ButtonLink>
      </Item>
    </Rows>
  </>
);
