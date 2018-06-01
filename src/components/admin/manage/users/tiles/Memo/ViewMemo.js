import React from 'react'
import Loading from '../../../../../utils/Loading'

const ViewMemo = props => (
	<div>
		{(props.content)?props.content:<Loading />}<br />
		<button className="btn btn-sm btn-secondary my-2" onClick={props.edit} >Editer</button>
	</div>
)

export default ViewMemo;