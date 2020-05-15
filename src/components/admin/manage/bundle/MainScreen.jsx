import React, { Component, useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Input from '@cda/input';

import request from '../../../../services/Net';
import List from './List';
import { withNotification } from '../../../../services/withNotification';

const BundlesMainScreen = ({ notification }) => {
  const [bundles, setBundles] = useState([]);


  const fetch = () => {
    request({
      url: '/bundle?page=1',
      method: 'get',
    }, notification).then((res) => {
      setBundles(res);
    });
  };

  useEffect(() => {
    fetch();
  }, []);


  return (
    <div className="row">
      <div className="col">
        <List data={bundles} />
      </div>
    </div>
  );
};

export default withNotification(withRouter(BundlesMainScreen));
