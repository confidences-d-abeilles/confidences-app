import React from 'react'
import Loading from '../../../utils/Loading'
import moment from 'moment'

const Details = props => (
	(props.data)?
		<div className="col-lg-6">
			<h3><small>Détails</small></h3>
			<hr />
			Offre : Parrainage de {props.data.bees} abeilles<br />
			{(props.data.start_date && props.data.state >= 2)?
				<div>
					Date de début : {moment(props.data.start_date).format("DD/MM/YYYY")}<br />
					Date de fin: {moment(props.data.end_date).format("DD/MM/YYYY")}
				</div>
			:<p>Votre soutien débutera dès la réception du paiement</p>}
		</div>
	:<Loading />
)

export default Details;