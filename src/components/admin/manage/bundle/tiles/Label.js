import React from 'react'
import {Document, Page} from 'react-pdf';
import Loading from '../../../../utils/Loading.js'
import '../../../../utils/css/LabelPdf.css'
const config = require('../../../../../config.js')

const Label = ( props ) => (
	<div className="mb-4 text-center">
		<h3 className="card-title text-left">Etiquette</h3>
		{props.labelFilename ? <React.Fragment>
			<button className="mb-1 btn btn-info btn-sm" onClick={props.downloadLabel}>Télécharger</button>
			<a href={config.cdn_url+'/label/'+props.labelFilename} target="_blank">
				<Document file={config.cdn_url+'/label/'+props.labelFilename} >
					<Page pageNumber={1} width={500} className="label" />
				</Document>
			</a>
		</React.Fragment>:(
			props.loading ?
				<Loading />:
				<p>Label non trouvé</p>
			)
		}
	</div>
);

export default Label;
