import request from '../../services/Net';

export const HIVES_FETCH = 'HIVES_FETCH';
export const HIVES_FETCH_SUCCESS = 'HIVES_FETCH_SUCCESS';

export const fetchHives = () => async (dispatch) => {
  const data = await request({
    url: '/hive/bundle/owner',
    method: 'GET',
  });
  dispatch({ type: HIVES_FETCH_SUCCESS, data });
};
