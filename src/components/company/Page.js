import React, { Component } from 'react'

import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Redirect } from 'react-router-dom'


export default class CompanyPage extends Component {

	constructor(props) {
		super (props)
		this.state = {
			user : null,
			redirect : false
		}
	}

	componentWillMount() {
		request({
			url : 'user?namespace='+this.props.match.params.company_name,
			method : 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				user : res
			})
		}).catch((err) => {
			this.setState({
				redirect: true
			})
		})
	}

    render () {
        return (
            <div className="container">
				{(this.state.redirect)?<Redirect to="/" />:null}
				<NotificationSystem ref="notif" />
				<div className="row">
					<div className="col cover">
						<img src={require('../../assets/img/hive.jpg')} className="img-fluid" alt="Cover picture" />
						<h1>{(this.state.user)?this.state.user.company_name:null}</h1>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col">
						<img src={require('../../assets/img/logo_esker.jpg')} alt="Logo entreprise" className="img-fluid" />
					</div>
					<div className="col">
						<p className="lead">
							De nombreuses entreprises font confiance à Esker pour automatiser les tâches manuelles ou à faible valeur ajoutée au sein de leurs processus de gestion Purchase-to-Pay (P2P) et Order-to-Cash (O2C). Gestion des commandes, facturation, règlement ou encore recouvrement des factures, les solutions de dématérialisation Esker aident les entreprises à gagner en efficacité et en visibilité là où elles en ont le plus besoin.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Notre engagement pour la biodiversité</h2>
						<p className="lead">
							Dans ce paragraphe, vous êtes invités à décrire votre démarche, en quoi elle consiste selon vous, qu'est ce qui vous a poussé à investir dans un parrainage et pourquoi c'est important. Vous êtes libre de modifier ce paragraphe, ainsi que toutes les informations qui figurent sur cette page à tout moment depuis votre espace personnel. Confidences d'Abeilles vous félicite et vous remercie pour la confiance que vous leur avez accordée.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="text-center">Les ruches que nous parrainons</h2>

					</div>
				</div>
            </div>
        );
    }
}
