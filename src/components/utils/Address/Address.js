import React, { Component } from 'react'
import EditAddress from './EditAddress'
import FontAwesome from 'react-fontawesome'
import ViewAddress from './ViewAddress'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class Address extends Component {


	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			address: props.data
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.data) {
			this.setState({
				address: { ...nextProps.data, sexe_m : (nextProps.data.sexe_m)?'1':'0' }
			});
		} // pres operation
	}

	updateAddress = (event) => {
		this.setState({
			address : { ...this.state.address, [event.target.name] : event.target.value }
		});
	}

	submitAddress = (e) => {
		e.preventDefault();
		request({
			url: '/address/'+this.state.address.id,
			method: 'PUT',
			data: this.state.address
		}, this.refs.notif).then((res) => {
			this.setState({ edit : false });
		})
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{(!this.state.edit)?
				<div>
					<ViewAddress data={this.state.address} />
					<button className="btn btn-secondary btn-sm pull-right" onClick={() => { this.setState({ edit: true })}}>
					<FontAwesome name="pencil" />&nbsp;Editer cette adresse
					</button>
					<div className="clearfix"></div>
				</div>
				:<EditAddress data={this.state.address} onChange={this.updateAddress} onSubmit={this.submitAddress} company={this.props.company}/>}
			</div>
		)
	}

}
