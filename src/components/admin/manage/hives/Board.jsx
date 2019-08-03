import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@cda/button';
import { Item } from '@cda/flex';
import Parrains from './Parrains';
import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';
import Rating from './Rating';
import Loading from '../../../utils/Loading';
import Feedback from '../../../utils/Feedback';
import Info from './Info';
import FileUpload from '../../../utils/FileUpload';
import Pictures from './Pictures';

class Board extends PureComponent {
  state = {
    hive: null,
    newsToEdit: null,
  };

  componentDidMount() {
    this.get();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.hiveId !== prevProps.match.params.hiveId) {
      console.log('Route change!');
      this.setState({ hive: null });
      this.get();
    }
  }

  get = () => {
    const { notification, match: { params: { hiveId } }, directHiveId } = this.props;
    request({
      url: `/hive/${directHiveId || hiveId}`,
      method: 'get',
    }, notification)
      .then(res => this.setState({ hive: res }));
  };

  updateInfo = (name, value) => (e) => {
    if (e) { e.preventDefault(); }
    const { notification, match: { params: { hiveId } } } = this.props;
    request({
      url: `/hive/${hiveId}`,
      method: 'patch',
      data: {
        [name]: value,
      },
    }, notification).then(() => this.setState({ hive: { ...this.state.hive, [name]: value } }));
  };

  addPhoto = (e) => {
    e.preventDefault();
    const { notification, match: { params: { hiveId } } } = this.props;
    const data = new FormData();
    data.append('id', hiveId);
    if (document.getElementById('hive-img').files[0]) {
      data.append('img', document.getElementById('hive-img').files[0]);
      request({
        url: '/hive/photo',
        method: 'post',
        data,
        header: {
          'content-type': 'multipart/form-data',
        },
      }, notification).then(() => this.get());
    }
  };


  render() {
    const { hive } = this.state;
    const { match: { params: { hiveId } } } = this.props;
    if (!hive) {
      return <Item flex={3}><Loading /></Item>;
    }
    return (
      <Item flex={3}>
        <div className="row">
          <div className="col-lg-4">
            <Parrains parrainsList={(hive && hive.parrains) || []} />
            <Rating value={(hive && parseFloat(hive.ratio)) || 2.5} handler={value => this.updateInfo('ratio', value)()} />
            <h2>Informations</h2>
            <Info name="info" handler={this.updateInfo} defaultValue={hive.info} />
            <h2>Mémo technique</h2>
            <Info name="feedback" handler={this.updateInfo} defaultValue={hive.feedback} />
          </div>
          <div className="col-lg-8">
            <h2>Actualités</h2>
            <select onChange={({ target: { value: toEdit } }) => this.setState({ newsToEdit: toEdit })} className="my-2">
              <option value={null}>Choisissez une actualité à modifier</option>
              {hive.news.map(news => <option value={news.id} key={news.id}>{news.title}</option>)}
            </select>
            <Feedback name={this.state.newsToEdit} hiveId={hiveId} />
            <h2>Photos</h2>
            <form onSubmit={this.addPhoto}>
              <FileUpload label="Taille recommandé : 400 x 300" identifier="hive-img" />
              <Button type="submit" primary>Ajouter</Button>
            </form>
            <Pictures data={hive.imgs} hiveId={hiveId} refresh={this.get} />
          </div>
        </div>
      </Item>
    );
  }
}

Board.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      hiveId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }),
};

export default withNotification(Board);
