import React from 'react';
import Loading from '../../../../../utils/Loading'
import moment from 'moment'
import UserType from '../../UserType/UserType'
import Confirm from '../../../../../utils/Confirm'

const General = ( props ) => (
	<div className="newcard">
		{(props.data)?
			<div>
				<h3><small>{props.data.firstname} {props.data.name} <UserType type={props.data.user_type} /></small></h3>
				<p className="text-muted m-0"><small>Inscrit le {moment(props.data.createdAt).format("DD/MM/YYYY HH:mm:ss")}</small></p>
				<p className="m-0">Email : {props.data.email}</p>
				<p className="m-0">Téléphone : {props.data.phone}</p>
				<Confirm text="Supprimer cet utilisateur" class="btn btn-danger btn-sm mt-2" action={props.delete} />
			</div>
		:<Loading />}
	</div>
);

export default General;