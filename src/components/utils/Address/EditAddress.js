import React from 'react'

const EditAddress = ( props ) => (
	<div>
		{props.data && <form onSubmit={props.onSubmit}>
			<div className="form-group d-flex">
				<label className="radio-inline form-check-label">
					<input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={props.onChange} checked={props.data.sexe_m ^ 0}/>
					&nbsp;M
				</label>
				<label className="radio-inline form-check-label ml-4">
					<input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={props.onChange} checked={props.data.sexe_m ^ 1}/>
					&nbsp;Mme
				</label>
			</div>
			<div className="form-group">
				<label>Prénom *</label>
				<input type="text" name="firstname" onChange={props.onChange} value={props.data.firstname} className="form-control form-control-sm"/>
			</div>
			<div className="form-group">
				<label>Nom *</label>
				<input type="text" name="name" onChange={props.onChange} value={props.data.name} className="form-control form-control-sm"/>
			</div>
			{props.company === true ?
			<div className="form-group">
				<label>Nom de l'entreprise</label>
				<input type="text" name="company_name" onChange={props.onChange} value={props.data.company_name} className="form-control form-control-sm" />
			</div>
			:
			null}
				<div className="form-group">
					<label>Adresse ligne 1 *</label>
					<input type="text" name="address_line1" onChange={props.onChange} value={props.data.address_line1} className="form-control form-control-sm"/>
				</div>
				<div className="form-group">
					<label>Adresse ligne 2</label>
					<input type="text" name="address_line2" onChange={props.onChange} value={props.data.address_line2} className="form-control form-control-sm"/>
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
				{props.data.type === 2 ?
					<div className="form-group">
						<label>Numéro de téléphone *</label>
						<input type="text" name="phone" onChange={props.onChange} value={props.data.phone} className="form-control form-control-sm" />
					</div>
					:
					null
				}
				<div className="form-group text-center">
					<button className="btn btn-secondary btn-sm">Enregistrer</button>
				</div>
		</form>}
	</div>
)

export default EditAddress;
