import React from 'react';
import moment from 'moment';
import Loading from '../../../../../utils/Loading';
import UserType from '../../UserType/UserType';
import Confirm from '../../../../../utils/Confirm';
import { Button } from '../../../../../utils/Button';

const General = ({ delete: deleteUser, data, impersonate }) => (
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
          <Confirm text="Supprimer cet utilisateur" class="btn btn-danger btn-sm mt-2" action={deleteUser} />
          <Button onClick={impersonate}>Prendre le contrôle</Button>
        </div>
      ) : <Loading />}
  </div>
);

export default General;
