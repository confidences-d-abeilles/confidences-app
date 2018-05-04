import React, { Component } from 'react';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Confirm from '../../utils/Confirm'
import { logout } from '../../../services/AuthService'
import { handleChange } from '../../../services/FormService'
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome'
import { NavLink, Link, Redirect } from 'react-router-dom'
import Meta from '../../utils/Meta'

export default class Account extends Component {

    constructor(props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
        this.state = {
            sessions : null,
            logout: false,
            newsletter: false
        }
    }

    componentDidMount() {
      request({
        url : '/user/me',
        method : 'get'
      }, this.refs.notif).then((res) => {
        this.setState({
          newsletter: res.newsletter
        })
      })
    }
    
    deleteAccount() {
    	request({
    		url: '/user',
    		method: 'delete'
    	}, this.refs.notif).then((res) => {
    		logout();
    		this.setState({
    			logout: true
    		})
    	})
    }

    changePassword(e) {
		e.preventDefault()
		if (this.state.password === this.state.conf) {
			request({
				url: '/user',
				method: 'put',
				data: {
					password: this.state.password
				}
			}, this.refs.notif)
		} else {
			this.refs.notif.addNotification({
				message: 'Le nouveau mot de passe et sa confirmation ne correspondent pas',
				level: 'warning'
			})
		}
	}


      updateNewsletter (e) {
        let stat = e.target.value;
        request({
          url: '/user/newsletter',
          method: 'PUT',
          data: {
            status: stat
          }
        },this.refs.notif).then((res) => {
          this.setState({
            newsletter: !stat.localeCompare('true') ? true : false
          })
        })
      }

    render () {
        return (
            <div className="row">
                <Meta title="Mon compte"/>
                {this.state.logout && <Redirect to="/" />}
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center my-5">Mon compte</h2>
                    <div className="row">
                        <div className="col-lg-6 text-center">
                            <h3 className="text-center my-4"><small>Modifier mon mot de passe</small></h3>
                            <form onSubmit={this.changePassword.bind(this)}>
                                <div className="form-group">
                                    <input type="password" name="password" onChange={handleChange.bind(this)} value={this.state.password} className="form-control" placeholder="Nouveau mot de passe" />
                                </div>
                                <div className="form-group">
                                    <input type="password" name="conf" onChange={handleChange.bind(this)} value={this.state.conf} className="form-control" placeholder="Confirmation du nouveau mot de passe" />
                                </div>
                                <button className="btn btn-primary mb-4">Enregistrer</button>
                            </form>
                            <h3 className="text-center my-4"><small>Newsletter</small></h3>
                            {this.state.newsletter ?
                              <div>
                              <h3 className="text-center my-4"><small>Vous êtes inscrit à la newsletter.</small></h3>
                                <div className="text-center">
                                  <button className="btn btn-warning btn-sm" value={false} onClick={this.updateNewsletter.bind(this)}>Me désinscrire</button>
                                </div>
                              </div>
                            :
                            <div>
                              <h3 className="text-center my-4"><small>Vous n'êtes pas inscrit à la newsletter.</small></h3>
                              <div className="text-center">
                                <button className="btn btn-warning btn-sm" value={true} onClick={this.updateNewsletter.bind(this)}>M'inscrire</button>
                              </div>
                            </div>
                          }
                        </div>
                        <div className="col-lg-6 text-center">
                            <h3 className="text-center my-4"><small>Supprimer mon compte</small></h3>
                            <p className="alert alert-danger"><FontAwesome name="warning"/> ATTENTION ! Vous allez supprimer votre compte ainsi toutes les informations vous concernant. Il ne sera pas possible de revenir en arrière. En confirmant la suppression de votre compte vous renoncez en même temps à vos droits liés à votre compte ainsi qu’à ceux liés à la souscription d’un parrainage ; vous résiliez votre parrainage quand bien même celui-ci ne serait pas arrivé à son terme. Cette action est permanente et nous ne serons pas capables de retrouver vos données.</p>
                            <Confirm action={this.deleteAccount.bind(this)} text="Supprimer mon compte" class="btn btn-sm btn-danger"/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
