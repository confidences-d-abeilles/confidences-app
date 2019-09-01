import React, { PureComponent, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Button } from '@cda/button';
import { Item } from '@cda/flex';
import Parrains from '../components/parrains';
import request from '../../../services/Net';
import { withNotification } from '../../../services/withNotification';
import Rating from '../components/rating';
import Loading from '../../../components/utils/Loading';
import Info from '../components/info';
import FileUpload from '../../../components/utils/FileUpload';
import Pictures from '../components/pictures';
import Identifier from '../components/identifier';

const HiveComponent = ({
  getHive, updateInfo, addPhoto, match: { params: { hiveId } }, fetchHive,
}) => {
  const hive = getHive(hiveId);

  useEffect(() => {
    fetchHive(hiveId);
  }, [hiveId]);

  const addPicture = (e) => {
    e.preventDefault();
    const file = document.getElementById('hive-img').files[0];
    if (file) {
      addPhoto({ id: hiveId, file });
    }
  };

  if (!hive) {
    return null;
  }
  return (
    <Item flex={3}>
      <h2>{hive.name}</h2>
      <Parrains parrainsList={(hive && hive.parrains) || []} />
      <Identifier handler={value => updateInfo(hiveId, 'identifier', value)} initialValue={hive.identifier} />
      <Rating value={parseFloat(hive.ratio) || 2.5} handler={value => updateInfo(hiveId, 'ratio', value)} />
      <h3>Informations</h3>
      <Info name="info" handler={(name, value) => updateInfo(hiveId, name, value)} defaultValue={hive.info} />
      <h3>Mémo technique</h3>
      <Info name="feedback" handler={(name, value) => updateInfo(hiveId, name, value)} defaultValue={hive.feedback} />
      <h3>Actualités</h3>
      Cette section est momentanément indisponible.
      <h3>Photos</h3>
      <form onSubmit={addPicture}>
        <FileUpload label="Taille recommandé : 400 x 300" identifier="hive-img" />
        <Button type="submit" primary>Ajouter</Button>
      </form>
      <Pictures data={hive.imgs} hiveId={hiveId} />
    </Item>
  );
};

// class Hive extends PureComponent {
//   state = {
//     hive: null,
//     newsToEdit: null,
//   };
//
//   componentDidMount() {
//     this.get();
//   }
//
//   componentDidUpdate(prevProps) {
//     if (this.props.match.params.hiveId !== prevProps.match.params.hiveId) {
//       this.setState({ hive: null });
//       this.get();
//     }
//   }
//
//   get = () => {
//     const { notification, match: { params: { hiveId } }, directHiveId } = this.props;
//     request({
//       url: `/hive/${directHiveId || hiveId}`,
//       method: 'get',
//     }, notification)
//       .then(res => this.setState({ hive: res }));
//   };
//
//   updateInfo = (name, value) => (e) => {
//     if (e) { e.preventDefault(); }
//     const { notification, fetchHives, match: { params: { hiveId } } } = this.props;
//     request({
//       url: `/hive/${hiveId}`,
//       method: 'patch',
//       data: {
//         [name]: value,
//       },
//     }, notification)
//       .then(() => {
//         this.setState({ hive: { ...this.state.hive, [name]: value } });
//         fetchHives();
//       });
//   };
//
//   addPhoto = (e) => {
//     e.preventDefault();
//     const { notification, match: { params: { hiveId } } } = this.props;
//     const data = new FormData();
//     data.append('id', hiveId);
//     if (document.getElementById('hive-img').files[0]) {
//       data.append('img', document.getElementById('hive-img').files[0]);
//       request({
//         url: '/hive/pho§to',
//         method: 'post',
//         data,
//         header: {
//           'content-type': 'multipart/form-data',
//         },
//       }, notification).then(() => this.get());
//     }
//   };
//
//
//   render() {
//     const { hive } = this.state;
//     const { match: { params: { hiveId } } } = this.props;
//     if (!hive) {
//       return <Item flex={3}><Loading /></Item>;
//     }

//   }
// }

HiveComponent.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      hiveId: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(HiveComponent);
