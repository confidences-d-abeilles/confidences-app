import React, { Fragment } from 'react';
import { Button } from '@cda/button';

const Pictures = ({ data }) => (
  <div className="mt-4">
    {data.map((img, index) => (
      <Fragment key={img.id}>
        <img alt={img} className="w-25 p-2" src={`${process.env.REACT_APP_CONTENT_DOMAIN}/${img}`} style={{ cursor: 'pointer' }} />
        <Button onClick={() => this.delete(index)}>Supprimer</Button>
        {/* <Button onClick={() => this.setAsDefault(index)}>Par defaut</Button> */}
      </Fragment>
    ))}
  </div>
);

export default Pictures;
