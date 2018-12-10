import React, { Component } from 'react'
import request from '../../../services/Net';
import { handleChange } from '../../../services/FormService';
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import FileUpload from '../../utils/FileUpload';

export default class AdminManageServer extends Component {
    
    state = {
        meta: null,
        title: '',
        url: '',
        ogdescription: '',
        ogtitle: '',
        id: null,
    }

    constructor (props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
    }

    componentDidMount() {
        this.getData();
    }

    getData = () => {
        request({
			url: '/meta',
			method: 'GET'
		}, this.refs.notif).then((res) => {
			this.setState({
				meta : res
			})
		})
    }

    sendMeta = (e) => {
        e.preventDefault();
        const { url, title, ogtitle, ogdescription } = this.state;
        const formData = new FormData();
        formData.append('title', title);
        formData.append('ogtitle', ogtitle);
        formData.append('url', url);
        formData.append('ogdescription', ogdescription);
        if (document.getElementById("ogimg").files[0]) {
            formData.append('ogimg', document.getElementById("ogimg").files[0]);
        }
        request({
            url: '/meta',
            method : 'POST',
            data : formData,
            headers : {
                'content-type': 'multipart/form-data'
            },
        }, this.refs.notif).then(res => {
            this.getData();
        })
    }

    sendEditMeta = (e) => {
        e.preventDefault();
        const { url, title, ogtitle, ogdescription, id } = this.state;
        request({
            url: '/meta',
            method: 'PUT',
            data: {
                id,
                title,
                url,
                ogtitle,
                ogdescription,
            }
        }, this.refs.notif).then(res => {
            this.getData();
        })
    }

    deleteMeta = id => () => {
        request({
            url: `/meta/${id}`,
            method: 'delete'
        }, this.refs.notifs).then(res => this.getData());
    }

    cancelEdition = () => {
        this.setState({
            id: null,
            title: '',
            ogtitle: '',
            ogdescription: '',
            url: '',
        });
    }

    edit = (meta) => () => this.setState(meta);

    render () {
        const { id, meta, title, ogdescription, url, ogtitle } = this.state;
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center">Espace technique</h2>
                    <h2 className="text-center">Blocs meta</h2>
                </div>
                <div className="col-lg-6">
                    {meta && meta.length > 0 ? meta.map(e => (
                        <div>
                            <span className="lead">{e.title}</span>&nbsp;
                            <span className="badge badge-info" style={{ cursor: 'pointer' }} onClick={this.edit(e)}>Editer</span>&nbsp;
                            <span className="badge badge-danger" style={{ cursor: 'pointer' }} onClick={this.deleteMeta(e.id)}>Supprimer</span>
                            <h6>{e.url}</h6>
                            <h6>{e.ogtitle}</h6>
                            <p>{e.ogdescription}</p>
                            <hr />
                        </div>
                    )) : "Aucun bloc meta pour l'instant."}
                </div>
                <form onSubmit={id ? this.sendEditMeta : this.sendMeta} className="col-lg-6">
                    <div className="form-group">
                        <input
                            type="text"
                            name="title"
                            onChange={handleChange.bind(this)}
                            placeholder="Title"
                            className="form-control"
                            value={title}
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="ogtitle"
                            onChange={handleChange.bind(this)}
                            placeholder="OG Title"
                            className="form-control"
                            value={ogtitle}
                        />
                    </div>
                    <div className="form-group">
                        <p className="alert alert-info">
                            L'url doit être de la forme /company/presentation par exemple. C'est tout ce qui se situe après le .fr.
                        </p>
                        <input
                            type="text"
                            name="url"
                            onChange={handleChange.bind(this)}
                            placeholder="Url"
                            className="form-control"
                            value={url}
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            name="ogdescription"
                            onChange={handleChange.bind(this)}
                            placeholder="OG Description"
                            className="form-control"
                            value={ogdescription}
                        ></textarea>
                    </div>
                    {!id && (
                        <div className="form-group">
                            <p className="alert alert-warning">
                                Attention, la modification d'un bloc méta ne permet pas d'en changer l'image. Si une modification d'image est nécessaire, supprimer puis recréer le bloc.
                            </p>
                            <FileUpload
                                identifier="ogimg"
                                label="OG Image"
                                accept="image/*"
                            />
                        </div>
                    )}
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >{id ? "Modifier" : "Ajouter"}</button>&nbsp;
                        {id && <button type="button" className="btn btn-primary" onClick={this.cancelEdition}>Annuler l'edition</button>}
                    </div>
                </form>
            </div>
        )
    }
}
