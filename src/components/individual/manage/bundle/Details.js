import React from 'react'
import Loading from '../../../utils/Loading'
import moment from 'moment'

const Details = props => (
	<div>
		{(props.data)?
			<div>
				<h3><small>Détails</small></h3>
				<hr />
				Offre : Parrainage de {props.data.bees} abeilles<br />
				{(props.data.start_date && props.data.state >= 2)?
					<div>
						Date de début : {moment(props.data.start_date).format("DD/MM/YYYY")}<br />
						Date de fin: {moment(props.data.end_date).format("DD/MM/YYYY")}
					</div>
				:<p>Votre offre débutera dès la réception du paiement</p>}
			</div>
		:<Loading />}
	</div>
)

export default Details;