import React, { Component } from 'react';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import { Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import MainProduct from './wish/MainProduct'
import Product from './wish/Product'
export default class CompanyWish extends Component {

	constructor(props) {
		super(props);
		ReactGA.pageview(this.props.location.pathname);
		this.state = {
			products: [],
			coupons: [],
			options: [],
			optionsOk: [],
			couponsOk: [],
			optionSelect: "",
			price: "0"
		}
	}

	componentDidMount() {
		this.getProducts();
		this.getCoupons();
	}

	updateProducts(product) {
		let tmp = this.state.products.filter((e, key) => {
			return (e.id != product.id)
		});
		tmp.push(product);
		this.products = tmp;
		this.setState({
			products: tmp
		}, () => {
			this.calcCoupons();
		});
	}

	calcPrice() {
		console.log("Calcul du prix");
		this.setState({ price : '0' }, () => {
			this.state.products.map((e) => {
				this.setState((prev) => {
					return { price: parseInt(prev.price) + parseInt(e.price) * parseInt(e.qty) }
				})
			});
			this.state.couponsOk.map((e) => {
				this.setState((prev) => {
					return { price: parseInt(prev.price) - parseInt(e.amount) * parseInt(e.qty) }
				})
			})
			this.state.optionsOk.map((e) => {
				this.setState((prev) => {
					return { price: parseInt(prev.price) - parseInt(e.amount) * parseInt(e.qty) }
				})
			})
		});
	}

	calcCoupons() {
		let tmp = [];
		let tmp2 = [];
		this.state.coupons.map((coupon) => {
			this.state.products.forEach((product) => {
				if (coupon.type == 0 && coupon.product.id == product.id && product.qty >= coupon.min) {
					coupon.qty = product.qty;
					tmp.push(coupon);
					this.setState((prev) => { price: prev.price - coupon.amount * coupon.qty })
				}
				if (coupon.type == 1 && coupon.product.id == product.id) {
					coupon.qty = product.qty;
					tmp2.push(coupon);
					this.setState((prev) => { price: prev.price - coupon.amount * coupon.qty })
				}
			});
		});
		this.setState({
			couponsOk: tmp,
			options: tmp2
		}, () => {
			this.calcPrice();
		});
	}

	selectOption(e) {
		this.setState({
			optionSelect: e.target.value
		});
		let tmp = [];
		this.state.coupons.map((coupon) => {
			if (coupon.id == e.target.value) {
				let tmp2 = coupon;
				this.state.products.map((e) => {
					if (e.id == coupon.product.id) {
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
				return (e.type == 10 || e.type == 11)
			})
			res = res.map((e) => {
				let tmp = e;
				tmp.qty = '1';
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
									<MainProduct product={e} key={e.id} update={this.updateProducts.bind(this)} />
								)
							}
						})}
						<h3 className="my-2">Produits supplémentaires</h3>
						<p>Séléctionnez la quantité pour chacun des produits suivants que vous souhaiteriez recevoir en plus de la contrepartie de votre parrainage</p>
						{this.state.products.map((e) => {
							if (e.type === 11) {
								return (
									<Product product={e} key={e.id} update={this.updateProducts.bind(this)} />
								)
							}
						})}
					</div>
					<div className="col-lg-6 pt-5">
						<h3>Options</h3>
						<form>
							<div className="form-group">
								<input type="radio" id="noOption" name="optionSelect" onChange={this.selectOption.bind(this)} value="" checked={this.state.optionSelect === ""} />&nbsp;
								<label htmlFor="noOption" >Aucune option</label>
						{this.state.options.map((e) => {
							return (
								<div key={e.id} >
									<input type="radio" id={e.id} name="optionSelect" onChange={this.selectOption.bind(this)} value={e.id} checked={this.state.optionSelect == e.id} />&nbsp;
									<label htmlFor={e.id} >{e.designation} ( { - e.amount} € / ruche )</label>
									</div>
								)
							})}
						</div>
						</form>
						<h3>Réductions</h3>
							{this.state.couponsOk.length < 1 &&
								<p>Aucune réduction immédiate n'est applicable pour votre commande</p>}
									{this.state.couponsOk.map((e) => {
										return (
											<span key={e.id} >{e.designation} ( { - e.amount} € / ruche )</span>
										)
									})}
							<p className="lead text-center">
								Total : {this.state.price} €
							</p>
					</div>
				</div>
			</div>
		)
	}
}
