import React, { Component } from 'react';
import ReactGA from 'react-ga';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import Meta from '../../utils/Meta'
import { Link } from 'react-router-dom';
import Imagebox from '../../utils/Imagebox'

import EtiD from '../../../assets/img/label/etiquette_defaut_individual.jpg';
import Eti1 from '../../../assets/img/label/sample_Etiquette_P1.jpg';
import Eti2 from '../../../assets/img/label/sample_Etiquette_P2.jpg'

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
          <div>
            <Meta title="Mes étiquettes personnalisées"/>
            <div className="row">
              <NotificationSystem ref="notif" />
            </div>
          <div className="row">
            <div className="col">
            <h2 className="text-center my-4">Personnaliser mes pots de miel</h2>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col text-center">
                  <div className="card">
                    <div className="card-block text-center">
                      <div>
                        <h5 className="text-center my-4">Mon étiquette personnalisée</h5>
                          <i className="card-text" style={{fontSize: '85%'}}>Une version « par défaut » est générée automatiquement. 2
                          solutions sont à votre disposition pour la modifier.</i>
                          <div className=" row card-img text-center">

                          <Imagebox className="col"
                            src={EtiD}
                            width={'auto'}
                            paddingTop={'230px'}
                            alt={"Eti1"}
                          />
                          </div>

                      </div>
                  </div>
                </div>
                </div>
                </div>
                <br />

            </div>
              <div className="col">
                <div className="card">
                  <div className="card-block text-center">
                    <div className="row">
                      <div className="text-center col">
                        <h5 className="text-center my-4">Éditeur en ligne</h5><br />
                        <button className="btn btn-primary btn-sm">Bientôt disponible</button><br />
                        <p className="text-center">Templates disponibles</p>
                      </div>
                    </div>
                <div className="row">
                  <div className="col">
                    <Imagebox width={"auto"} height={'90px'} src={Eti1} alt='Eti1'/>
                  </div>
                  <div className="col">
                    <Imagebox width={"auto"} height={'90px'} src={Eti2} alt='Eti2'/>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col">
                  <p className="text-center">Ces templates sont proposés par Marine du Peloux.
                  Vous avez une idée, vous voulez lui confier la
                  réalisation de votre étiquette ? Contactez-la !</p>
                <br />
                <Link to="/requestlabel" className="btn btn-primary btn-sm">
                  Contacter une graphiste
                </Link>
                </div>
              </div>
            </div>
            </div>
            </div>
          </div>
        </div>
        )
    }
}

            //
            //         <div className="col-lg-12 text-center">
            //         <h2 className="text-center my-5">Mon étiquette personnalisée</h2>
            //         {this.state.step === 0 &&
            //             ((this.state.label !== '')?
            //             <div>
            //                 <p>Nous n'avons pas encore enregistré d'étiquette personnalisée pour votre compte. Et si nous le faisions ensemble dès maintenant ?</p>
            //                     <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Commencer la personnalisation <FontAwesome name="magic" /></button>
            //                 </div>
            //                 :
            //                 <div>
            //                     <p>Visuel actuel de votre étiquette. Pour le modifier veuillez cliquer sur "Recommencer la personnalisation" en dessous de celui-ci.</p>
            //                     <object data={config.cdn_url+'/label/'+this.state.userId+'.pdf#zoom=200'} type="application/pdf" style={{ width: '100%' }} height="400"></object>
            //                     <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
            //                 </div>)
            //         }
            //         {this.state.step  === 1 &&
            //             <div className="row">
            //                 <div className="col-lg-12">
            //                     <p>Choisissez un modèle en cliquant sur l'un des 2 exemples. Vous serez amené à saisir vos informations à l’étape suivante.</p>
            //                 </div>
            //                 <div className="col-lg-6">
            //                     <img className={(this.state.model === 1)?'img-fluid model-etiq':"img-fluid"} src={Version1} onClick={() => { this.setState({ model : 1 }); }} alt="Modèle 1"/>
            //                 </div>
            //                 <div className="col-lg-6">
            //                     <img className={(this.state.model === 2)?'img-fluid model-etiq':"img-fluid"} src={Version2} onClick={() => { this.setState({ model : 2 }); }} alt="Modèle 2"/>
            //                 </div>
            //                 <div className="col-lg-12 text-center mt-4">
            //                     <button className="btn btn-primary" onClick={() => { this.setState({ step: 2 })}}>Étape suivante <FontAwesome name="chevron-right" /></button>
            //                 </div>
            //             </div>
            //         }
            //         {this.state.step === 2 &&
            //             <div className="row justify-content-center">
            //                 <div className="col-lg-12">
            //                     <p>Veuillez saisir le nom ou la mention qui doit figurer sur votre étiquette. Par défaut il s'agit de votre prénom nom. Vous êtes limité à 38 caractères.</p>
            //                 </div>
            //                 <div className="col-lg-6">
            //                     <input type="text" className="form-control" name="mention" placeholder="Mention au centre de l'étiquette..." value={this.state.mention} onChange={handleChange.bind(this)} />
            //                 </div>
            //                 <div className="col-lg-12 text-center mt-4">
            //                     <button className="btn btn-primary" onClick={this.generate.bind(this)}>Étape suivante <FontAwesome name="chevron-right" /></button>
            //                 </div>
            //             </div>
            //         }
            //         {this.state.step === 3 &&
            //             <div className="row">
            //                 <div className="col-lg-12">
            //                     {(this.state.loading)?
            //                         <div>
            //                             <Loading />
            //                             <p>Génération de votre étiquette personnalisée en cours...</p>
            //                         </div>
            //                     :
            //                     <div>
            //                         <h3>Voici le rendu de votre étiquette personnalisée !</h3>
            //                         <p>Les mentions entre parenthèses sont provisoires et seront remplacées lorsque les informations seront disponibles.</p>
            //                         <object data={config.cdn_url+'/label/'+this.state.userId+'.pdf#zoom=200'} type="application/pdf" style={{ width: '100%' }} height="400"></object>
            //                         <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
            //                     </div>}
            //                 </div>
            //             </div>
            //         }
            //     </div>
            // </div>
