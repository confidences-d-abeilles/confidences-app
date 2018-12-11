import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import ReactQuill from 'react-quill';
import moment from 'moment';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import Confirm from './Confirm';

export default class Feedback extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsTake: 0,
      actuDate: moment(new Date()),
      actu: '',
    };
  }

  componentWillReceiveProps({ name }) {
    if (name) {
      const data = new FormData();
      data.append('id_news', name);
      request({
        url: '/news/getOneNews/',
        method: 'POST',
        data,
      }, this.refs.notif).then((res) => {
        this.setState({
          newsTake: 1,
          actu: res[0].content,
          actuTitle: res[0].title,
          actuImg: res[0].img,
          oldImg: res[0].img,
          actuDate: moment(res[0].date),
          newsModify: name,
        });
      });
    }
  }

  handleDateChange = (date) => {
    this.setState({
      actuDate: date,
    });
  }

  deleteActu = () => {
    const { newsModify } = this.state;
    request({
      url: `/news/delete/${newsModify}`,
      method: 'DELETE',
    }, this.refs.notif).then(() => {
      this.setState({
        newsModify: null,
        actuTitle: '',
        actuDate: moment(new Date()),
        actuImg: '',
        actu: '',
      });
    });
  }

  createActu(e) {
    e.preventDefault();
    const { actu, actuTitle, actuDate } = this.state;
    const { hiveId } = this.props;
    const data = new FormData();
    data.append('content', actu);
    data.append('title', actuTitle);
    data.append('date', actuDate);
    data.append('date_formated', moment(actuDate).format('DD/MM/YYYY'));
    if (document.getElementById('actu-img').files[0]) {
      data.append('img', document.getElementById('actu-img').files[0]);
    }
    request({
      url: `/news${hiveId ? `/hive/${hiveId}` : ''}`,
      method: 'post',
      data,
      header: {
        'content-type': 'multipart/form-data',
      },
    }, this.refs.notif).then(() => {
      this.setState({
        newsTake: 0,
        actu: '',
        actuTitle: '',
        actuDate: moment(new Date()),
        actuImg: '',
      });
      document.getElementById('actu-img').value = '';
    });
  }

  updateActu(e) {
    e.preventDefault();
    const {
      actu,
      actuTitle,
      actuDate,
      oldImg,
      actuImg,
      newsModify,
    } = this.state;
    const data = new FormData();
    data.append('content', actu);
    data.append('title', actuTitle);
    data.append('date', actuDate);
    data.append('oldImg', oldImg);
    if (document.getElementById('actu-img').files[0]) {
      data.append('img', document.getElementById('actu-img').files[0]);
    } else {
      data.append('img', actuImg);
    }
    request({
      url: `/news/${newsModify}`,
      method: 'put',
      data,
    }, this.refs.notif).then(() => {
      this.setState({
        actuDate: moment(new Date()),
        actuTitle: '',
        newsTake: 0,
        actu: '',
        actuImg: '',
        newsModify: null,
        oldImg: '',
      });
    });
  }

  updateImg() {
    if (document.getElementById('actu-img').files[0].size < 5100000) {
      this.setState({
        actuImg: document.getElementById('actu-img').files[0].name,
      });
    } else {
      document.getElementById('actu-img').value = '';
    }
  }

  render() {
    const {
      actuImg,
      newsTake,
      actuTitle,
      actuDate,
      actu,
      newsModify,
    } = this.state;
    return (
      <div>
        <NotificationSystem ref="notif" />
        <h3 className="text-center">Ajouter une actualité</h3>
        <form onSubmit={newsTake ? this.updateActu.bind(this) : this.createActu.bind(this)}>
          <div className="form-group">
            <input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} value={actuTitle} placeholder="Titre" />
          </div>
          <div className="form-group">
            <span>Date de l&apos;actualité</span>
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={actuDate}
              onChange={this.handleDateChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <ReactQuill
              name="actu"
              className="form-control"
              onChange={(value) => { this.setState({ actu: value }); }}
              value={actu}
              placeholder="actualité"
              modules={{
                toolbar: [
                  ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                  [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
                  ['link'],
                  ['clean'],
                ],
              }}
            />
          </div>
          <div className="form-group">
            <label htmlFor="actu-img" className={(actuImg) ? 'active-upload' : 'upload'} style={{ position: 'relative' }}>
              <input
                type="file"
                className="form-control"
                id="actu-img"
                onChange={() => { this.updateImg(); }}
                style={{
                  position: 'absolute', height: '5.5em', top: '0', left: '0', opacity: '0.0001',
                }}
              />
            Glissez une image ou cliquez pour en séléctionner une parmi vos fichiers
              <br />
            Recommandations : 800x600px, 100ko maximum -
              {' '}
              {(actuImg) ? `Selectionné : ${actuImg}` : 'Aucun fichier séléctionné'}
            </label>
          </div>
          <button type="submit" className="btn btn-secondary btn-sm">Soumettre</button>
        </form>
        <br />
        {newsModify ? <Confirm action={this.deleteActu} text="Supprimer cette news" className="btn btn-secondary btn-sm" /> : null}
      </div>
    );
  }
}

Feedback.propTypes = {
  name: PropTypes.string,
};

Feedback.defaultProps = {
  name: null,
};
