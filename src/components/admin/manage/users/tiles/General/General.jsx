import React from 'react';
import moment from 'moment';
import Loading from '../../../../../utils/Loading';
import UserType from '../../UserType/UserType';
import Confirm from '../../../../../utils/Confirm';
import { Button } from '../../../../../utils/Button';

const General = ({ delete: deleteUser, data, impersonate, handlePromotion }) => (
  <div className="newcard">
    {(data)
      ? (
        <div>
          <h3>
            <small>{data.firstname} {data.name}
            &nbsp;
            <UserType type={data.user_type} /></small>
          </h3>
          <p className="text-muted m-0"><small>Inscrit le {moment(data.createdAt).format("DD/MM/YYYY HH:mm:ss")}</small></p>
          <p className="m-0">Email : {data.email}</p>
          <p className="m-0">Téléphone : {data.phone}</p>
          <p className="m-0">Support level : {data.support_lvl}</p>
          <Confirm text="Supprimer cet utilisateur" action={deleteUser} />
          <Button onClick={impersonate}>Prendre le contrôle</Button>
          <select value={data.user_type} onChange={handlePromotion}>
            <option value="1">Particulier</option>
            <option value="2">Entreprise</option>
            <option value="3">Apporteur d'affaires</option>
            <option value="4">Editeur</option>
            <option value="5">Administrateur</option>
          </select>
        </div>
      ) : <Loading />}
  </div>
);

export default General;
