import React, { Component } from 'react';
import request from '../../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../../../utils/Loading'
import FileUpload from '../../../../utils/FileUpload'

export default class Bills extends Component {

	constructor(props) {
		super(props);
		this.state = {
			bills : null,
			loading: true
		}
	}

	componentDidMount () {
		this.get();
	}

	get = () => {
		this.setState({ loading: true })
		request({
			url: '/bill/bundle/'+this.props.bundleId,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bills: res,
				loading: false
			})
		})
	}

	uploadFile = () => {
		this.setState({
			loading: true
		})
		const data = new FormData();
		if (document.getElementById('billDoc').files[0]) {
			data.append('file', document.getElementById('billDoc').files[0]);
		} else {
			this.setState({ loading: false })
		}
		request({
			url: '/bill/'+this.state.bills.id,
			method: 'put',
			data: data
		}, this.refs.notif).then((res) => {
			this.setState({ loading: false })
			this.get();
		})
	}

	render () {
		return (
			<div className="card mb-4 bg-light">
				<h4 className="card-header">Facture</h4>
				<div className="card-body p-2">
					{(this.state.bills && !this.state.loading)?
						<div className="card-text">
							<strong>Numéro</strong> : {this.state.bills.number}<br />
							<strong>Montant</strong> : {this.state.bills.price} €<br />
							<strong>Document</strong> : {(this.state.bills.file)?<span><a href={process.env.CONTENT_DOMAIN+'/bills/'+this.state.bills.file} target="_blank">Fichier actuel</a><br /></span>:'Aucun document pour cette facturation'}
							<FileUpload identifier="billDoc" label="Uploader un fichier" />
							<div className="text-center">
								<button className="btn btn-info btn-sm" onClick={this.uploadFile} >Envoyer le fichier</button>
							</div>
						</div>
					:
						<div className="card-text"><Loading /></div>
					}
					<NotificationSystem ref="notif" />
				</div>
			</div>
		)
	}
}
