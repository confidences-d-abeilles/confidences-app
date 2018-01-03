import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactGA from 'react-ga';

export default class Jobs extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<img src={require('../assets/img/jobs.jpg')} alt="Gaetan et Nicolas" className="img-fluid" />
					</div>
				</div>
				<div className="row mt-4 justify-content-center align-items-center">
					<div className="col-lg-9 col-md-10 col-sm-12">
						<h1 className="text-center my-4">Travailler avec nous ? ☻</h1>
						<p>
							Confidences d’Abeilles c’est précisément <strong>5.504.152 collaborateurs</strong> ; collaboratrices même
							à 98% ! Oui, vous avez bien lu ! Et au niveau du management cela se passe comment ? En
							fait, il faut savoir qu’une ruche c’est <strong>50 000 ouvrières</strong> qui observent à la lettre la discipline
							dictée par leur reine.<br />
							Ceci explique donc cela ☻<br /><br />
							Trève de plaisanterie. Vous êtes en freelance, vous cherchez un stage, vous avez des
							talents à revendre ? Rejoindre une jeune équipe, dynamique et passionnée par son travail
							vous tente ? Alors n’hésitez plus, nous avons des challenges et des missions à la hauteur
							de vos ambitions ! Nous sommes comme vous, jeunes et entreprennants, nous croyons au
							travail passionné et à la réussite !<br /><br />
							Pour accompagner notre développement ou celui de nos partenaires nous avons besoin
							de nouveaux talents, de personnes passionnées ; non, nous ne cherchons pas que des
							apiculteurs, bien au contraire !<br /><br />
							Que ce soit en Web Development (FRONT/BACK), Web Design (UI/UX), Business
							Development, Communication / Marketing, Community &amp; Event Management ou encore
							en Systèmes embarqués / communicants nous sommmes intéressés. Retrouvez nos offres
							de stage de 4 à 6 mois.
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/reactjs">Stage ReactJS / NodeJS developer</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/designer">Stage UX Designer</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/marketing">Stage Communication / Marketing</Link>
						</p>
						<p className="text-center">
							<Link className="btn btn-secondary" to="/jobs/event">Stage Community / Event Manager</Link>
						</p>
						<p className="text-center my-5">
							<Link className="btn btn-secondary" to="/apply">Postuler</Link>
						</p>
						<p>
							Aucune offre ne vous correspond ? Confidences d’Abeilles et ses partenaires sont toujours
							à la recherche de personnes talentueuses, n’hésitez pas à postuler !
						</p>
					</div>
				</div>
			</div>
		)
	}
}
