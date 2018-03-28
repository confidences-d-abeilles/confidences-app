import React, { Component } from 'react'
import { handleChange } from '../services/FormService'
import request from '../services/Net'
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import Meta from './utils/Meta'

export default class RequestLabel extends Component {

  constructor(props) {
      super(props);
      ReactGA.pageview(this.props.location.pathname);
      this.state = {
          name: '',
          firstname: '',
          society: '',
          email: '',
          feedback: '',
          attachment: '',

          success: false
      }
  }

  componentDidMount() {
		request({
			url: '/user/me',
			method: 'get'
		}, this.refs.notif).then((res) => {
			this.setState({
				name: res.name,
        firstname: res.firstname,
				society: res.company_name,
				email: res.email
			}, () => {
				console.log(res);
			})
		});
	}

  sendMail(e) {
    e.preventDefault();
    const data = new FormData();
    data.append('name', this.state.name);
    data.append('firstname', this.state.firstname);
    data.append('society', this.state.society);
    data.append('email', this.state.email);
    data.append('feedback', this.state.feedback);
    if (document.getElementById("attachment").files[0]) {
        data.append('attachment', document.getElementById("attachment").files[0]);
    }
    request({
      url: '/contact/label',
      method: 'post',
      data: data
    }, this.refs.notif).then((res) => {
      console.log("faire un setState a null");
    })
    console.log("coucou");
  }

   render(){
     return (
         <div className="container">
             <Meta title="Label"/>
             <NotificationSystem ref="notif" />
             <div className="row justify-content-center">
                 <div className="col-lg-6 col-md-10 col-sm-12">
                    <p className="align-middle">
                      <h5 className="text-center my-4">
                            Ce formulaire vous permet de contacter
                            Marine du Peloux, graphiste, qui pourra
                            vous aider à réaliser votre étiquette
                            personnalisée. Soumettez lui votre
                            demande en l’accompagnant d’un brief ou
                            tout autre fichier que vous jugeriez utile.<br /></h5>
                            <i>Ce service n’est pas inclus dans l’offre de
                            parrainage, attendez-vous donc à recevoir un
                            devis.</i> </p>

                     <form onSubmit={this.sendMail.bind(this)} className="mt-4">
                         <div className="form-group">
                             <input type="text" value={this.state.name} onChange={handleChange.bind(this)} placeholder="Votre nom *" name="name" className="form-control"/>
                         </div>
                         <div className="form-group">
                             <input type="text" value={this.state.firstname} onChange={handleChange.bind(this)} placeholder="Votre prenom *" name="firstname" className="form-control"/>
                         </div>
                         <div className="form-group">
                             <input type="text" value={this.state.society} onChange={handleChange.bind(this)} placeholder="Nom de l'entreprise *" name="society" className="form-control"/>
                         </div>
                         <div className="form-group">
                             <input type="text" value={this.state.email} onChange={handleChange.bind(this)} placeholder="Votre email *" name="email" className="form-control"/>
                         </div>
                         <div className="form-group">
                          <label>Joindre un fichier (png, jpg, pdf, indd, ai)</label>
                            <label htmlFor="attachment" className={(this.state.attachment)?'active-upload':'upload'} style={{ position: 'relative' }}>
                            <input type="file" className="form-control" id="attachment" onChange={() => { this.setState({ attachment: document.getElementById("attachment").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
                              Glissez votre image ici ou cliquez pour en séléctionner un parmi vos fichiers<br/>
                             {(this.state.attachment)?'Selectionné : '+this.state.attachment:"Aucun fichier séléctionné"}
                            </label>
                          </div>

                         <div className="form-group">
                             <textarea value={this.state.feedback} rows="10" onChange={handleChange.bind(this)} placeholder="Votre demande *" name="feedback" className="form-control"/>
                         </div>
                         {this.state.success &&
                         <p className="alert alert-success">Votre demande a été envoyée avec succès</p>}
                         <button className="btn btn-primary mb-4">Envoyer</button>
                     </form>
                 </div>
             </div>
         </div>
     )

   }

}
