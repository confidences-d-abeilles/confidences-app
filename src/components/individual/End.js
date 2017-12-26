import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Main from '../../assets/img/end_part.jpg';
import ReactGA from 'react-ga';

export default class IndividualEnd extends Component {

    constructor(props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
    }

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col-8">
						<h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains d'abeilles.</h2>
						<p className="text-center">
							<img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
                        </p>
						<h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous remercie !</h4>
                        <p className="text-center">
                            <Link to="/individual/manage" className="btn btn-primary">Mon compte</Link>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
