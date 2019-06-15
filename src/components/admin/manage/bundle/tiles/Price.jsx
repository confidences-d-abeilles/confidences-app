import React, { useState } from 'react';
import PropTypes from 'prop-types';
import request from '../../../../../services/Net';
import { Button } from '../../../../utils/Button';
import { withNotification } from '../../../../../services/withNotification';

const Price = ({ bundleId, notification }) => {
  const [price, setPrice] = useState(0);

  const submit = (e) => {
    e.preventDefault();
    request({
      url: `/bundle/${bundleId}`,
      method: 'PUT',
      data: {
        price,
      },
    }, notification);
  };

  return (
    <form className="newcard" onSubmit={submit}>
      <h4>Prix du parrainage</h4>
      <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      <Button type="submit">Valider</Button>
    </form>
  );
};

Price.propTypes = {
  bundleId: PropTypes.string.isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(Price);
