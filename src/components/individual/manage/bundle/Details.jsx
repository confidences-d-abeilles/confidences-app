import React from 'react';
import moment from 'moment';
import Loading from '../../../utils/Loading';

const Details = ({ data }) => (
  (data)
    ? (
      <div className="col-lg-6">
        <h3><small>Détails</small></h3>
			Offre : Parrainage de
        {' '}
        {data.bees}
        {' '}
abeilles
        <br />
        {(data.start_date && data.state >= 2)
          ? (
            <div>
					Date de début :
              {' '}
              {moment(data.start_date).format('DD/MM/YYYY')}
              <br />
					Date de fin:
              {' '}
              {moment(data.end_date).format('DD/MM/YYYY')}
            </div>
          )
			  : <p>Votre offre débutera dès la réception du paiement</p>}
      </div>
    )
    : <Loading />
);

export default Details;
