import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Columns } from '@cda/flex';
import Input from '@cda/input';

import request from '../../../../services/Net';
import List from './List';
import { withNotification } from '../../../../services/withNotification';
import usePages from '../../../../services/pagination/usePages';
import Pages from '../../../../services/pagination/pages';

const BundlesMainScreen = ({ notification }) => {
  const [bundles, setBundles] = useState([]);
  const pageData = usePages();
  const { page, setPages } = pageData;


  const fetch = () => {
    request({
      url: `/bundle?page=${page}`,
      method: 'get',
    }, notification, true).then(({ payload, pages }) => {
      setBundles(payload);
      setPages(pages)
    });
  };

  useEffect(() => {
    fetch();
  }, [page]);


  return (
    <Columns>
      <List data={bundles} />
      <Pages {...pageData} />
    </Columns>
  );
};

export default withNotification(withRouter(BundlesMainScreen));
