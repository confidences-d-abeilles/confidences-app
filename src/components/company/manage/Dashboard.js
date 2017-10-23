
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class CompanyManageDashboard extends Component {

	constructor(props) {
		super(props);
		this.state = {
			hives : 0,
			loading : true
		}
	}

	componentWillMount() {
		
	}

	render () {
		return (
			<div className="row py-4">
				<div className="col text-center"><Link to={(this.state.user)?'/'+this.state.user.company_name:''}><button className="btn btn-secondary">Consulter ma page entreprise</button></Link></div>
			</div>
		);
	}
}
