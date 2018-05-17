import React from 'react'
import moment from 'moment'

const UserGeneral = ( props ) => (
	<div className="card">
		<div className="card-block">
			<h3 className="card-title text-center">Informations générales</h3>
			<p className="card-text">
				<strong>Date d'inscription :</strong> {moment(props.data.createdAt).format("DD/MM/YYYY HH:mm:ss")}<br />
				<div className="form-group d-flex m-0">
					<label className="radio-inline form-check-label">
					<input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={props.updateSexe} checked={props.data.sexe_m}/>
					&nbsp;M
					</label>
					<label className="radio-inline form-check-label ml-4">
					<input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={props.updateSexe} checked={!props.data.sexe_m}/>
					&nbsp;Mme
					</label>
				</div>
				<strong>Nom et Prénom :</strong> {props.data.firstname} {props.data.name}<br />
				{(props.data.company_name)?<span><strong>Nom de la societe :</strong> {props.data.company_name}<br /></span>:null}
				<strong>Adresse email :</strong> {props.data.email}<br />
				<strong>Téléphone :</strong> {props.data.phone}<br />
				<div className="form-group my-1 row">
					<label className="col-2"><strong>Rôle : </strong></label>
					<select name="user_type" value={props.data.user_type} onChange={props.promote} className="col-10 form-control form-control-sm">
						<option value="1">Particulier</option>
						<option value="2">Entreprise</option>
						<option value="3">Apporteur d'Affaires</option>
						<option value="4">Editor</option>
						<option value="5">Admin</option>
					</select>
					
				</div>
				{/* <Confirm class="btn btn-secondary btn-sm my-2" action={props.deleteUser.bind(this, this.state.selectedUser.id)} text="Supprimer l'utilisateur" /> */}
				
			</p>
		</div>
	</div>
)

export default UserGeneral;