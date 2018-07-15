import React from 'react'
import {Document, Page} from 'react-pdf';
import Loading from '../../../../utils/Loading.js'
import '../../../../utils/css/LabelPdf.css'
const config = require('../../../../../config.js')

const Label = ( props ) => (
	<div className="card mb-4 bg-light">
		<h4 className="card-header">Etiquette</h4>
		<div className="card-body p-2 text-center">
			{props.labelFilename ?
			<p className="card-text">
				<button className="mb-1 btn btn-info btn-sm" onClick={props.downloadLabel}>Télécharger</button>
				<a href={config.cdn_url+'/label/'+props.labelFilename} target="_blank">
					<Document file={config.cdn_url+'/label/'+props.labelFilename} >
						<Page pageNumber={1} width={500} className="label" />
					</Document>
				</a>
			</p>:(
			<p className="card-text">
				props.loading ?
					<Loading />:
					<p>Label non trouvé</p>
			</p>
			)}
		</div>
	</div>
);

export default Label;
