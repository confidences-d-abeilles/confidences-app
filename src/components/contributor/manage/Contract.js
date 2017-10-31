
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import example from '../../../assets/fake.pdf';

export default class ContributorManageContract extends Component {

	constructor(props) {
		super(props);
		this.state = {
			pageNumber: 1,
			numPages: null
		}

	}

	onDocumentLoad({ numPages }) {
		this.setState({
			numPages
		});
	}

	nextPage() {

	}

	prevPage() {

	}

	render () {
		return (
			<div>
				<Document
					file={example} onLoadSuccess={this.onDocumentLoad}>
					<Page pageNumber={this.state.pageNumber} renderTextLayer={false} />
				</Document>
			</div>
		);
	}
}
