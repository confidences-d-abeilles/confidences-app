import React from 'react';
import { Button } from '@cda/button';
import Input from '@cda/input';

const EditAddress = props => (
  <div>
    {props.data && (
    <form onSubmit={props.onSubmit}>
      <div className="form-group d-flex">
        <label className="radio-inline form-check-label">
          <Input type="radio" name="sexe_m" value="1" onChange={props.onChange} checked={props.data.sexe_m ^ 0} data-cy="male" />
          &nbsp;M
        </label>
        <label className="radio-inline form-check-label ml-4">
          <Input type="radio" name="sexe_m" value="0" onChange={props.onChange} checked={props.data.sexe_m ^ 1} />
          &nbsp;Mme
        </label>
      </div>
      <label>Prénom *</label>
      <Input type="text" name="firstname" onChange={props.onChange} value={props.data.firstname} />
      <label>Nom *</label>
      <Input type="text" name="name" onChange={props.onChange} value={props.data.name} />
      {props.company === true
        ? (
          <>
            <label>Nom de l'entreprise</label>
            <Input type="text" name="company_name" onChange={props.onChange} value={props.data.company_name} />
          </>
        )
        : null}
      <label>Adresse ligne 1 *</label>
      <Input type="text" name="address_line1" onChange={props.onChange} value={props.data.address_line1} />
      <label>Adresse ligne 2</label>
      <Input type="text" name="address_line2" onChange={props.onChange} value={props.data.address_line2} />
      <label>Code postal *</label>
      <Input type="text" name="zipcode" onChange={props.onChange} value={props.data.zipcode} />
      <label>Ville *</label>
      <Input type="text" name="city" onChange={props.onChange} value={props.data.city} />
      <label>Pays *</label>
      <Input type="text" name="country" onChange={props.onChange} value={props.data.country} />
      {props.data.type === 2
        ? (
          <>
            <label>Numéro de téléphone *</label>
            <Input type="text" name="phone" onChange={props.onChange} value={props.data.phone} />
          </>
        )
        : null
        }
      <Button>Enregistrer</Button>
    </form>
    )}
  </div>
);

export default EditAddress;
