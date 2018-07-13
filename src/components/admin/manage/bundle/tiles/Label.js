import React from 'react'
import SquareImg from '../../../../utils/SquareImg';
const config = require('../../../../../config.js')

const Label = ( props ) => (
	<div className="mb-4 text-center">{props.labelUrl}
		<h3 className="card-title text-left">Etiquette</h3>
		<button className="btn btn-info btn-sm" onClick={props.downloadLabel}>Télécharger</button>
		{props.labelFilename &&
			<a href={config.cdn_url+'/label/'+props.labelFilename} target="_blank">
				<SquareImg className="card-img-top img-fluid" src={config.cdn_url+'/label/'+props.labelFilename} alt="Bundle label" />
			</a>
		}
	</div>
)

export default Label;
