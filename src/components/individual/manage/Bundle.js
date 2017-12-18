import React, { Component } from 'react'
import request from '../../../services/Net'
import { Redirect, Link } from 'react-router-dom'

export default class Bundle extends Component {

    constructor(props) {
		super(props);
		this.state = {
			user: null
		}
	}

	componentDidMount() {
		request({
			url: '/user/me',
			method: 'GET'
		}, this.refs.notif).then((res) => {
			this.setState({
					user: res
			});
		});
	}

    checkInfos() {
		if (this.state.user.addresses && !this.state.user.addresses[0]) {
			return (<Redirect to="/individual/address" />);
		}
		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 0 ) {
			return (
				<p className="alert alert-danger mt-4">Vous n'avez pas encore reglé votre parrainage. <Link to="/individual/checkout">Cliquez ici</Link> pour le faire maintenant</p>
			);
		}

		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 1 ) {
			return (
				<p className="alert alert-warning mt-4">La validation du règlement de votre parrainage est en cours</p>
			);
		}
		if (this.state.user && !this.state.user.bundles[0]) {
			return (<Redirect to="/individual/wish" />);
		}
		if (this.state.user && this.state.user.hive_id) {
			return (
				<p className="text-center my-5">
					<Link className="btn btn-secondary" to={'/hive/'+this.state.user.hive_id}>Voir la page de ma ruche</Link>
				</p>
			)
		}
    }


    render () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="my-5 text-center">Mon parrainage</h2>
                    {(this.state.user)?this.checkInfos():''}
                </div>
            </div>
        )
    }
}
