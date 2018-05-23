import React from 'react'
import State from '../State/State'
import moment from 'moment'

const Bundle = ( props ) => {
	if (props.data.bundles[0]) {
		const bundle = props.data.bundles[0];
		return (<div>
			<p className="m-0">
				Parrainage de {(bundle.hives)?bundle.hives+' ruches':bundle.bees+' abeilles'} <State level={bundle.state} /><br />
				Prise d'effet le {moment(bundle.start_date).format("DD/MM/YYYY à HH[h]mm")}<br />
				Expiration le {moment(bundle.end_date).format("DD/MM/YYYY à HH[h]mm")}
			</p>
		</div>)
	} else {
		return (<p className="text-muted">Cet utilisateur n'a pas encore choisi de parrainage</p>)
	}
}

export default Bundle;