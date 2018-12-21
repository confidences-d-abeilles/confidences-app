import React, { Component } from 'react';
import request from '../../../services/Net';
import NotificationSystem from 'react-notification-system';


export default class AdminManageMails extends Component {

	constructor(props) {
		super(props);
		this.state = {
			emailNumber: undefined,
			availableEmailNbLst: [],
			userId: undefined,
			userNameList: [],
			saveDataField: false,
		};
	}

	componentDidMount() {
		let saveDataField = null, emailNumber = null, userId = null;
		saveDataField = localStorage.getItem("testMail-saveDataField") === 'true';
		console.log('localStorage.getItem("testMail-userId") : ' + localStorage.getItem("testMail-userId"));
		if (saveDataField) {
			this.setState({
				saveDataField: saveDataField
			})
			emailNumber = localStorage.getItem("testMail-emailNumber");
			userId = localStorage.getItem("testMail-userId");
		}

		request({
			url : '/mails/available',
			method : 'GET'
		}, this.refs.notif).then((res) => {
			if (!emailNumber) {
				emailNumber = res[0]
			}
			this.setState({
				availableEmailNbLst : res,
				emailNumber : emailNumber
			});
		});
		request({
			url : '/user',
			method : 'GET'
		}, this.refs.notif).then((res) => {
			if (!userId) {
				userId = res[0].id
			}
			this.setState({
				userNameList : res,
				userId : userId
			});
		});
	}

	launch = () => {
		request({
			url : '/automailer',
			method : 'POST'
		});
	}

	changedDataRegister = (event) => {
		const target = event.target;
	    const name = target.name;
	    const value = target.type === 'checkbox' ? target.checked : target.value;

	    this.setState({
	        [name]: value
	    });

		if (name === 'saveDataField') {
			// register value
			localStorage.setItem("testMail-" + name, value);

			if (value === true) {
				localStorage.setItem("testMail-emailNumber", this.state.emailNumber);
				localStorage.setItem("testMail-userId", this.state.userId);
			} else {
				localStorage.removeItem("testMail-saveDataField");
				localStorage.removeItem("testMail-emailNumber");
				localStorage.removeItem("testMail-userId");
				// reset fields
				this.setState((state) => {
					return {
						emailNumber: state.availableEmailNbLst[0],
						userId: state.userNameList[0].id
					};
				});
			}
		} else if (this.state.saveDataField) {
			// request to save data
			// register value
			localStorage.setItem("testMail-" + name, value);
		}
	}

	sendMailUser = (ev) => {
		request({
			url : '/mail',
			method : 'POST',
			data : {
				emailNumber: this.state.emailNumber,
				userId: this.state.userId
			}
		}, this.refs.notif);
		ev.preventDefault();
	}

	render () {
		return (
			<div>
				<NotificationSystem ref="notif" />
				{/*gfdgdfg<button className="btn btn-danger" onClick={this.launch} >Launch email</button>*/}
				<h2>Test mails</h2>
				<form>
					<label>Identifiant du mail à envoyer :</label>
					<select name="emailNumber" onChange={this.changedDataRegister} value={this.state.emailNumber} className="form-control form-control-sm">
						{this.state.availableEmailNbLst.map((emailNb) => <option value={emailNb} key={emailNb}>
								{emailNb}
							</option>)
						}
					</select>
					<label>User :</label>
					<select name="userId" onChange={this.changedDataRegister} value={this.state.userId} className="form-control form-control-sm">
						{this.state.userNameList.map((user) => {
							return <option value={user.id} key={user.id}>
									{user.name + ' ' + user.firstname}
								</option>;
						})}
					</select>
					<button type="submit" className="btn btn-danger mt-2" onClick={this.sendMailUser}>Send Mail</button>
					<label className="ml-3">Sauvegarder les champs <input type="checkbox" name="saveDataField" checked={this.state.saveDataField} onChange={this.changedDataRegister} /></label>
				</form>
			</div>
		)
	}
}
