import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CompanyWish extends Component {

    render () {
        return (
			<div className="container py-4">
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress">
							<div className="progress-bar" role="progressbar" style={{width: '80%'}}></div>
						</div>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-6">
						<p className="text-center lead my-4">Nous parrainons <input type="text" placeholder="1" style={{ borderWidth : '0 0 1px 0', width: '1em'}} /> ruche(s)</p>
						<ul>
							<li>C'est l'equivalent de x * 50 000 abeilles de plus pour preserver notre environnement</li>
							<li>C'est aussi x * 40 pots de miel par an</li>
						</ul>
						<p className="text-center">
						<Link to="/company/checkout" className="btn btn-primary">Continuer</Link>
						</p>
					</div>
				</div>
			</div>
        );
    }
}
