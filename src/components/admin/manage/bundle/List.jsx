import React from 'react';
import FontAwesome from 'react-fontawesome';
import Loading from '../../../utils/Loading';
import State from './State';

const List = ({ data, select }) => (
  data
    ? (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Client</th>
            <th>Offre</th>
            <th>Etat du paiement</th>
          </tr>
        </thead>
        <tbody>
          {data.map(bundle => (
            <tr key={bundle.id} onClick={select.bind(this, bundle.id)} style={{ cursor: 'pointer' }}>
              <td>
                {(bundle.present) ? (
                  <span>
                    <FontAwesome name="gift" />
                    {' '}
                  </span>
                ) : null}
                {(bundle.owner) ? `${bundle.owner.firstname} ${bundle.owner.name} ${bundle.owner.company_name}` : '[corrupted]'}
              </td>
              <td>{(bundle.hives) ? `${bundle.hives} ruches` : `${bundle.bees} abeilles`}</td>
              <td><State level={bundle.state} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    )
    : <Loading />
);


export default List;
