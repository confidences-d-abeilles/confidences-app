import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Input from '@cda/input';

import { Button } from '@cda/button';
import PropTypes from 'prop-types';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import Confirm from './Confirm';
import { withNotification } from '../../services/withNotification';

class Feedback extends Component {
  state = {
    name: '',
    newsTake: 0,
    actuDate: moment(new Date()),
    actu: '',
  };

  componentWillReceiveProps({ name: nextName }) {
    const { notification, name } = this.props;
    if (nextName !== name) {
      const data = new FormData();
      data.append('id_news', nextName);
      request({
        url: '/news/getOneNews/',
        method: 'POST',
        data,
      }, notification).then((res) => {
        this.setState({
          newsTake: 1,
          actu: res[0].content,
          actuTitle: res[0].title,
          actuImg: res[0].img,
          oldImg: res[0].img,
          actuDate: moment(res[0].date),
          newsModify: nextName,
        }, () => {
        });
      });
    }
  }

  updateActu(e) {
    e.preventDefault();
    const { notification } = this.props;
    const {
      actu, actuTitle, actuDate, oldImg, actuImg, newsModify,
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
    }, notification).then(() => {
      this.setState({
        selected: '',
        content: '',
        title: '',
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

  createActu(e) {
    e.preventDefault();
    const { notification, hiveId } = this.props;
    const {
      actu, actuTitle, actuDate,
    } = this.state;
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
    }, notification).then(() => {
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

  handleDateChange(date) {
    this.setState({
      actuDate: date,
    });
  }

  deleteActu() {
    const { notification } = this.props;
    const { newsModify } = this.state;
    request({
      url: `/news/delete/${newsModify}`,
      method: 'DELETE',
    }, notification).then(() => {
      this.setState({
        newsModify: null,
        content: '',
        actuTitle: '',
        actuDate: moment(new Date()),
        actuImg: '',
        actu: '',
      });
    });
  }

  updateImg() {
    if (document.getElementById('actu-img').files[0].size < 5100000) {
      this.setState({
        actuImg: document.getElementById('actu-img').files[0].name,
      });
    } else {
      console.log('taille pas bonne');
      document.getElementById('actu-img').value = '';
    }
  }

  render() {
    const {
      newsModify, newsTake, actuTitle, actuDate, actu, actuImg,
    } = this.state;
    return (
      <div>
        <form onSubmit={newsTake ? this.updateActu.bind(this) : this.createActu.bind(this)}>
          <Input type="text" name="actuTitle" onChange={handleChange.bind(this)} value={actuTitle} placeholder="Titre" />
          <div className="form-group">
            <label>Date de l'actualité</label>
            <DatePicker
              dateFormat="DD/MM/YYYY"
              selected={actuDate}
              onChange={this.handleDateChange.bind(this)}
              className="form-control"
              dropdownMode
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
            Glissez une image ou cliquez pour en sélectionner une parmi vos fichiers
              <br />
            Recommandations : 800x600px, 100ko maximum -
              {' '}
              {(actuImg) ? `Sélectionné : ${actuImg}` : 'Aucun fichier sélectionné'}
            </label>
          </div>
          <Button type="submit" primary>Soumettre</Button>
          {newsModify ? <Confirm action={this.deleteActu.bind(this)} text="Supprimer cette news" className="btn btn-secondary btn-sm" /> : null}
        </form>
      </div>
    );
  }
}

Feedback.propTypes = {
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
  hiveId: PropTypes.string.isRequired,
};

export default withNotification(Feedback);
