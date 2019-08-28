import React, { useEffect } from 'react';
import { Route, withRouter } from 'react-router-dom';

import { Rows, Item } from '@cda/flex';

import 'react-datepicker/dist/react-datepicker.css';

import PropTypes from 'prop-types';
import Loading from '../../components/utils/Loading';
import Meta from '../../components/utils/Meta';
import Search from './search';
import Add from './add';
import AdminManageHivesBoard from './hive.connector';
import UserType from '../../components/admin/manage/users/UserType/UserType';

const AdminManageHives = ({
  history, hives, fetchHives, addHive, needle,
}) => {
  useEffect(() => {
    fetchHives();
  }, []);

  return (
    <>
      <Meta title="Gérer les ruches" />
      <Rows>
        <Search handler={fetchHives} value={needle} />
        <Add handler={addHive} />
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
};

AdminManageHives.propTypes = {
  fetchHives: PropTypes.func.isRequired,
};

export default withRouter(AdminManageHives);
