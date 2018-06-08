import React from 'react';
import Logo from '../../assets/img/logo.png'
const Maintenance = props => (
	<div className="m-5">
		<p className="lead">
			Cette section est en cours de maitenance. Vous pourrez très bientôt en profiter.<br />Nous vous prions de nous excuser pour la gêne occasionnée.
		</p>
		<p className="text-center">
			<em>L'équipe Confidences d'Abeilles</em><br />
			<img src={Logo} alt="Confidences d'Abeilles" className="img-fluid my-2" style={{ maxWidth: '10em' }} />
		</p>
	</div>
);


export default Maintenance;