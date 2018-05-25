import React from 'react'

const Payment = ( props ) => (
	<div className="mb-4 text-center">
		<h3 className="card-title text-left">Paiement</h3>
		<div className="form-group">
			<select className="form-control" onChange={props.changeState} name="state" value={props.state}>
				<option value="0">Non reglé</option>
				<option value="1">Paiement en attente de validation</option>
				<option value="2">Payé</option>
				<option value="3">Payé et en place</option>
			</select>
		</div>
		<button className="btn btn-info btn-sm" onClick={props.submitState}>Enregistrer</button>
	</div>
)

export default Payment;
