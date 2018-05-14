import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Banner from './../assets/img/ourvalues.jpg'
import ReactGA from 'react-ga';
import Meta from './utils/Meta'
import { handleChange } from '../services/FormService'
import request from '../services/Net';

export default class More extends Component {

  constructor(props) {
		super(props);
		this.state = {
			redirect : false,
			banner: true,
			email: '',
			firstname: ''
		}
	}

	Newsletter(e) {
		e.preventDefault();
		 request({
 			url: '/newsletter/create',
 			method: 'put',
			data: {
				firstname: this.state.firstname,
				email: this.state.email
			}
 		}, this.refs.notif).then((res) => {
 			console.log('inscription newsletter');
 		})
	}

	render() {
		return (
			<div className="container">
				<Meta title="Newsletter"/>
				<div className="row justify-content-center">
					<div className="col-lg-12">
						<img src={Banner} alt="Banner" className="img-fluid"/>
					</div>
					<div className="col-9">
						<h2 className="text-center my-5">Inscription a le newsletter</h2>
            <form onSubmit={this.Newsletter.bind(this)}>
              <div className="form-group">
                <input type="text" className="form-control" name="email" onChange={handleChange.bind(this)}  placeholder='email'/>
                <input type="text" className="form-control" name="firstname" onChange={handleChange.bind(this)}  placeholder='firstname'/>
                <button className="btn btn-secondary btn-sm">Soumettre</button>
              </div>
            </form>
					</div>
				</div>
			</div>
	)}
}
