import React from 'react'

const Resume = ( props ) => (
	<p>
		Nous parrainons {props.hives} ruche{(props.hives > 1)?'s':''} qui {(props.hives > 1)?'seront':'sera'} marqué{(props.hives > 1)?'es':''} aux couleurs de notre entreprise. En
		contrepartie nous recevrons {props.pots} pots de miel de 125g produits par nos abeilles.
		Nous bénéficions en plus d’une page internet dédiée à notre entreprise et aux
		actions qu’elle mène en faveur de l’environnement. Des actualités de {(props.hives > 1)?'nos':'notre'} ruche{(props.hives > 1)?'s':''} y
		seront régulièrement postées, accessibles au grand public et à nos partenaires.
		<br /><br />
		<strong>Le coût total est de {props.price} euros par an.</strong>
		<br /><br />
		<button className="btn btn-primary" onClick={props.changeBundle}>Changer d'offre</button>
	</p>
)

export default Resume;
