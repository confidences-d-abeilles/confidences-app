import React, { Component } from 'react'
import Loading from './Loading';

export default class FileUpload extends Component {

	/**
 * Form component to upload a file
 * Provide a label props
 * Provide a identifier
 * You can specify a accept attribute
 */

	constructor(props) {
		super(props);
		this.state = {
			newFile: null
		}
		this.identifier = (this.props.identifier)?this.props.identifier:Math.floor(Math.random() * 1000);
	}

	render() {
		return (
			<div className="form-group">
				<label>{this.props.label}</label>
				{(this.props.loading)?
					<Loading />
					:
				<label htmlFor="logo" className={(this.state.newFile)?'active-upload':'upload'} style={{ position: 'relative' }}>
					<input type="file" className="form-control" id={this.identifier} onChange={() => { this.setState({ newFile : document.getElementById(this.identifier).files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}} accept={(this.props.accept)?this.props.accept:''} />
					Glissez un fichier ici ou cliquez pour en séléctionner un<br/>
					{(this.state.newFile)?'Selectionné : '+this.state.newFile:"Aucun fichier séléctionné"}
				</label>}
			</div>
		)
	}
}
