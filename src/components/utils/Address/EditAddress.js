import React from 'react'

const EditAddress = ( props ) => (
	<div>
		{props.data && <form onSubmit={props.onSubmit}>
			<div className="form-group d-flex">
				<label className="radio-inline form-check-label">
					<input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={props.onChange} checked={props.data.sexe_m === '1'}/>
					&nbsp;M
				</label>
				<label className="radio-inline form-check-label ml-4">
					<input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={props.onChange} checked={props.data.sexe_m === '0'}/>
					&nbsp;Mme
				</label>
			</div>
			<div className="form-group">
				<label>Nom * et prénom *</label>
				<input type="text" name="line1" onChange={props.onChange} value={props.data.line1} className="form-control form-control-sm"/>
			</div>
			<div className="form-group">
				<label>Nom de l'entreprise</label>
				<input type="text" name="line2" onChange={props.onChange} value={props.data.line2} className="form-control form-control-sm" />
			</div>
				<div className="form-group">
					<label>Adresse ligne 1 *</label>
					<input type="text" name="line3" onChange={props.onChange} value={props.data.line3} className="form-control form-control-sm"/>
				</div>
				<div className="form-group">
					<label>Adresse ligne 2</label>
					<input type="text" name="line4" onChange={props.onChange} value={props.data.line4} className="form-control form-control-sm"/>
				</div>
				<div className="form-group row">
					<div className="col-12">
						<label>Code postal * et ville *</label>
					</div>
					<div className="col-4">
						<input type="text" name="zipcode" onChange={props.onChange} value={props.data.zipcode} className="form-control form-control-sm" />
					</div>
					<div className="col-8">
						<input type="text" name="city" onChange={props.onChange} value={props.data.city} className="form-control form-control-sm" />
					</div>
				</div>
				<div className="form-group">
					<label>Pays *</label>
					<input type="text" name="country" onChange={props.onChange} value={props.data.country} className="form-control form-control-sm" />
				</div>
				{props.data.type == 2 ?
					<div className="form-group">
						<label>Numéro de téléphone *</label>
						<input type="text" name="phone" onChange={props.onChange} value={props.data.phone} className="form-control form-control-sm" />
					</div>
					:
					null
				}
				<button className="btn btn-secondary btn-sm">Enregistrer</button>
		</form>}
	</div>
)

export default EditAddress;
