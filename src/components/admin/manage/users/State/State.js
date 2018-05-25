import React from 'react'

const State = ( props ) => (
	<span>
		{(props.level === 0)?<span className="badge badge-danger">Non reglé</span>:null}
		{(props.level === 1)?<span className="badge badge-warning">En attente de validation</span>:null}
		{(props.level === 2)?<span className="badge badge-success">Payé</span>:null}
		{(props.level === 3)?<span className="badge badge-info">Payé et en place</span>:null}
	</span>	
)

export default State;