import React, { Component } from 'react'
import { handleTick } from '../../services/FormService'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'

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
		super(props);
		this.state = {
			several : false
		}

		this.indPricesMo = [10, 17, 23, 27, 32];
		this.indPricesYe = [85, 160, 230, 295, 350];
	}

	render () {
		const pricesArr = (this.state.several)? this.indPricesMo : this.indPricesYe;
		const pricesCells = pricesArr.map(price => {
			let priceDispl;
			if (this.state.several) {
				priceDispl = price + '€/mois (' + price * 12 + '€/an)';
			}
			else {
				priceDispl = price + '€/an';
			}
			return <td key={price}>{priceDispl}</td>
		});

		return (
			<div>
				<table className="table table-sm mt-4 text-left">
					<tbody>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Votre nom sur une ruche</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Une page dédiée à la ruche avec des photos de vos abeilles et des actualités régulières</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Des pots de miel personnalisés</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Expédition des pots via le service Colissimo incluse</div></td></tr>
						<tr><td></td></tr>
					</tbody>
				</table>
				<div className="table-responsive">
					<table className="table">
						<tbody>
							<tr>
								<th>10 000 abeilles</th><th>20 000 abeilles</th><th>30 000 abeilles</th><th>40 000 abeilles</th><th>50 000 abeilles (1 ruche complète)</th>
							</tr>
							<tr>
								<td>8 pots de 250g</td><td>16 pots de 250g</td><td>24 pots de 250g</td><td>32 pots de 250g</td><td>40 pots de 250g</td>
							</tr>
							<tr>
								{pricesCells}
							</tr>
						</tbody>
					</table>
				</div>
				<div className="form-check my-4">
					<label className="form-check-label">
						<input type="checkbox" className="form-check-input" name="several" onClick={handleTick.bind(this)} /> Paiement en plusieurs fois
					</label>
				</div>
			</div>
		);
	}
}

class CompanyPrices extends Component {

	constructor(props) {
		super(props);

		this.entrPricesYe = [635, 560];
	}

	render () {
		return (
			<React.Fragment>
				<table className="table table-sm mt-4 text-left">
					<tbody>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Ruches aux couleurs de votre entreprise</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Une page dédiée à votre entreprise avec des photos de vos ruches et des actualités régulières</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Des pots de miel personnalisés</div></td></tr>
						<tr><td className="row no-gutters"><div className="col-lg-6 offset-lg-3 px-0">Expédition des pots via le service Colissimo incluse</div></td></tr>
						<tr><td></td></tr>
					</tbody>
				</table>
				<div className="table-responsive">
					<table className="table">
						<tbody>
							<tr>
								<th>1 à 4 ruches</th><th>5 ruches ou plus</th>
							</tr>
							<tr>
								<td>40 pots de miel de 250g par ruche</td>
								<td>40 pots de miel de 250g par ruche</td>
							</tr>
							<tr>
								<td>{this.entrPricesYe[0]}€ HT /ruche</td>
								<td>{this.entrPricesYe[1]}€ HT /ruche</td>
							</tr>
						</tbody>
					</table>
				</div>
			</React.Fragment>
		);
	}
}
