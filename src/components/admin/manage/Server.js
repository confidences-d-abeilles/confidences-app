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

    edit = (meta) => () => this.setState(meta);

    render () {
        const { id, meta, title, ogdescription, url, ogtitle } = this.state;
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center">Espace technique</h2>
                </div>
                <div className="col-lg-6">
                    {meta && meta.map(e => (
                        <div>
                            <span className="lead">{e.title}</span>&nbsp;
                            <span className="badge badge-info" onClick={this.edit(e)}>Editer</span>&nbsp;
                            <span className="badge badge-danger" onClick={this.deleteMeta(e.id)}>Supprimer</span>
                            <h6>{e.url}</h6>
                            <h6>{e.ogtitle}</h6>
                            <p>{e.ogdescription}</p>
                            <hr />
                        </div>
                    ))}
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
                    <div className="form-group">
                        <FileUpload
                            identifier="ogimg"
                            label="OG Image"
                            accept="image/*"
                        />
                    </div>
                    <div className="form-group">
                        <button
                            type="submit"
                            className="btn btn-primary"
                        >Valider</button>
                    </div>
                </form>
            </div>
        )
    }
}
