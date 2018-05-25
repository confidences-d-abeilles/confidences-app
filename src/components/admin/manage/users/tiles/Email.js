import React from 'react'
import moment from 'moment'
import Newsletter from './Newsletter'

/* This stateless component take a user as props */

const Email = ( props ) => (
	<div>
		<Newsletter firstname={props.user.firstname} email={props.user.email} />
		<h4><small>Historique des envois transactionnels</small></h4>
		<table className="table table-sm">
			<tbody>
				<tr><th>Type de mail</th><th>Date</th><th>État</th></tr>
				{props.user.emails.map((elem) => {
					return (
						<tr><td>{elem.type_email} : {getEmailType(elem.type_email)}</td><td>{moment(elem.time).format("DD/MM/YY HH[h]mm")}</td><td>{getTag(elem.state)}</td></tr>
						);
				})}
			</tbody>
		</table>
		<hr/>
	</div>
)

export default Email;

const getEmailType = (type) => {
	if (type === 1) {
		return ("Premiers pas (inscription)");
	}
	if (type === 2) {
		return ("Houston, we had a problem");
	}
	if (type === 3) {
		return ("Paiement en attente de validation (clic sur virement effectué)");
	}
	if (type === 4) {
		return ("Fin onboard avec payer plus tard");
	}
	if (type === 5) {
		return ("Confirmation parrainage (CB ok)");
	}
	if (type === 6) {
		return ("Virement OK");
	}
	if (type === 7) {
		return ("Échec paiement");
	}
	if (type === 8) {
		return ("Attribution ruche en cours");
	}
	if (type === 9) {
		return ("Bonne nouvelle (ruche attribuée)");
	}
	if (type === 10) {
		return ("Cadeau");
	}
	if (type === 11) {
		return ("Attribution longue");
	}
	if (type === 12) {
		return ("Relance 4 jours");
	}
	if (type === 13) {
		return ("Relance 2 semaines");
	}
	if (type === 14) {
		return ("Relance 4 semaines");
	}
	if (type === 15) {
		return ("Relance 8 semaines");
	}
	if (type === 16) {
		return ("Expedition miel");
	}
	if (type === 202) {
		return ("Paiement attente");
	}
	if (type === 203) {
		return ("Attribution ruche en cours");
	}
	if (type === 205) {
		return ("Virement ok");
	}
}

const getTag = (state) => {
	if (state === 0) {
		return (<span className="badge badge-info">Programmé</span>)
	}
	if (state === 1) {
		return (<span className="badge badge-danger">Annulé</span>)
	}
	if (state === 2) {
		return (<span className="badge badge-success">Envoyé</span>)
	}
}