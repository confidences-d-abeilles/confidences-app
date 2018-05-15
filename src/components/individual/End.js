import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import Main from '../../assets/img/end_part.jpg';
import moment from 'moment'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta'
import request from '../../services/Net';
import NotificationSystem from 'react-notification-system'
import Loading from '../utils/Loading'

export default class IndividualEnd extends Component {

    constructor(props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
        this.state = {
          redirecte: false,
          loading: false
        }
    }

    componentDidMount() {
    	this.setState({loading:true});
      request({
  			url : '/user/me',
  			method : 'get'
  		}, this.refs.notif).then((res) => {
        let user = res;
        request({
    			url : '/bundle/owner/'+res.id,
    			method : 'get'
    		}, this.refs.notif).then((res) => {
          let bundle = res;
          this.setState({
            bundleState: res.state
          })
          this.setState({loading:false});
          if (res.state === 2 && !res.present) {
            console.log('mail 301');
            request({
      				url: '/bill/bundle/'+res.id,
      				method: 'get'
      			}, this.refs.notif).then((res) => {
      				request({
      					url: '/mail/send_301',
      					method: 'PUT',
      					data: {
      						owner: user,
      						bundle: bundle,
      						date: moment(new Date()).format("DD/MM/YYYY"),
      						bill: res
      					}
      				}, this.refs.notif).then((res) => {
      					console.log("mail envoyer");
      				})
      			})
          }

        })
        console.log(user);
        console.log(user.id);
        request({
    			url: '/newsletter/create',
    			method: 'put',
  	 			data: {
  	 				firstname: user.firstname,
  	 				email: user.email,
            id: user.id
  	 			}
    		}, this.refs.notif).then((res) => {
    		})
        setTimeout(() => {this.setState({ redirecte: true })}, 8000);
      })
    }

    render () {
        return (
  			<div className="container py-4">
          <Meta title="Félicitations"/>
          <NotificationSystem ref="notif" />
          {this.state.redirecte ? <Redirect to="/individual/manage" /> : null}
				  <div className="row justify-content-center">
            {(this.state.loading)?
    					<div className="col-8 text-center">
    						<h3>En attente de confirmation</h3>
    							<Loading />
    					</div>
    					:
    					<div className="col-8">
              {!this.state.bundleState ? <h2 className="text-center my-4">Génial ! Vous avez choisi de rejoindre notre aventure.</h2>
                :<h2 className="text-center my-4">Félicitations ! Vous faites désormais partie de la grande famille des parrains d'abeilles.</h2>
              }
    					<p className="text-center">
    					     <img src={Main} className="img-fluid mx-auto d-block" alt="Img temp" />
              </p>
              {!this.state.bundleState ? <h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous souhaite la bienvenue.</h4>
                :<h4 className="text-center my-4">Toute l'équipe de Confidences d'Abeilles vous remercie !</h4>
              }
              <p className="text-center">
                <Link to="/individual/manage" className="btn btn-primary">{!this.state.bundleState ? 'Découvrir mon espace' :'Mon compte'}</Link>
    					</p>
    					</div>
            }
				</div>
			</div>
      );
    }
}
