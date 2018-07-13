import React from 'react'
import {Document, Page} from 'react-pdf';
import '../../../../utils/css/LabelPdf.css'
const config = require('../../../../../config.js')

const Label = ( props ) => (
	<div className="mb-4 text-center">{props.labelUrl}
		<h3 className="card-title text-left">Etiquette</h3>
		<button className="mb-1 btn btn-info btn-sm" onClick={props.downloadLabel}>Télécharger</button>
		{props.labelFilename &&
			<a href={config.cdn_url+'/label/'+props.labelFilename} target="_blank">
				<Document file={config.cdn_url+'/label/'+props.labelFilename} >
					<Page pageNumber={1} width="500" className="label" />
				</Document>
			</a>
		}
	</div>
)

export default Label;
