import React, { Component } from 'react'
import {Document, Page, pdfjs } from 'react-pdf';
import request from '../../../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Loading from '../../../../utils/Loading.js'
import { handleChange } from '../../../../../services/FormService'
import '../../../../utils/css/LabelPdf.css'
const config = require('../../../../../config.js')
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

class Label extends Component {

	constructor(props) {
		super (props);
		this.state = {
			model: props.model,
			mention: props.mention,
		}
	}

	componentDidUpdate(prevProps) {
		if (this.props.mention !== prevProps.mention) {
			this.setState({
				mention: this.props.mention,
			});
		}
		if (this.props.model !== prevProps.model) {
			this.setState({
				model: this.props.model,
			});
		}
	}

	updateLabel = async () => {
		await request({
			method: 'put',
			url: '/user/' + this.props.userId + '/label',
			data: {
				model: this.state.model,
				mention: this.state.mention,
			}
		}, this.refs.notif);
	}

	render() {
		return (
			<div className="card mb-4 bg-light">
				<NotificationSystem ref="notif" />
				<h4 className="card-header">Etiquette</h4>
				<div className="card-body p-2">
					{this.props.labelFilename ?
						<p className="card-text text-center">
							<button className="mb-1 btn btn-info btn-sm" onClick={this.props.downloadLabel}>Télécharger</button>
							<a href={config.cdn_url+'/label/' + this.props.labelFilename} target="_blank">
								<Document file={config.cdn_url + '/label/' + this.props.labelFilename} >
									<Page pageNumber={1} width={500} className="label" />
								</Document>
							</a>
						</p>:
						<p className="card-text text-center">
							{this.props.loading ?
								<Loading />:
								<p>Label non trouvé</p>}
						</p>
					}
					<hr />
					<label>Mention : <input type="text" className="form-control" name="mention" value={this.state.mention} onChange={handleChange.bind(this)} /></label>
					<label>Model : <input type="text" className="form-control" name="model" value={this.state.model} onChange={handleChange.bind(this)} /></label>
					<button className="mb-1 btn btn-info btn-sm" onClick={this.updateLabel}>Mettre à jour l'étiquette</button>
				</div>
			</div>

		);
	}
};

export default Label;
