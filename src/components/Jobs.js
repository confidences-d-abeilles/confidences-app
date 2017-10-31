import React, { Component } from 'react';

export default class Jobs extends Component {

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<img src={require('../assets/img/jobs.jpg')} alt="Gaetan et Nicolas" className="img-fluid" />
					</div>
				</div>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-9">
						<p>
							Confidences d’Abeilles c’est <strong>5.504.152 employés</strong> précisément et <strong>98% de femme</strong>. Oui,
							vous avez bien lu ! Et au niveau du management cela se passe comment ? En fait, il faut
							savoir qu’une ruche c’est 50 000 ouvrières qui obéissent à leur reine.<br />
							Ceci explique donc cela ...<br /><br />
							Trève de plaisanterie. Vous êtes en freelance, vous cherchez un stage, vous avez des
							talents à revendre ? Rejoindre une jeune équipe, dynamique et passionnée par son travail
							vous tente ? Alors n’hésitez plus, nous avons des challenges et des missions à la hauteur
							de vos ambitions ! Nous sommes comme vous, jeunes et entreprennants, nous croyons au
							travail passionné et à la réussite !<br /><br />
							Pour accompagner notre développement ou celui de nos partenaires nous avons besoin
							de nouveaux talents, de personnes passionnées ; et non, nous ne cherchons pas que des
							apiculteurs, bien au contraire !<br />
							Que ce soit en Communication, Community Management, Business Development,
							Systèmes embarqués / communicants, développement web / mobile, nous sommmes
							intéressés.<br /><br />
							Aucune offre ne vous correspond ? Confidences d’Abeilles et ses partenaires sont toujours
							à la recherche de personnes talentueuses, n’hésitez pas à postuler !
						</p>
					</div>
				</div>
			</div>
		)
	}
}
