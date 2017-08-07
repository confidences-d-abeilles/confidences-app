import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class IndividualWish extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '75%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<p className="text-center lead my-4">
							Je decide de parrainer<br />
							<select>
								<option>10 000 abeilles</option>
								<option>20 000 abeilles</option>
								<option>30 000 abeilles</option>
								<option>40 000 abeilles</option>
								<option>1 ruche complete (50 000 abeilles)</option>
								<option>2 ruches</option>
								<option>3 ruches</option>
							</select>
						</p>

						<ul>
							<li>CCe sont X abeilles de plus qui viendront renforcer la population du rucher et participer à la préservation de la biodiversité.</li>
							<li>C'est aussi 8*i pots de miel produits par vos abeilles que vous recevrez !</li>
						</ul>
						<p className="text-center">
						<Link to="/individual/checkout" className="btn btn-primary">Continuer</Link>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
