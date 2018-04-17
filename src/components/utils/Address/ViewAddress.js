import React from 'react'
import Loading from '../Loading'

const ViewAddress = ( props ) => (
	(props.data)?
		<div>
			{props.data.sexe_m == true ?'M. ':'Mme. '}{props.data.name} {props.data.firstname}<br />
			{(props.data.company_name)?props.data.company_name:''}
			{(props.data.company_name)?<br />:''}
			{props.data.address_line1}<br />
			{(props.data.address_line2)?props.data.address_line2:''}
			{(props.data.address_line2)?<br />:''}
			{props.data.zipcode} {props.data.city}<br />
			{props.data.country}<br />
			{(props.data.phone)?props.data.phone:''}
		</div>
		:<Loading />
)

export default ViewAddress;
