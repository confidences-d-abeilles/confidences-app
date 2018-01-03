import React, { Component } from 'react';
import Version1 from '../../../assets/img/P/etiqu1.jpg';
import Version2 from '../../../assets/img/P/etiqu2.jpg';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome'
import { handleChange } from '../../../services/FormService'
import request from '../../../services/Net'
import Loading from '../../utils/Loading'
import NotificationSystem from 'react-notification-system'

const config = require('../../../config.js');

export default class Custom extends Component {

    constructor(props) {
        super (props);
        ReactGA.pageview(this.props.location.pathname);
        this.state = {
            step: 0,
            model: 0,
            mention: '',
            userId: null,
            label: null
        }
    }

    componentDidMount() {
        request({
            url: '/user/me',
            method: 'get'
        }, this.refs.notif).then((res) => {
            this.setState({
                userId : res.id,
                label: res.label
            });
            if (res.bundles[0].present) {
                this.setState({
                    mention : res.bundles[0].firstname+' '+res.bundles[0].name
                })
            } else {
                this.setState({
                    mention: res.firstname+' '+res.name
                })
            }
        })
    }

    generate() {
        this.setState({
            step: 3,
            loading: true
        });
        request({
            url: '/label/generate',
            method: 'post',
            data: {
                model: this.state.model,
                mention: this.state.mention
            }
        }, this.refs.notif).then((res) => {
            this.setState({
                loading: false
            })
        })
    }

    render () {
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12 text-center">
                    <h2 className="text-center my-5">Mon étiquette personnalisée</h2>
                    {this.state.step === 0 &&
                        ((this.state.label !== '')?
                        <div>
                            <p>Nous n'avons pas encore enregistré d'étiquette personnalisée pour votre compte. Et si nous le faisions ensemble dès maintenant ?</p>
                                <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Commencer la personnalisation <FontAwesome name="magic" /></button>
                            </div>
                            :
                            <div>
                                <p>Visuel actuel de votre étiquette. Pour le modifier veuillez cliquer sur "Recommencer la personnalisation" en dessous de celui-ci.</p>
                                <object data={config.cdn_url+'/label/'+this.state.userId+'.pdf#zoom=200'} type="application/pdf" style={{ width: '100%' }} height="400"></object>
                                <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
                            </div>)
                    }
                    {this.state.step  === 1 &&
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Choisissez un modèle en cliquant sur l'un des 2 exemples. Vous serez amené à saisir vos informations à l’étape suivante.</p>
                            </div>
                            <div className="col-lg-6">
                                <img className={(this.state.model === 1)?'img-fluid model-etiq':"img-fluid"} src={Version1} onClick={() => { this.setState({ model : 1 }); }} alt="Modèle 1"/>
                            </div>
                            <div className="col-lg-6">
                                <img className={(this.state.model === 2)?'img-fluid model-etiq':"img-fluid"} src={Version2} onClick={() => { this.setState({ model : 2 }); }} alt="Modèle 2"/>
                            </div>
                            <div className="col-lg-12 text-center mt-4">
                                <button className="btn btn-primary" onClick={() => { this.setState({ step: 2 })}}>Étape suivante <FontAwesome name="chevron-right" /></button>
                            </div>
                        </div>
                    }
                    {this.state.step === 2 &&
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <p>Veuillez saisir le nom ou la mention qui doit figurer sur votre étiquette. Par défaut il s'agit de votre prénom nom. Vous êtes limité à 38 caractères.</p>
                            </div>
                            <div className="col-lg-6">
                                <input type="text" className="form-control" name="mention" placeholder="Mention au centre de l'étiquette..." value={this.state.mention} onChange={handleChange.bind(this)} />
                            </div>
                            <div className="col-lg-12 text-center mt-4">
                                <button className="btn btn-primary" onClick={this.generate.bind(this)}>Étape suivante <FontAwesome name="chevron-right" /></button>
                            </div>
                        </div>
                    }
                    {this.state.step === 3 &&
                        <div className="row">
                            <div className="col-lg-12">
                                {(this.state.loading)?
                                    <div>
                                        <Loading />
                                        <p>Génération de votre étiquette personnalisée en cours...</p>
                                    </div>
                                :
                                <div>
                                    <h3>Voici le rendu de votre étiquette personnalisée !</h3>
                                    <p>Les mentions entre parenthèses sont provisoires et seront remplacées lorsque les informations seront disponibles.</p>
                                    <object data={config.cdn_url+'/label/'+this.state.userId+'.pdf#zoom=200'} type="application/pdf" style={{ width: '100%' }} height="400"></object>
                                    <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
                                </div>}
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }
}
