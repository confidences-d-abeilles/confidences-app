import React, { Component } from 'react'
import Loading from '../../../utils/Loading'
import request from '../../../../services/Net'
import { client } from '../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Payment from './tiles/Payment'
import Bills from './tiles/Bills'
import Parrains from './tiles/Parrains'
import Label from './tiles/Label'
import { Link } from 'react-router-dom'
import fileDownload from 'js-file-download'

export default class AdminManageBundleId extends Component {

	state = {
		bundle: null,
		parrain: null
	}

	componentDidMount() {
		request({
			url: '/bundle/'+this.props.match.params.id,
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				bundle: { ...res, state : res.state.toString() },
				owner: res.owner
			});

			request({
				method: 'get',
				url: '/user/' + res.owner.id,
			}, this.refs.notifs).then((res2) => {
				this.setState({
					userLabelFilename: res2.label
				});
			})
		})
	}

	changeState = ( event ) => {
		this.setState({
			bundle: { ...this.state.bundle, state: parseInt(event.target.value, 10) }
		})
	}

	submitState = () => {
		request({
			url: '/bundle/'+this.state.bundle.id,
			method: 'put',
			data: {
				state : this.state.bundle.state
			}
		}, this.refs.notif).then((res) => {

		});
	}

	downloadLabel = async () => {
		try {
			let response = await client({
				url: '/bundle/'+this.state.bundle.id+'/label',
				method: 'GET',
				responseType: 'arraybuffer',
			});
			let regexp = /filename="(.*)"/gi;
			let retrievedFileName = regexp.exec(response.headers['content-disposition'])[1];
			if (!retrievedFileName) {
				retrievedFileName = 'label_' + this.state.bundle.owner.name + '.pdf';
			}
			fileDownload(response.data, retrievedFileName);
		}
		catch (error) {
			console.error(error);
			this.refs.notif.addNotification({message: 'download fail', level: 'error'});
		}
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				<ol className="breadcrumb">
					<li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
					<li className="breadcrumb-item"><Link to="/admin/manage/bundle">Parrainages</Link></li>
					<li className="breadcrumb-item active">Parrainage{(this.state.bundle)?' de '+this.state.bundle.owner.firstname+' '+this.state.bundle.owner.name:''}</li>
				</ol>
				{(this.state.bundle)?
				<div className="row">
					<div className="col-lg-6">
						<Payment state={this.state.bundle.state.toString()} changeState={this.changeState} submitState={this.submitState} />
						<Bills bundleId={this.state.bundle.id} />
						<Label labelFilename={this.state.userLabelFilename} downloadLabel={this.downloadLabel} />
					</div>
					<div className="col-lg-6">
						{this.state.owner.user_type === 2 ?<Parrains parrain={this.state.owner} bundleLabel={this.state.bundle.label}/>
						:null}
					</div>
				</div>
				:<Loading />}
			</div>
		)
	}
}
