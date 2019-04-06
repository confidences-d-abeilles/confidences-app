import React, { Component } from 'react';

import request from '../../../services/Net';
import { handleChange } from '../../../services/FormService';
import FileUpload from '../../utils/FileUpload';

export default class AdminManageServer extends Component {
  state = {
    meta: null,
    title: '',
    url: '',
    ogdescription: '',
    ogtitle: '',
    id: null,
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const { notification } = this.props;
    request({
      url: '/meta',
      method: 'GET',
    }, notification).then((res) => {
      this.setState({
        meta: res,
      });
    });
  }

  sendMeta = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    const {
      url,
      title,
      ogtitle,
      ogdescription,
    } = this.state;
    const formData = new FormData();
    formData.append('title', title);
    formData.append('ogtitle', ogtitle);
    formData.append('url', url);
    formData.append('ogdescription', ogdescription);
    if (document.getElementById('ogimg').files[0]) {
      formData.append('ogimg', document.getElementById('ogimg').files[0]);
    }
    request({
      url: '/meta',
      method: 'POST',
      data: formData,
      headers: {
        'content-type': 'multipart/form-data',
      },
    }, notification).then(() => {
      this.getData();
      this.clear();
    });
  };

  sendEditMeta = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    const {
      url,
      title,
      ogtitle,
      ogdescription,
      id,
    } = this.state;
    request({
      url: '/meta',
      method: 'PUT',
      data: {
        id,
        title,
        url,
        ogtitle,
        ogdescription,
      },
    }, notification).then(() => {
      this.getData();
      this.clear();
    });
  };

  deleteMeta = id => () => {
    const { notification } = this.props;
    request({
      url: `/meta/${id}`,
      method: 'delete',
    }, notification).then(() => this.getData());
  };

  clear = () => {
    this.setState({
      id: null,
      title: '',
      ogtitle: '',
      ogdescription: '',
      url: '',
    });
  };

  edit = meta => () => this.setState(meta);

  render() {
    const {
      id,
      meta,
      title,
      ogdescription,
      url,
      ogtitle,
    } = this.state;
    return (
      <div className="row">
        <div className="col-lg-12">
          <h2 className="text-center">Espace technique</h2>
          <h2 className="text-center">Blocs meta</h2>
        </div>
        <div className="col-lg-6">
          {meta && meta.length > 0 ? meta.map(e => (
            <div>
              <span className="lead">{e.title}</span>
              &nbsp;
              <button type="button" className="badge badge-info" style={{ cursor: 'pointer' }} onClick={this.edit(e)}>
                Editer
              </button>
              &nbsp;
              <button type="button" className="badge badge-danger" style={{ cursor: 'pointer' }} onClick={this.deleteMeta(e.id)}>
                Supprimer
              </button>
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
              L&apos;url doit être de la forme /company/presentation par exemple.&nbsp;
              C&apos;est tout ce qui se situe après le .fr.
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
            />
          </div>
          {!id && (
            <div className="form-group">
              <p className="alert alert-warning">
                Attention, la modification d&apos;un bloc méta ne permet pas d&apos;en
                &nbsp;changer l&apos;image.&nbps;
                Si une modification d&apos;image est nécessaire, supprimer puis recréer le bloc.
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
            >
              {id ? 'Modifier' : 'Ajouter'}
            </button>
            &nbsp;
            <button type="button" className="btn btn-primary" onClick={this.clear}>
              {id ? 'Annuler l\'edition' : 'Vider'}
            </button>
          </div>
        </form>
      </div>
    );
  }
}
