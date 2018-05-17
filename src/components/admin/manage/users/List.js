import React from 'react'
import Loading from '../../../utils/Loading'
import State from './State.js'

const List = ( props ) => (
	(props.data)?
		<table className="table table-hover">
			<thead>
				<tr>
					<th><input type="checkbox" /></th>
					<th>Type d'utilisateur</th>
					<th>Nom de l'utilisateur</th>
					<th>État du parrainage</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((user) => (
					<tr key={user.id} onClick={props.select.bind(this, user.id)} style={{ cursor : 'pointer' }} >
						<td><input type="checkbox" /></td>
						<td>{renderType(user.user_type)}</td>
						<td>{user.firstname+' '+user.name+' '+user.company_name}</td>
						<td>{(user.bundles[0])?<State level={user.bundles[0].state} />:'Pas de parrainage'}</td>
					</tr>
				))}
			</tbody>
		</table>
		:<Loading />
)

const renderType = (type) => {
	switch (type) {
		case 1:
			return ("Particulier");
		case 2:
			return ("Entreprise");
		case 3:
			return ("Apporteur d'Affaires");
		case 4:
			return ("Editeur");
		case 5:
			return ("Administrateur");
		default:
			return null;
	}
}


export default List;
