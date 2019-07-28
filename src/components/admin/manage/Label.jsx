import React, { useState } from 'react';
import { Button } from '@cda/button';
import ButtonLink from '@cda/button-link';
import Input from '@cda/input';
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
      <form onSubmit={generate}>
        <Input type="text" onChange={harvestHandler} placeholder="Récolte"/>
        <Input type="text" onChange={dluoHandler} placeholder="Dluo"/>
        <Button type="submit">Générer</Button>
      </form>
      <ButtonLink external url={`${process.env.REACT_APP_API_DOMAIN}/label/bulk`}>Télécharger</ButtonLink>
    </>
  )
};

export default withNotification(Label);
