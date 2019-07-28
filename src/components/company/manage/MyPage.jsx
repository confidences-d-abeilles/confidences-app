import React, { Component } from 'react';
import moment from 'moment';
import Input from '@cda/input';
import Button from '@cda/button';
import ButtonLink from '@cda/button-link';

import { handleChange, handleTick } from '../../../services/FormService';
import request from '../../../services/Net';
import Loading from '../../utils/Loading';
import Feedback from '../../utils/Feedback';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class CompanyManageMyPage extends Component {
	constructor (props) {
		super (props);

		this.state = {
			id_user : '',
			name : '',
			namespace : '',
			description : '',
			involvement : '',
			logo: null,
			cover: null,
			link1_name: '',
			link1_url: '',
			link2_name: '',
			link2_url: '',
			bundle: null,
			visible: false,
			english: false,
			bundle_date: new Date(),
			bundle_state: 0,
			allFeedback: null
		}
	}

	componentDidMount() {
		this.get();
		this.getActu();
	}

	getActu(){
    const { notification } = this.props;
    request({
			url:'/news/owner/',
			method:'get'
		}, notification).then((res) => {
			this.setState({
				actus: res
			})
		})
	}

	get() {
    const { notification } = this.props;
    request({
			url : '/user/me',
			method: 'get'
		}, notification).then((res) => {
			this.setState({
				user : res,
				id_user : res.id,
				name : res.company_name,
				namespace : res.namespace,
				fakeNamespace : res.namespace,
				logo: res.logo,
				cover: res.cover,
				description : res.description,
				involvement : res.involvement,
				link1_name: res.link1_name,
				link1_url: res.link1_url,
				link2_name: res.link2_name,
				link2_url: res.link2_url,
				english: res.english,
				visible: res.visible
			});
			if (res.bundles[0]) {
				this.setState({
					bundle: res.bundles[0],
					bundle_date: moment(res.bundles[0].start_date),
					bundle_state: res.bundles[0].state
				})

			}
		}).catch((err) => {})


	}

	submit(e) {
		e.preventDefault();
    const { notification } = this.props;
    if (this.state.description.length > 1000) {
			notification.addNotification({
				message: "La présentation générale de votre entreprise est un peu trop longue. Merci de la raccourcir.",
				level: 'warning'
			})
		} else if (this.state.involvement.length > 3700) {
			notification.addNotification({
				message: 'Le champs "Votre engagement en faveur de la biodiversité" contient trop de caractères. Merci de le raccourcir.',
				level: 'warning'
			})
		} else {
			const formData = new FormData();
			formData.append('company_name', this.state.name);
			formData.append('namespace', this.state.namespace);
			formData.append('description', this.state.description);
			formData.append('involvement', this.state.involvement);
			formData.append('link1_name', this.state.link1_name);
			formData.append('link1_url', this.state.link1_url);
			formData.append('link2_name', this.state.link2_name);
			formData.append('link2_url', this.state.link2_url);
			formData.append('english', this.state.english);
			formData.append('visible', this.state.visible);
			if (document.getElementById("cover").files[0]) {
				formData.append('cover', document.getElementById("cover").files[0]);
			}
			if (document.getElementById("logo").files[0]) {
				formData.append('logo', document.getElementById("logo").files[0]);
			}
			request({
				url : '/user',
				method : 'put',
				data : formData,
				headers : {
					'content-type': 'multipart/form-data'
				}
			}, notification).then((res) => {
				this.get()
			}).catch((err) => {

			});
		}
	}


	launchModify(e) {
		e.preventDefault();
		console.log(e.target);
		this.setState({
			newsModify: e.target.value
		})
}

	replaceNamespace(e) {
		e.preventDefault();
		const val = e.target.value;
		let TabSpec = {"à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","è":"e","é":"e","ê":"e","ë":"e","ç":"c","ì":"i","í":"i","î":"i","ï":"i","ù":"u","ú":"u","û":"u","ü":"u","ÿ":"y","ñ":"n","_":" "};
		let reg=/[àáäâèéêëçìíîïòóôõöøùúûüÿñ_]/gi;
		this.setState({
			fakeNamespace: e.target.value,
			namespace: (val.replace(reg,function(){ return TabSpec[arguments[0].toLowerCase()];}).toLowerCase()).replace(/\W+/g, '-')
		})
		console.log(this.state.namespace);
	}

	render () {
		return (
			<div>
				<h2 className="text-center my-4">Modifier ma page</h2>
				<div className="row mb-4">
					<div className="col text-center">
						<ButtonLink href={require('../../../assets/page_ent.pdf')} external>Comment personnaliser ma page ?</ButtonLink>
					</div>
					<div className="col text-center">
						<ButtonLink href={(this.state.user)?"/parrains/"+this.state.user.namespace:'/'} external>Voir ma page</ButtonLink>
					</div>
				</div>
				{(this.state.user)?
				<form>
          <label>Nom de l'entreprise</label>
          <Input type="text" placeholder="Nom de l'entreprise" name="name" value={this.state.name} onChange={handleChange.bind(this)} />
          <label>URL personnalisée de votre entreprise</label>
          <Input type="text" placeholder="Nom de l url" name="fakeNamespace" value={this.state.fakeNamespace} onChange={this.replaceNamespace.bind(this)} /><br />
          <label>{"https://parrainagederuches.fr/parrains/"+this.state.namespace}</label>
          <hr />
					<div className="form-group">
						<label>Photo de couverture de votre page {(this.state.cover)?<a href={process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.cover} target="_blank" rel="noopener noreferrer">Visualiser l'image actuelle</a>:null}</label>
						<label htmlFor="cover" className={(this.state.newCover)?'active-upload':'upload'} style={{ position: 'relative' }}>
							<input type="file" className="form-control" id="cover" onChange={() => { this.setState({ newCover : document.getElementById("cover").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
							Glissez une {(this.state.cover)?'nouvelle':null} image ici ou cliquez pour en sélectionner une parmi vos fichiers<br/>
							Recommandations : 1140x320px, 160ko maximum - {(this.state.newCover)?'Sélectionné : '+this.state.newCover:"Aucun fichier sélectionné"}
						</label>
					</div>
					<div className="form-group">
						<label>Logo de votre entreprise {(this.state.logo)?<a href={process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.logo} target="_blank" rel="noopener noreferrer">Visualiser le logo actuel</a>:null}</label>
						<label htmlFor="logo" className={(this.state.newLogo)?'active-upload':'upload'} style={{ position: 'relative' }}>
							<input type="file" className="form-control" id="logo" onChange={() => { this.setState({ newLogo : document.getElementById("logo").files[0].name }) }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
							Glissez votre {(this.state.logo)?'nouveau':null} logo ici ou cliquez pour en sélectionner un parmi vos fichiers<br/>
							Recommandations : 200x200px, 30ko maximum - {(this.state.newLogo)?'Sélectionné : '+this.state.newLogo:"Aucun fichier sélectionné"}
						</label>

					</div>
					<div className="form-group">
						<label>Présentation générale de l’entreprise ({600 - this.state.description.length} caractères restants)</label>
						<textarea name="description" maxLength="600" className="form-control" value={this.state.description} onChange={handleChange.bind(this)} placeholder="Présentation générale de l’entreprise (600 caractères max. espaces compris)" />
					</div>
					<div className="form-group">
						<label>Notre engagement en faveur de la biodiversité ({800 - this.state.involvement.length} caractères restants)</label>
						<textarea name="involvement" maxLength="800" className="form-control" value={this.state.involvement} onChange={handleChange.bind(this)} placeholder="Notre engagement en faveur de la biodiversité (800 caractères max. espaces compris)" />
					</div>
          <label>Bouton d'action 1</label>
          <Input type="text" name="link1_name" value={this.state.link1_name} placeholder="Texte à afficher" onChange={handleChange.bind(this)} />
          <Input type="text" name="link1_url" value={this.state.link1_url} placeholder="URL du bouton d'action 1" onChange={handleChange.bind(this)} /><br />
          <label>Bouton d'action 2</label>
          <Input type="text" name="link2_name" value={this.state.link2_name} placeholder="Texte à afficher" onChange={handleChange.bind(this)} />
          <Input type="text" name="link2_url" value={this.state.link2_url} placeholder="URL du bouton d'action 2" onChange={handleChange.bind(this)} />
						<div className="form-group">
							<label htmlFor="english"><Input disabled={this.state.bundle_state >= 2  ? false: true} type="checkbox" name="english" id="english" onChange={handleTick.bind(this)} checked={this.state.english} /> Version anglaise</label>
						</div>
						<div className="form-group">
							<label htmlFor="visible"><Input disabled={this.state.bundle_state >= 2 ? false: true} type="checkbox" name="visible" id="visible" onChange={handleTick.bind(this)} checked={this.state.visible} /> Rendre ma page publique</label> {(this.state.bundle_state < 2) ? <span>(Fonctionnalité indisponible tant que le paiement du parrainage n’est pas validé)</span> : null}
						</div>


					<div className="form-group">
            <Button type="submit" onClick={this.submit.bind(this)}>Enregistrer les modifications</Button>
					</div>
				</form>:<Loading />}
				{/*<Feedback name={this.state.newsModify?this.state.newsModify:null} />*/}
				{/*{this.state.actus ?*/}
        {/*  <div>*/}
        {/*    <h3 className="my-4">Modifier une news</h3>*/}
        {/*    <select className="form-control" onChange={this.launchModify.bind(this)} name="newsModify">*/}
        {/*      <option selected disabled>News a modifier</option>*/}
        {/*      {this.state.actus.map((actu) => {*/}
        {/*        const date = (actu.date)?moment(actu.date):moment(actu.createdAt);*/}
        {/*        return (*/}
        {/*          <option value={actu.id}>{actu.title} ( {date.format("DD/MM/YYYY")} )</option>*/}
        {/*        )*/}
        {/*      })}*/}
        {/*    </select>*/}
        {/*  </div>*/}
				{/*:null}*/}
			</div>
		)
	}
});
