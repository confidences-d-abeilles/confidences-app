
import React, { Component } from 'react';
import { request } from '../../../services/NetService';
import { Link } from 'react-router-dom';
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
				<nav>
					<ul className="pagination">
						<li className="page-item"><a className="page-link" href="#">Page precedente</a></li>
						<li className="page-item"><a className="page-link" href="#">1</a></li>
						<li className="page-item"><a className="page-link" href="#">2</a></li>
						<li className="page-item"><a className="page-link" href="#">3</a></li>
						<li className="page-item"><a className="page-link" href="#">Page suivante</a></li>
					</ul>
				</nav>
			</div>
		);
	}
}
