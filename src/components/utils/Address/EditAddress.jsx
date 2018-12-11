import React from 'react';

const EditAddress = ({ data, onSubmit, onChange, company }) => (
  <div>
    {data && (
    <form onSubmit={onSubmit}>
      <div className="form-group d-flex">
        <label className="radio-inline form-check-label">
          <input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={onChange} checked={data.sexe_m ^ 0} />
          &nbsp;M

        </label>
        <label className="radio-inline form-check-label ml-4">
          <input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={onChange} checked={data.sexe_m ^ 1} />
          &nbsp;Mme

        </label>
      </div>
      <div className="form-group">
        <label>Prénom *</label>
        <input type="text" name="firstname" onChange={onChange} value={data.firstname} className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label>Nom *</label>
        <input type="text" name="name" onChange={onChange} value={data.name} className="form-control form-control-sm" />
      </div>
      {company === true
        ? (
          <div className="form-group">
            <label>Nom de l'entreprise</label>
            <input type="text" name="company_name" onChange={onChange} value={data.company_name} className="form-control form-control-sm" />
          </div>
        )
        : null}
      <div className="form-group">
        <label>Adresse ligne 1 *</label>
        <input type="text" name="address_line1" onChange={onChange} value={data.address_line1} className="form-control form-control-sm" />
      </div>
      <div className="form-group">
        <label>Adresse ligne 2</label>
        <input type="text" name="address_line2" onChange={onChange} value={data.address_line2} className="form-control form-control-sm" />
      </div>
      <div className="form-group row">
        <div className="col-12">
          <label>Code postal * et ville *</label>
        </div>
        <div className="col-4">
          <input type="text" name="zipcode" onChange={onChange} value={data.zipcode} className="form-control form-control-sm" />
        </div>
        <div className="col-8">
          <input type="text" name="city" onChange={onChange} value={data.city} className="form-control form-control-sm" />
        </div>
      </div>
      <div className="form-group">
        <label>Pays *</label>
        <input type="text" name="country" onChange={onChange} value={data.country} className="form-control form-control-sm" />
      </div>
      {data.type === 2
        ? (
          <div className="form-group">
            <label>Numéro de téléphone *</label>
            <input type="text" name="phone" onChange={onChange} value={data.phone} className="form-control form-control-sm" />
          </div>
        )
        : null
        }
      <div className="form-group text-center">
        <button type="submit" className="btn btn-secondary btn-sm">Enregistrer</button>
      </div>
    </form>
    )}
  </div>
);

export default EditAddress;
