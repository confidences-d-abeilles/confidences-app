import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

export default class CompanyEnd extends Component {

    constructor(props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
    }

    render () {
        return (
			<div className="container py-4">
                <Meta title="Félicitations"/>
				<div className="row justify-content-center">
					<div className="col-8">
						<h2 className="text-center my-4">Felicitations ! Vous faites desormais parti de la grande famille des parrains de ruches.</h2>
						<p className="text-center">
							<img src={imgPlaceholder} className="img-fluid mx-auto d-block" alt="Img temp" />
							<br />
							Toutes l'equipe de Confidences  d'Abeilles vous remercie !
						</p>
						<div className="row justify-content-center">
							<div className="col text-center">
								<Link to="/company/manage" className="btn btn-primary btn-lg">Mon compte</Link>
							</div>
							<div className="col text-center">
								<button className="btn btn-primary btn-lg">Ma page dediee</button>
							</div>
						</div>
					</div>
				</div>
			</div>
        );
    }
}
