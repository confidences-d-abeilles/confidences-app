import React from 'react'
import Loading from '../Loading'

const ViewAddress = ( props ) => (
	(props.data)?
		<div>
			{props.data.sexe_m === '0'?'Mme. ':'M. '}{props.data.line1}<br />
			{(props.data.line2)?props.data.line2:''}
			{(props.data.line2)?<br />:''}
			{props.data.line3}<br />
			{(props.data.line4)?props.data.line4:''}
			{(props.data.line4)?<br />:''}
			{props.data.zipcode} {props.data.city}<br />
			{props.data.country}<br />
			{(props.data.phone)?props.data.phone:''}
		</div>
		:<Loading />
)

export default ViewAddress;
