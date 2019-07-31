import React from 'react';
import Loading from '../../../utils/Loading';
import State from './State/State';
import UserType from './UserType/UserType';

const List = ({ data, select }) => (
  data
    ? (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Type d'utilisateur</th>
            <th>Nom de l'utilisateur</th>
            <th>État du parrainage</th>
          </tr>
        </thead>
        <tbody>
          {data.map(user => (
            <tr key={user.id} onClick={select.bind(this, user.id)} style={{ cursor: 'pointer' }}>
              <td><UserType type={user.user_type} /></td>
              <td>{`${user.firstname} ${user.name} ${user.company_name}`}</td>
              <td>{(user.bundles[0]) ? <State level={user.bundles[0].state} /> : 'Pas de parrainage'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    )
    : <Loading />
);

export default List;
