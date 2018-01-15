import React, { Component } from 'react'
import { handleTick } from '../services/FormService'
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class Prices extends Component {

	constructor(props) {
		super(props)
		ReactGA.pageview(this.props.location.pathname);
	}

	render() {
		return (
			<div className="container">
				<Meta title="Tarifs"/>
				<div className="row">
					<div className="col">
						<h2 className="text-center my-4">Tarifs</h2>
						<ul className="nav nav-tabs" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" data-toggle="tab" href="#individual">Particulier</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" data-toggle="tab" href="#company">Entreprise</a>
							</li>
						</ul>
						<div className="tab-content" style={{ overflowX : 'auto' }}>
							<div id="individual" className="tab-pane active" role="tabpanel">
								<IndividualPrices />
							</div>
							<div id="company" className="tab-pane" role="tabpanel">
								<CompanyPrices />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

class IndividualPrices extends Component {

	constructor(props) {
		super(props)
		this.state = {
			several : false
		}
	}

	render () {
		return (
			<div>
				<div className="form-check my-4">
					<label className="form-check-label">
						<input type="checkbox" className="form-check-input" name="several" onClick={handleTick.bind(this)} /> Paiement en plusieurs fois
					</label>
				</div>
				{(this.state.several)?
				<table className="table">
					<tbody>
						<tr>
							<th>10 000 abeilles</th><th>20 000 abeilles</th><th>30 000 abeilles</th><th>40 000 abeilles</th><th>50 000 abeilles (1 ruche complète)</th>
						</tr>
						<tr>
							<td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Une ruche à votre nom</td>
						</tr>
						<tr>
							<td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à votre ruche avec photos & actualités</td>
						</tr>
						<tr>
							<td>8 pots de 250g</td><td>16 pots de 250g</td><td>24 pots de 250g</td><td>32 pots de 250g</td><td>40 pots de 250g</td>
						</tr>
						<tr>
							<td>8€/mois (96€/an)</td><td>14€/mois (168€/an)</td><td>19€/mois (228€/an)</td><td>23€/mois (276€/an)</td><td>27€/mois (324€/an)</td>
						</tr>
					</tbody>
				</table>:
				<table className="table">
					<tbody>
						<tr>
							<th>10 000 abeilles</th><th>20 000 abeilles</th><th>30 000 abeilles</th><th>40 000 abeilles</th><th>50 000 abeilles (1 ruche complète)</th>
						</tr>
						<tr>
							<td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Votre nom sur une ruche</td><td>Une ruche à votre nom</td>
						</tr>
						<tr>
							<td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à la ruche avec photos & actualités</td><td>Une page dédiée à votre ruche avec photos & actualités</td>
						</tr>
						<tr>
							<td>8 pots de 250g</td><td>16 pots de 250g</td><td>24 pots de 250g</td><td>32 pots de 250g</td><td>40 pots de 250g</td>
						</tr>
						<tr>
							<td>70€/an</td><td>135€/an</td><td>195€/an</td><td>250€/an</td><td>300€/an</td>
						</tr>
					</tbody>
				</table>
				}
			</div>
		);
	}
}

class CompanyPrices extends Component {

	render () {
		return (
			<table className="table my-4">
				<tbody>
					<tr>
						<th>1 à 4 ruches</th><th>5 ruches ou plus</th>
					</tr>
					<tr>
						<td>Ruche(s) aux couleurs de votre entreprise</td>
						<td>Ruches aux couleurs de votre entreprise</td>
					</tr>
					<tr>
						<td>Une page dédiée à votre entreprise avec des photos et actualités</td>
						<td>Une page dédiée à votre entreprise avec des photos et actualités</td>
					</tr>
					<tr>
						<td>80 pots de miel de 125g par ruche</td>
						<td>80 pots de miel de 125g par ruche</td>
					</tr>
					<tr>
						<td>545€ HT /ruche</td>
						<td>495€ HT /ruche</td>
					</tr>
				</tbody>
			</table>
		);
	}
}
