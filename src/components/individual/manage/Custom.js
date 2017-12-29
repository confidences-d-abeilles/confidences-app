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
                    <h2 className="text-center my-5">Choix des étiquettes</h2>
                    {this.state.step === 0 &&
                        ((!this.state.label)?
                        <div>
                            <p>Nous n'avons pas encore enregistré d'étiquette personnalisée pour votre compte. Et si nous le faisions ensemble dès maintenant ?</p>
                                <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Commencer la personnalisation <FontAwesome name="magic" /></button>
                            </div>
                            :
                            <div>
                                <p>Voici le visuel d'étiquette que vous aviez personnalisé la dernière fois. Si celui-ci ne vous convient plus, vous pouvez tout à fait décider d'en changer en cliquant sur "Recommencer la personnalisation" en dessous de celle-ci.</p>
                                <object data={config.cdn_url+'/label/'+this.state.userId+'.pdf#zoom=200'} type="application/pdf" style={{ width: '100%' }} height="400"></object>
                                <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
                            </div>)
                    }
                    {this.state.step  === 1 &&
                        <div className="row">
                            <div className="col-lg-12">
                                <p>Choisissez maintenant le visuel d'étiquette qui vous plaît le plus en cliquant dessus. Les données inscrites dessus ne sont que des exemples, nous les personnaliserons plus tard.</p>
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
                                <p>Il est temps de nous indiquer la mention que vous voulez indiquer au centre de vos étiquettes, par défaut, il s'agit de votre nom et prénom. La limite est de x caractères.</p>
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
                                    <h3>Voici un rendu de vos étiquettes personalisée !</h3>
                                    <p>Les données entre parentèses sont provisoires et seront remplacées lorsque nous en sauront plus ;)</p>
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
