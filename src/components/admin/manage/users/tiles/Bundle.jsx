import React from 'react';
import moment from 'moment';

import State from '../State/State';

const Bundle = ({ bundle }) => {
  if (bundle) {
    let beginDate = 'N/A';
    let endDate = 'N/A';
    if (typeof bundle.start_date !== 'undefined' && bundle.start_date) {
      beginDate = moment(bundle.start_date).format('DD/MM/YYYY à HH[h]mm');
    }
    if (typeof bundle.end_date !== 'undefined' && bundle.end_date) {
      endDate = moment(bundle.end_date).format('DD/MM/YYYY à HH[h]mm');
    }

    return (
      <div>
        <p className="newcard">
          {`Parrainage de ${bundle.hives ? `${bundle.hives} ruches ` : `${bundle.bees} abeilles `}`}
          <State level={bundle.state} />
          <br />
          {`Prise d'effet le ${beginDate}`}
          <br />
          {`Expiration le ${endDate}`}
          <br />
        Options chosies :&nbsp;
          {bundle.options && bundle.options.map(({ designation }) => <h6>{designation}</h6>)}
        </p>
      </div>
    );
  }
  return (<p className="text-muted">Cet utilisateur n'a pas encore choisi de parrainage</p>);
};

export default Bundle;
