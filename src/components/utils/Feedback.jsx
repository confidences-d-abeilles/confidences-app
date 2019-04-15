import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import moment from 'moment';
import DatePicker from 'react-datepicker';

import { handleChange } from '../../services/FormService';
import request from '../../services/Net';
import Confirm from './Confirm';
import { withNotification } from '../../services/withNotification';
import { Button } from './Button';

export default withNotification(class Feedback extends Component {

  constructor (props) {
    super (props);
    this.state = {
      name : '',
      newsTake: 0,
      actuDate: moment(new Date()),
      actu: ''
    }
  }

  componentWillReceiveProps(nextProps) {
    const { notification, name } = this.props;
    if (nextProps.name !== name) {
      const data = new FormData();
      data.append('id_news', nextProps.name);
      request({
        url:'/news/getOneNews/',
        method: 'POST',
        data,
      }, notification).then((res) => {
        this.setState({
          newsTake: 1,
          actu: res[0].content,
          actuTitle: res[0].title,
          actuImg: res[0].img,
          oldImg:res[0].img,
          actuDate: moment(res[0].date),
          newsModify: nextProps.name
        }, () => {
          console.log(this.state.actuDate);
        })
      })
    }
  }

  updateActu(e) {
    e.preventDefault()
    const { notification } = this.props;
    const data = new FormData();
    data.append('content', this.state.actu);
    data.append('title', this.state.actuTitle);
    data.append('date', this.state.actuDate);
    data.append('oldImg', this.state.oldImg);
    if (document.getElementById("actu-img").files[0]) {
      data.append('img', document.getElementById('actu-img').files[0]);
    } else {
      data.append('img', this.state.actuImg);
    }
    request({
      url: `/news/${this.state.newsModify}`,
      method: 'put',
      data: data
    }, notification).then((res) => {
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
        oldImg: ''
      })
    });
  }

  createActu(e) {
    e.preventDefault();
    const { notification } = this.props;
    const data = new FormData();
    console.log(this.state.actuTitle);
    data.append('content', this.state.actu);
    data.append('title', this.state.actuTitle);
    data.append('date', this.state.actuDate);
    data.append('date_formated', moment(this.state.actuDate).format("DD/MM/YYYY"))
    if (document.getElementById("actu-img").files[0]) {
      data.append('img', document.getElementById('actu-img').files[0]);
    }
    request({
      url: '/news'+ (this.props.hiveId ? '/hive/'+this.props.hiveId : ''),
      method: 'post',
      data: data,
      header: {
        'content-type' : 'multipart/form-data',
      },
    }, notification).then(() => {
      this.setState({
        newsTake: 0,
        actu: '',
        actuTitle: '',
        actuDate: moment(new Date()),
        actuImg: '',
      })
      document.getElementById('actu-img').value = "";
    })
  }

  handleDateChange(date) {
    this.setState({
      actuDate: date
    });
  }

  deleteActu() {
    const { notification } = this.props;
    request({
      url: '/news/delete/'+this.state.newsModify,
      method: 'DELETE'
    }, notification).then((res) => {
      this.setState({
        newsModify: null,
        content: '',
        actuTitle: '',
        actuDate: moment(new Date()),
        actuImg: '',
        actu: ''
      })
    })
  }

  updateImg() {
    if (document.getElementById('actu-img').files[0].size < 5100000){
      this.setState({
        actuImg : document.getElementById("actu-img").files[0].name
      })
    } else {
      console.log("taille pas bonne");
      document.getElementById('actu-img').value = "";
    }
  }

  render() {
    return (
      <div>
      <form onSubmit={this.state.newsTake?this.updateActu.bind(this):this.createActu.bind(this)}>
        <div className="form-group">
          <input type="text" className="form-control" name="actuTitle" onChange={handleChange.bind(this)} value={this.state.actuTitle} placeholder='Titre'/>
        </div>
        <div className="form-group">
          <label>Date de l'actualité</label>
          <DatePicker
            dateFormat="DD/MM/YYYY"
            selected={this.state.actuDate}
            onChange={this.handleDateChange.bind(this)}
            className="form-control"
            />
        </div>
        <div className="form-group">
          <ReactQuill
            name="actu"
            className="form-control"
            onChange={(value) => { this.setState({ actu: value })}}
            value={this.state.actu}
            placeholder='actualité'
            modules={{
              toolbar: [
                ['bold', 'italic', 'underline','strike', 'blockquote'],
                [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
                ['link'],
                ['clean']
              ]
            }}/>
        </div>
        <div className="form-group">
          <label htmlFor="actu-img" className={(this.state.actuImg)?'active-upload':'upload'} style={{ position: 'relative' }}>
            <input type="file" className="form-control" id="actu-img" onChange={() => { this.updateImg() }} style={{ position: 'absolute', height: '5.5em', top: '0', left: "0", opacity: '0.0001'}}/>
            Glissez une image ou cliquez pour en sélectionner une parmi vos fichiers<br/>
            Recommandations : 800x600px, 100ko maximum - {(this.state.actuImg)?'Sélectionné : '+this.state.actuImg:"Aucun fichier sélectionné"}
          </label>
        </div>
        <Button type="submit" primary>Soumettre</Button>
        {this.state.newsModify ? <Confirm action={this.deleteActu.bind(this)} text="Supprimer cette news" className="btn btn-secondary btn-sm"/>: null}
      </form>
      </div>
    )
  }
});
