import React from 'react'
import { Link } from 'react-router-dom'

const Hive = props => (
	<div className="col-lg-6">
		<h3><small>Ma ruche</small></h3>
		<hr />
		{(props.hive)?
			<Link to={'/hive/'+props.hive.id}>{props.hive.name}</Link>	
		:"Aucune ruche ne vous a été attribuée pour l'instant"}
	</div>
)

export default Hive;