import React from 'react'

const Payment = ( props ) => (
	<div>
		<h3 className="card-title">Paiement</h3>
		<h4 className="my-4">
			{(props.status === 0)?"Non reglé":''}
			{(props.status === 1)?"En attente de validation":''}
			{(props.status === 2)?"Payé":''}
			{(props.status === 3)?"Payé et en place":''}
		</h4>
		<div className="form-group">
			<select className="form-control" onChange={props.changeState} name="state" value={props.status}>
				<option value="0">Non reglé</option>
				<option value="1">Paiement en attente de validation</option>
				<option value="2">Payé</option>
				<option value="3">Payé et en place</option>
			</select>
		</div>
	</div>
)

export default Payment;
