import React, { Component } from 'react'
import Loading from '../../../utils/Loading'
import request from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Payment from './Tiles/Payment'
import Bills from './Tiles/Bills'
import { Link } from 'react-router-dom'

export default class AdminManageBundleId extends Component {

	state = {
		bundle: null
	}

	componentDidMount() {
		request({
			url: '/bundle/'+this.props.match.params.id,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundle: res
			})
		})
	}

	changePayment = ( event ) => {
		this.setState({
			bundle: { ...this.state.bundle, state: event.target.value }
		})
	}

	render () {
		return (
			<div>
				<Link className="btn btn-info btn-sm" to="/admin/manage/bundle"> {'<'} Retour aux parrainages</Link>
				<NotificationSystem ref="notif" />
				<h2 className="text-center my-2">Parrainage{(this.state.bundle)?' de '+this.state.bundle.owner.firstname+' '+this.state.bundle.owner.name:''}</h2>
				{(this.state.bundle)?
				<div className="row">
					<div className="col-lg-6">
						<Payment status={this.state.bundle.state} onChange={this.changePayment} />
						<Bills bundleId={this.state.bundle.id} />
					</div>
				</div>
				:<Loading />}
			</div>
		)
	}
}
