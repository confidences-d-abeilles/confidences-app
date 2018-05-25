import React from 'react'


const SquareImg = (props) => (
	<div style={{ width: '100%', paddingTop: '100%', backgroundImage: `url(${props.src})`, backgroundSize: 'cover' }}>
	</div>
)

export default SquareImg;
