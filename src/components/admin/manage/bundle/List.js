import React from 'react'
import Loading from '../../../utils/Loading'
import { Link } from 'react-router-dom'

const List = ( props ) => (
	(props.data)?
		<table className="table">
			<tbody>
				<tr>
					<th>Client</th>
					<th>Client</th>
					<th>Client</th>
					<th>Client</th>
				</tr>
				{props.data.map((bundle) => (
					<tr>
						<td>{(bundle.owner)?bundle.owner.firstname+' '+bundle.owner.name+' '+bundle.owner.company_name:'[corrupted]'}</td>
						<td>{(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'}</td>
						<td>{bundle.state}</td>
						<td><Link to={"/admin/manage/bundle/"+bundle.id} className="btn btn-link btn-sm">Gérer</Link></td>
					</tr>
				))}
			</tbody>
		</table>
		:<Loading />
)
export default List;
