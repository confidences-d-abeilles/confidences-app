import React, { Component } from 'react';
import imgPlaceholder from '../assets/img/img-placeholder.gif';

export default class Home extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row align-items-center">
					<div className="col">
						<h1>Vos abeilles n'ont jamais ete aussi proche de prendre leur envol !</h1>
						<p>
							Il ne vous reste que quelques informations a saisir et ca sera fait !
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
				<div className="row align-items-center">
					<div className="col">
						<h2 className="text-center my-4">Ils parrainent déjà des ruches</h2>
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
