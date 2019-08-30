import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@cda/button';
import { Item } from '@cda/flex';
import Parrains from './parrains';
import request from '../../../services/Net';
import { withNotification } from '../../../services/withNotification';
import Rating from './rating';
import Loading from '../../../components/utils/Loading';
import Feedback from '../../../components/utils/Feedback';
import Info from './info';
import FileUpload from '../../../components/utils/FileUpload';
import Pictures from './pictures';
import Identifier from './identifier';

class Hive extends PureComponent {
  state = {
    hive: null,
    newsToEdit: null,
  };

  componentDidMount() {
    this.get();
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.hiveId !== prevProps.match.params.hiveId) {
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
    const { notification, fetchHives, match: { params: { hiveId } } } = this.props;
    request({
      url: `/hive/${hiveId}`,
      method: 'patch',
      data: {
        [name]: value,
      },
    }, notification)
      .then(() => {
        this.setState({ hive: { ...this.state.hive, [name]: value } });
        fetchHives();
      });
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
        <h2>{hive.name}</h2>
        <div className="row">
          <div className="col-lg-4">
            <Parrains parrainsList={(hive && hive.parrains) || []} />
            <Identifier handler={value => this.updateInfo('identifier', value)()} initialValue={hive.identifier} />
            <Rating value={(hive && parseFloat(hive.ratio)) || 2.5} handler={value => this.updateInfo('ratio', value)()} />
            <h3>Informations</h3>
            <Info name="info" handler={this.updateInfo} defaultValue={hive.info} />
            <h3>Mémo technique</h3>
            <Info name="feedback" handler={this.updateInfo} defaultValue={hive.feedback} />
          </div>
          <div className="col-lg-8">
            <h3>Actualités</h3>
            <select onChange={({ target: { value: toEdit } }) => this.setState({ newsToEdit: toEdit })} className="my-2">
              <option value={null}>Choisissez une actualité à modifier</option>
              {hive.news.map(news => <option value={news.id} key={news.id}>{news.title}</option>)}
            </select>
            <Feedback name={this.state.newsToEdit} hiveId={hiveId} />
            <h3>Photos</h3>
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

Hive.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      hiveId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(Hive);
