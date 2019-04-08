import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactStars from 'react-stars';

import request from '../../../services/Net';
import { handleChange } from '../../../services/FormService';
import Loading from '../../utils/Loading';
import Feedback from '../../utils/Feedback';
import Meta from '../../utils/Meta';
import 'react-datepicker/dist/react-datepicker.css';
import Pictures from './hives/Pictures';
import { withNotification } from '../../../services/withNotification';
import { Button } from '../../utils/Button';

export default withNotification(class AdminManageHives extends Component {
  state = {
    hives: null,
    newHive: '',
    selected: '',
    actu: '',
    actuTitle: '',
    actuDate: '',
    ratio: 0,
    stateFeedback: 0,
    feedback: '',
  }

  componentDidMount() {
    this.get();
  }

  get() {
    const { notification } = this.props;
    request({
      url: '/hive',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        hives: res,
      });
    });
  }

  getOne() {
    const { idSelected } = this.state;
    const { notification } = this.props;
    request({
      url: `/hive/${idSelected}`,
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        selected: res,
      });
    });
  }

  addHive(e) {
    e.preventDefault();
    const { notification } = this.props;
    const { newHive } = this.state;
    request({
      url: '/hive',
      method: 'post',
      data: {
        name: newHive,
      },
    }, notification).then(() => {
      this.get();
      this.setState({
        newHive: '',
      });
    });
  }



  changeImg(e) {
    const { selected } = this.state;
    const { notification } = this.props;
    request({
      url: `hive/img/${selected.id}`,
      method: 'PUT',
      data: {
        img: e,
      },
    }, notification);
  }

  render() {
    const { newHive } = this.state;
    return (
      <div>
        <div className="row">
          <Meta title="Gérer les ruches" />
          <div className="col">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
              <li className="breadcrumb-item active">Ruches</li>
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>Créer une ruche</h3>
            <form className="form-inline my-3" onSubmit={this.addHive.bind(this)}>
              <input type="text" className="form-control mx-2" name="newHive" value={newHive} placeholder="Nom commun de la nouvelle ruche" onChange={handleChange.bind(this)} />
              <Button type="submit">Créer la ruche</Button>
            </form>
            <div style={{ maxHeight: '50vh', overflowY: 'scroll' }}>
              {this.state.hives
                ? (
                  <table className="table table-sm">
                    <tbody>
                      <tr>
                        <th>Nom</th>
                        <th>Occupation</th>
                        <th />
                      </tr>
                      {this.state.hives && this.state.hives.map(hive => (
                        <tr key={hive.id} className={(this.state.selected.id === hive.id) ? 'table-info' : null}>
                          <td>{hive.name}</td>
                          <td>
                            {`${hive.occupation} %`}
                          </td>
                          <td>
                            <Link to={`/admin/manage/hive/${hive.id}`} className="btn btn-link btn-sm">
                              Gérer
                            </Link>
                            <Link to={`/hive/${hive.id}`} className="btn btn-link btn-sm">
                              Voir
                            </Link>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )
                : <Loading />}
            </div>
          </div>
        </div>
      </div>
    );
  }
});
