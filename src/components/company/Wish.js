import React, { Component } from 'react';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import { Redirect } from 'react-router-dom';
import ReactGA from 'react-ga';
import MainProduct from './wish/MainProduct'
import Product from './wish/Product'

export default class CompanyWish extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			products: [],
			coupons: [],
			couponsOk: [],
			options: [],
			optionsOk: [],
			codes: [],
			codesOk: [],
			optionSelect: "",
			price: "0",
			pots: "80",
			code: '',
			codeResult: '',
			redirect: false
		}
	}

	componentDidMount() {
		this.getProducts();
		this.getCoupons();
	}

	handleSubmit() {
		request({
			url : '/bundle/company',
			method : 'post',
			data : {
				products: this.state.products,
				coupons: this.state.couponsOk,
				options: this.state.optionsOk,
				codes: this.state.codesOk
			}
		}, this.refs.notif)
		.then((res) => {
			this.setState({ redirect : true})
		})
		.catch((err) => {
		});
	}

	updateProducts(product) {
		let tmp = this.state.products.filter((e, key) => {
			return (e.id !== product.id)
		});
		tmp.push(product);
		tmp.sort(this.sortProducts);
		this.setState({
			products: tmp
		}, () => {
			this.calcCoupons();
		});
	}

	sortProducts(a, b) {
		return (a.createdAt > b.createdAt)
	}

	calcPrice() {
		console.log(this.state.couponsOk);
		console.log(this.state.optionsOk);
		console.log(this.state.codesOk);
		this.setState({ price : '0' }, () => {
			this.state.products.map((e) => {
				const qty = (e.qty)?parseFloat(e.qty):0;
				this.setState((prev) => {
					if (e.type === 10) {
						return { price: parseFloat(prev.price) + parseFloat(e.price) * qty, pots : 80 * qty }
					}
					return { price: parseFloat(prev.price) + parseFloat(e.price) * qty}
				})
			});
			this.state.couponsOk.map((e) => {
				this.setState((prev) => {
					return { price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty) }
				})
			})
			this.state.optionsOk.map((e) => {
				this.setState((prev) => {
					return { price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty), pots: parseFloat(prev.pots) - parseFloat(e.pots) * parseFloat(e.qty) }
				})
			})
			this.state.codesOk.map((e) => {
				this.setState((prev) => {
					return { price: parseFloat(prev.price) - parseFloat(e.amount) * parseFloat(e.qty) }
				})
			})
		});
	}

	calcCoupons() {
		let tmp = [];
		let tmp2 = [];
		let tmp3 = [];
		let tmp4 = [];
		this.state.coupons.map((coupon) => {
			this.state.products.forEach((product) => {
				if (coupon.type === 0 && coupon.product.id === product.id && product.qty >= coupon.min) {
					coupon.qty = product.qty;
					tmp.push(coupon);
					this.setState((prev) => { price: prev.price - coupon.amount * coupon.qty })
				}
				if (coupon.type === 1 && coupon.product.id === product.id) {
					coupon.qty = product.qty;
					tmp2.push(coupon);
					this.setState((prev) => { price: prev.price - coupon.amount * coupon.qty })
				}
				if (coupon.type === 2 && coupon.product.id === product.id && product.qty <= coupon.max) {
					coupon.qty = product.qty;
					tmp3.push(coupon);
					this.setState((prev) => { price: prev.price - coupon.amount * coupon.qty })
				}
			});
		});
		tmp3.map((code) => {
			tmp4 = this.state.codesOk.filter((codeOk) => {
				if (code.id === codeOk.id) {
					return true;
				}
				return false;
			})
		})
		this.setState({
			couponsOk: tmp,
			codes: tmp3,
			codesOk: tmp4,
			options: tmp2
		}, () => {
			this.calcPrice();
		});
	}

	handleCode(e) {
		e.preventDefault();
		let tmp = [];
		let notValid = true;
		this.state.codes.map((coupon) => {
			this.state.products.forEach((product) => {
				if (coupon.type === 2 && coupon.code === this.state.code && coupon.product.id === product.id) {
					this.setState({
						code: '',
						codeResult: 'Le code a bien été appliqué'
					})
					notValid = false;
					coupon.qty = product.qty;
					tmp.push(coupon);
				}
			});
		});
		if (notValid) {
			this.setState({
				codeResult: "Ce code n'est pas applicable",
				code: ''
			})
		}
		this.setState({
			codesOk: tmp
		}, () => {
			this.calcCoupons();
		});
	}

	selectOption(e) {
		console.log("Selecting option");
		this.setState({
			optionSelect: e.target.value
		});
		let tmp = [];
		this.state.coupons.map((coupon) => {
			if (coupon.id === e.target.value) {
				let tmp2 = coupon;
				this.state.products.map((e) => {
					if (e.id === coupon.product.id) {
						tmp2.qty = e.qty;
					}
				});
				tmp.push(tmp2);
			}
		});
		this.setState({
			optionsOk : tmp
		}, () => {
			this.calcPrice();
		});
	}

	getProducts() {
		request({
			url: '/product',
			method: 'get'
		}, this.refs.notif).then((res) => {
			res = res.filter((e) => {
				return (e.type === 10 || e.type === 11)
			})
			res = res.map((e) => {
				let tmp = e;
				if (e.type === 10) {
					tmp.qty = '1';
				}
				if (e.type === 11) {
					tmp.qty = '0';
				}
				return tmp;
			})
			this.setState({
				products: res
			}, this.calcPrice.bind(this));
		});
	}

	getCoupons() {
		request({
			url: '/coupon',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				coupons: res
			}, () => {
				this.calcCoupons()
			});
		});
	}



	render() {
		return (
			<div className="container py-4">
				{this.state.redirect && <Redirect to="/company/checkout" />}
				<div className="row justify-content-center">
					<div className="col">
						<div className="progress"><div className="progress-bar" role="progressbar" style={{ width: '80%'}} ></div></div>
					</div>
				</div>
				<div className="row">
					<div className="col-lg-6">
						{this.state.products.map((e) => {
							if (e.type === 10) {
								return (
									<MainProduct product={e} key={e.id} update={this.updateProducts.bind(this)} pots={this.state.pots} />
								)
							}
						})}
						<h3 className="my-2"><small>Produits supplémentaires</small></h3>
						<p>Merci de sélectionner le nombre de produits à ajouter à votre offre.</p>
						{this.state.products.map((e) => {
							if (e.type === 11) {
								return (
									<Product product={e} key={e.id} update={this.updateProducts.bind(this)} />
								)
							}
						})}
					</div>
					<div className="col-lg-6 pt-5">
						<h3><small>Options</small></h3>
						<form>
							<div className="form-group">
								<input type="radio" id="noOption" name="optionSelect" onChange={this.selectOption.bind(this)} value="" checked={this.state.optionSelect === ""} />&nbsp;
								<label htmlFor="noOption" >Aucune option</label>
						{this.state.options.map((e) => {
							return (
								<div key={e.id} >
									<input type="radio" id={e.id} name="optionSelect" onChange={this.selectOption.bind(this)} value={e.id} checked={this.state.optionSelect === e.id} />&nbsp;
									<label htmlFor={e.id} >{e.designation} ( { - e.amount} € / ruche )</label>
									</div>
								)
							})}
						</div>
						</form>
						<h3><small>Code promo</small></h3>
						{this.state.codeResult}
						<form className="form-inline my-2" onSubmit={this.handleCode.bind(this)}>
							<input type="text" className="form-control" name="code" onChange={handleChange.bind(this)} value={this.state.code} placeholder="Entrez un code promo..." />
							<button className="btn btn-primary ml-2">Vérifier le code</button>
						</form>
						<h3><small>Réductions</small></h3>
							{this.state.couponsOk.length < 1 &&
								<p>Aucune réduction immédiate n'est applicable</p>}
									{this.state.couponsOk.map((e) => {
										return (
											<span key={e.id} >{e.designation} ( { - e.amount} € / ruche )</span>
										)
									})}
							{this.state.codesOk.length < 1 &&
								<p>Aucun code promotionnel n'a été appliqué</p>}
									{this.state.codesOk.map((e) => {
										return (
											<span key={e.id} >{e.designation} ( { - e.amount} € / ruche )</span>
										)
									})}
							<p className="lead text-center">
								Total : {this.state.price} €<br />
								<button className="btn btn-primary my-2" onClick={this.handleSubmit.bind(this)}>Valider et passer au paiement</button>
							</p>
					</div>
				</div>
			</div>
		)
	}
}
