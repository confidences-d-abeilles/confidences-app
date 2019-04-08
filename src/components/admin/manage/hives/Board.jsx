import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Parrains from './Parrains';
import request from '../../../../services/Net';
import { withNotification } from '../../../../services/withNotification';
import Rating from './Rating';
import Loading from '../../../utils/Loading';
import Feedback from '../../../utils/Feedback';
import Info from './Info';
import FileUpload from '../../../utils/FileUpload';
import { Button } from '../../../utils/Button';
import Pictures from './Pictures';

const Board = ({ notification, match: { params: { hiveId } } }) => {
  const [hive, setHive] = useState(null);
  const [newsToEdit, setNewsToEdit] = useState(null);
  const get = () => {
    request({
      url: `/hive/${hiveId}`,
      method: 'get',
    }, notification).then(res => setHive(res));
  };

  const updateInfo = (name, value) => (e) => {
    if (e) { e.preventDefault(); }
    request({
      url: `/hive/${hiveId}`,
      method: 'patch',
      data: {
        [name]: value,
      },
    }, notification).then(() => setHive({ ...hive, [name]: value }));
  };

  const addPhoto = (e) => {
    e.preventDefault();
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
      }, notification).then(() => get());
    }
  };

  if (!hive) {
    get();
    return <Loading />;
  }

  return (
    <>
      <div className="row">
        <div className="col">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
            <li className="breadcrumb-item"><Link to="/admin/manage/hives">Ruches</Link></li>
            <li className="breadcrumb-item active">{hive && hive.name}</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-4">
          <Parrains parrainsList={(hive && hive.parrains) || []} />
          <Rating value={(hive && parseFloat(hive.ratio)) || 2.5} handler={(value) => updateInfo('ratio', value)()} />
          <h2>Informations</h2>
          <Info name="info" handler={updateInfo} defaultValue={hive.info} />
          <h2>Mémo technique</h2>
          <Info name="feedback" handler={updateInfo} defaultValue={hive.feedback} />
        </div>
        <div className="col-lg-8">
          <h2>Actualités</h2>
          <select onChange={({ target: { value: toEdit } }) => setNewsToEdit(toEdit)} className="my-2">
            <option value={null}>Choisissez une actualité à modifier</option>
            {hive.news.map(news => <option value={news.id} key={news.id}>{news.title}</option>)}
          </select>
          <Feedback name={newsToEdit} hiveId={hiveId} />
          <h2>Photos</h2>
          <form onSubmit={addPhoto}>
            <FileUpload label="Taille recommandé : 400 x 300" identifier="hive-img" />
            <Button type="submit" primary>Ajouter</Button>
          </form>
          <Pictures data={hive.imgs} hiveId={hiveId} refresh={get()} />
        </div>
      </div>
    </>
  );
};

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
