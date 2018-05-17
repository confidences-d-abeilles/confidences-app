import React from 'react'
import Loading from '../../../utils/Loading'
import { Link } from 'react-router-dom'
import State from './State.js'
import FontAwesome from 'react-fontawesome'

const List = ( props ) => (
	(props.data)?
		<table className="table table-hover">
			<thead>
				<tr>
					<th>Client</th>
					<th>Offre</th>
					<th>Etat du paiement</th>
				</tr>
			</thead>
			<tbody>
				{props.data.map((bundle) => (
					<tr key={bundle.id} onClick={props.select.bind(this, bundle.id)} style={{ cursor : 'pointer' }} >
						<td>{(bundle.present)?<span><FontAwesome name="gift" /> </span>:null}{(bundle.owner)?bundle.owner.firstname+' '+bundle.owner.name+' '+bundle.owner.company_name:'[corrupted]'}</td>
						<td>{(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'}</td>
						<td><State level={bundle.state} /></td>
					</tr>
				))}
			</tbody>
		</table>
		:<Loading />
)


export default List;
