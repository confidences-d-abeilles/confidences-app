import React from 'react';
import ButtonLink from '@cda/button-link';
import { Item, Rows } from '@cda/flex';
import Meta from '../utils/Meta';
import PriceCard from '../PriceCard';

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
  { id: 'miel', value: '40 pots de miel de 250g par ruche', bold: true },
  { id: 'post', value: 'Frais d\'expedition inclus' },
];

export default () => (
  <>
    <Meta title="Tarifs particuliers" />
    <ButtonLink url="/individual/prices" primary>Tarifs particuliers ></ButtonLink>
    <h2 className="text-center my-4">Tarifs entreprises</h2>
    <Rows justifyContent="center">
      <PriceCard title="1 à 4 ruches" price={635} items={tenOffer} unit={UNIT} level={1} />
      <PriceCard title="5 ruches ou +" price={560} items={twentyOffer} unit={UNIT} level={2} />
    </Rows>
    <Rows>
      <Item textAlign="center">
        <ButtonLink url="/signup/company" primary>Parrainer maintenant</ButtonLink>
      </Item>
    </Rows>
  </>
);
