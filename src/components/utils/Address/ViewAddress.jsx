import React from 'react';
import Loading from '../Loading';

const ViewAddress = ({
  data : {
    sexe_m,
    name,
    firstname,
    company_name,
    address_line1,
    address_line2,
    zipcode,
    city,
    country,
    phone
  }
}) => (
  data
    ? (
      <div>
        {sexe_m === '1' || sexe_m === true ? 'M. ' : 'Mme. '}
        {name}
        {' '}
        {firstname}
        <br />
        {company_name || ''}
        {company_name ? <br /> : ''}
        {address_line1}
        <br />
        {address_line2 || ''}
        {address_line2 ? <br /> : ''}
        {zipcode}
        {' '}
        {city}
        <br />
        {country}
        <br />
        {phone || ''}
      </div>
    )
    : <Loading />
);

export default ViewAddress;
