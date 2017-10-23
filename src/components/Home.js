import React, { Component } from 'react';
import imgPlaceholder from '../assets/img/img-placeholder.gif';

export default class Home extends Component {

    render () {
        return (
			<div className="container py-4">

				<div className="row align-items-center">
					<div className="col">
						<h1>Parrainez une ruche, aidez-nous à protéger les abeilles</h1>
						<p>
							Confidences d’Abeilles vous propose
							aujourd’hui de l’aider à poursuivre sa
							mission. Vous aussi participez à la protection
							des abeilles, à la préservation de la
							biodiversité en parrainant une ruche.
						</p>
						<button className="btn btn-secondary" data-toggle="modal" data-target="#createAccount">Parrainer une ruche</button>
					</div>
					<div className="col">
						<div id="carouselHome" className="carousel slide" data-ride="carousel">
							<div className="carousel-inner" role="listbox">
								<div className="carousel-item active">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="First slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Second slide" />
								</div>
								<div className="carousel-item">
									<img className="d-block img-fluid" src={imgPlaceholder} alt="Third slide" />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="row align-items-center my-4">
					<div className="col">
						<p>
							Cette mission nous la menons avec vous, particuliers, entreprises, citoyens avertis qui nous
							accompagner depuis nos débuts. En financement un rucher pédagogique vous nous avez déjà
							permis d’organiser des journées découvertes et d’autres de formation ; nous sommes fiers
							aussi d’avoir lancés plusieurs néophytes dans le grand bain de l’apiculture !
						</p>
						<h2 className="text-center my-4">Ils parrainent déjà des ruches</h2>
						<p>
							Vous voulez apporter votre pierre à l’édifice et participer à cette belle aventure ? Nous vous
							proposons de parrainer une ruche. En échange de quoi, les butineuses vous feront découvrir
							leur précieux butin : une partie du miel qu’elles auront amassé !
						</p>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">La presse parle de nous</h2>
					</div>
				</div>
			</div>
        );
    }
}
