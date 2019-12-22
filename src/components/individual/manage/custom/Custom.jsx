import React, { Component } from 'react';
import Input from '@cda/input';
import { Button } from '@cda/button';

import request from '../../../../services/Net'
import Meta from '../../../utils/Meta'
import Loading from '../../../utils/Loading'
import { handleChange } from '../../../../services/FormService'
import FontAwesome from 'react-fontawesome'
import {Document, Page } from 'react-pdf';
import '../../../utils/css/LabelPdf.css';

import Eti1 from '../../../../assets/img/label/sample_Etiquette_P1.jpg';
import Eti2 from '../../../../assets/img/label/sample_Etiquette_P2.jpg'
import { withNotification } from '../../../../services/withNotification';

export default withNotification(class Custom extends Component {
  state = {
    step: 0,
    model: 2,
    mention: '',
    userId: null,
    label: '',
  };

  componentDidMount() {
    this.get();
  }

  get = () => {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        userId : res.id,
        label: res.label,
        mention : (res.bundles[0].present)?res.bundles[0].firstname+' '+res.bundles[0].name:res.firstname+' '+res.name
      }, () => {
        this.setState({
          loading : false
        })
        if (this.state.label === '') {
          this.generate();
        }
      });

    });
  }

  generate() {
    const { notification } = this.props;
    this.setState({
      loading: true
    });
    request({
      url: '/label/generate',
      method: 'post',
      data: {
        model: this.state.model,
        mention: this.state.mention
      }
    }, notification).then((res) => {
      this.get();
    });
  }

  render () {
    return (
    <div>
      <Meta title="Mes étiquettes personnalisées"/>
      <h2 className="text-center my-2">Personnaliser mes pots de miel</h2>
      <div className="row">
        <div className="col-lg-12 text-center">
          {this.state.step === 0 &&
            ((this.state.label === '')?
              <Loading />
              :
              <div>
                <p>Visuel actuel de votre étiquette. Pour le modifier veuillez cliquer sur "Recommencer la personnalisation" en dessous de celui-ci.</p>
                <Document file={process.env.REACT_APP_CONTENT_DOMAIN+'/label/'+this.state.label} >
                  <Page pageNumber={1} width={500} className="label" />
                </Document>
                <Button onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></Button>
              </div>)
          }
          {this.state.step  === 1 &&
            <div className="row">
              <div className="col-lg-12">
                <p>Choisissez un modèle en cliquant sur l'un d'eux. Vous serez amené à saisir vos informations à l’étape suivante.</p>
              </div>
              <div className="col-lg-6">
                <img className={(this.state.model === 1)?'img-fluid model-etiq':"img-fluid"} src={Eti1} onClick={() => { this.setState({ model : 1 }); }} alt="Modèle 1"/>
              </div>
              <div className="col-lg-6">
                <img className={(this.state.model === 2)?'img-fluid model-etiq':"img-fluid"} src={Eti2} onClick={() => { this.setState({ model : 2 }); }} alt="Modèle 2"/>
              </div>
              <div className="col-lg-12 text-center mt-4">
                <Button onClick={() => { this.setState({ step: 2 })}}>Étape suivante <FontAwesome name="chevron-right" /></Button>
              </div>
            </div>
          }
          {this.state.step === 2 &&
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <p>Veuillez saisir le nom ou la mention qui doit figurer sur votre étiquette. Par défaut il s'agit de votre prénom nom. Vous êtes limité à 38 caractères.</p>
              </div>
              <div className="col-lg-6">
                <Input type="text" className="form-control" name="mention" placeholder="Mention au centre de l'étiquette..." value={this.state.mention} onChange={handleChange.bind(this)} />
              </div>
              <div className="col-lg-12 text-center mt-4">
                <Button onClick={() => { this.setState({ step : 3 }); this.generate(); } }>Étape suivante <FontAwesome name="chevron-right" /></Button>
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
                  <p className="lead">Voici le rendu de votre étiquette personnalisée !</p>
                  <p>Les mentions entre parenthèses sont provisoires et seront remplacées lorsque les informations seront disponibles.</p>
                  <Document file={process.env.REACT_APP_CONTENT_DOMAIN+'/label/'+this.state.label} >
                    <Page pageNumber={1} width={500} className="label" />
                  </Document>
                  <button className="btn btn-secondary" onClick={() => { this.setState({ step : 1 }); }}>Recommencer la personnalisation <FontAwesome name="magic" /></button>
                </div>}
              </div>
            </div>
          }
        </div>
      </div>
    </div>
    )
  }
});
