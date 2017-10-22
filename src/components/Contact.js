import React, { Component } from 'react';

export default class Contact extends Component {

	constructor(props) {
		super (props);
		this.state = {}
	}

	render () {
		return (
			<div className="container">
				<div className="row">
					<div className="col">
						<h2 className="text-center my-4">La réponse à votre question se trouve peut-être dans notre FAQ</h2>
						<div className="input-group">
							<span className="input-group-addon">Rechercher : </span>
							<input type="text" className="form-control"/>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<h2 className="my-4">Vous n'avez pas trouvé ce que vous cherchiez ?</h2>
					</div>
				</div>
				<div className="row justify-content-center">
					<div className="col-lg-6">
						<form>
							<div className="form-group">
								<select className="form-control" value={this.state.title}>
									<option selected disabled>Civilité...</option>
									<option value="Mr.">Mr.</option>
									<option value="Mme.">Mme.</option>
								</select>
							</div>
							<div className="form-group">
								<input type="text" className="form-control" value={this.state.firstname} placeholder="Prenom" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" value={this.state.name} placeholder="Nom" />
							</div>
							<div className="form-group">
								<input type="text" className="form-control" value={this.state.job} placeholder="Fonction" />
							</div>
							<div className="form-group">
								<input type="email" className="form-control" value={this.state.email} placeholder="Fonction" />
							</div>
							<div className="form-group">
								<select className="form-control" value={this.state.demand}>
									<option selected disabled>Ma demande concerne...</option>
								</select>
							</div>
							<div className="form-group">
								<textarea className="form-control" value={this.state.content} placeholder="Mon message...">
								</textarea>
							</div>
							<div className="form-group text-center">
								<input type="submit" className="btn btn-primary" value="Envoyer" />
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
