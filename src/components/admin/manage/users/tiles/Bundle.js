import React from 'react'
import State from '../State/State'
import moment from 'moment'

const Bundle = ( props ) => {
	if (props.data.bundles[0]) {
		const bundle = props.data.bundles[0];

		let beginDate = 'unavailable';
		let endDate = 'unavailable';
		if (typeof bundle.start_date !== 'undefined' && bundle.start_date) {
			beginDate = moment(bundle.start_date).format("DD/MM/YYYY à HH[h]mm");
		}
		if (typeof bundle.end_date !== 'undefined' && bundle.end_date) {
			endDate = moment(bundle.end_date).format("DD/MM/YYYY à HH[h]mm");
		}

		return (<div>
			<p className="m-0">
				Parrainage de {(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'} <State level={bundle.state} /><br />
				Prise d'effet le {beginDate}<br />
				Expiration le {endDate}
			</p>
		</div>)
	} else {
		return (<p className="text-muted">Cet utilisateur n'a pas encore choisi de parrainage</p>)
	}
}

export default Bundle;
