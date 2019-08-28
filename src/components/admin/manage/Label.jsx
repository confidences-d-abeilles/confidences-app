import React, { useState } from 'react';
import { Button } from '@cda/button';
import ButtonLink from '@cda/button-link';
import Input from '@cda/input';
import { Columns, Item } from '@cda/flex';

import { withNotification } from '../../../services/withNotification';
import request from '../../../services/Net';

const Label = ({ notification }) => {
  const [dluo, setDluo] = useState('');
  const [harvest, setHarvest] = useState('');

  const dluoHandler = e => setDluo(e.target.value);
  const harvestHandler = e => setHarvest(e.target.value);

  const generate = (e) => {
    e.preventDefault();
    request({
      url: '/label/bulk',
      method: 'POST',
      data: {
        dluo,
        harvest,
      },
    }, notification);
  };

  return (
    <>
      <h2>Étiquettes</h2>
      <h3>Générer</h3>
      <form onSubmit={generate}>
        <Columns>
          <Item>
            <Input type="text" onChange={harvestHandler} placeholder="Récolte"/>
          </Item>
          <Item>
            <Input type="text" onChange={dluoHandler} placeholder="Dluo"/>
          </Item>
          <Item>
            <Button type="submit">Générer</Button>
          </Item>
        </Columns>
      </form>
      <h3>Télécharger</h3>
      <ButtonLink external url={`${process.env.REACT_APP_API_DOMAIN}/label/bulk`}>Télécharger</ButtonLink>
    </>
  );
};

export default withNotification(Label);
