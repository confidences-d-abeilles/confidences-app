import React from 'react'

const Label = ( props ) => (
	<div className="mb-4 text-center">
		<h3 className="card-title text-left">Etiquette</h3>
		<button className="btn btn-info btn-sm" onClick={props.downloadLabel}>Télécharger</button>
	</div>
)

export default Label;
