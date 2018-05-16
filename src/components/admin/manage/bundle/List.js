import React from 'react'
import Loading from '../../../utils/Loading'
import { Link } from 'react-router-dom'

const List = ( props ) => (
	(props.data)?
		<table className="table">
			<tbody>
				<tr>
					<th>Gérer</th>
					<th>Client</th>
					<th>Offre</th>
					<th>Etat du paiement</th>
				</tr>
				{props.data.map((bundle) => (
					<tr key={bundle.id}>
						<td><Link to={"/admin/manage/bundle/"+bundle.id} className="btn btn-link btn-sm">Gérer</Link></td>
						<td>{(bundle.owner)?bundle.owner.firstname+' '+bundle.owner.name+' '+bundle.owner.company_name:'[corrupted]'}</td>
						<td>{(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'}</td>
						<td>{bundle.state}</td>
					</tr>
				))}
			</tbody>
		</table>
		:<Loading />
)
export default List;
