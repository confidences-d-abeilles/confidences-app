import React from 'react'
import moment from 'moment'
import Newsletter from './Newsletter'
import Sendmail from './Sendmail/Sendmail'

/* This stateless component take a user as props */

const Email = ( props ) => (
	<div>
		<Newsletter firstname={props.user.firstname} email={props.user.email} />
		<Sendmail id={props.user.id} refresh={props.refresh} />
		<h4><small>Mail stack</small></h4>
		<table className="table table-sm">
			<tbody>
				<tr><th>ID</th><th>Date</th><th>État</th></tr>
				{props.user.emails.map((elem) => {
					return (
						<tr key={elem.id} ><td>{elem.type_email}{getEmailType(elem.type_email)}</td><td>{moment(elem.time).format("DD/MM/YY HH[h]mm")}</td><td>{getTag(elem.state)}</td></tr>
						);
				})}
			</tbody>
		</table>
		<hr/>
	</div>
)

export default Email;

const getEmailType = (type) => {
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