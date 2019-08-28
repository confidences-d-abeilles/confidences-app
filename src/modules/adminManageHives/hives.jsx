import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { Button } from '@cda/button';
import Input from '@cda/input';
import { Rows, Item } from '@cda/flex';

import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';
import request from '../../services/Net';
import { handleChange } from '../../services/FormService';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';
import { withNotification } from '../../services/withNotification';
import Search from './search';
import AdminManageHivesBoard from './hive.connector';
import UserType from '../../components/admin/manage/users/UserType/UserType';

class AdminManageHives extends Component {
  state = {
    newHive: '',
  };

  componentDidMount() {
    const { fetchHives } = this.props;
    fetchHives();
  }

  addHive = (e) => {
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
      this.setState({
        newHive: '',
      });
    });
  };

  searchHandler = (queryString) => {
    const { notification } = this.props;
    this.setState({ hives: null });
    request({
      url: `/hive/bundle/owner/${queryString}`,
      method: 'GET',
    }, notification).then((res) => {
      this.setState({
        hives: res,
      });
    });
  };

  render() {
    const { newHive } = this.state;
    const { history, hives } = this.props;
    return (
      <>
        <Meta title="Gérer les ruches" />
        <Rows>
          <Search handler={this.searchHandler} className="col" />
          <form className="col form-inline" onSubmit={this.addHive}>
            <Input type="text" className="mx-2" name="newHive" value={newHive} placeholder="Nom commun de la nouvelle ruche" onChange={handleChange.bind(this)} />
            <Button type="submit">Créer la ruche</Button>
          </form>
        </Rows>
        <Rows>
          <Item flex={1} style={{ height: '100vh', overflowY: 'scroll' }}>
            {hives
              ? (
                <table className="table table-hover">
                  <tbody>
                    <tr>
                      <th>Nom</th>
                    </tr>
                    {hives && hives.map(({
                      id, identifier, parrainType, name,
                    }) => (
                      <tr key={id} onClick={() => history.push(`/admin/manage/hive/${id}`)} style={{ cursor: 'pointer' }}>
                        <td>
                          <UserType type={parrainType} />
                          &nbsp;
                          {`${name} ${identifier ? ` (${identifier})` : ''}`}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )
              : <Loading />}
          </Item>
          <Route exact path="/admin/manage/hive/:hiveId" component={AdminManageHivesBoard} />
        </Rows>
      </>
    );
  }
}

AdminManageHives.propTypes = {
  fetchHives: PropTypes.func.isRequired,
  notification: PropTypes.shape({
    addNotification: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNotification(withRouter(AdminManageHives));
