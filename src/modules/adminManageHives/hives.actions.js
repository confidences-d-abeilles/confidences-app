import request from '../../services/Net';

export const HIVES_FETCH = 'HIVES_FETCH';
export const HIVES_FETCH_SUCCESS = 'HIVES_FETCH_SUCCESS';
export const HIVES_FETCH_FAIL = 'HIVES_FETCH_FAIL';

export const fetchHives = needle => ({ type: HIVES_FETCH, needle });

export const HIVES_ADD = 'HIVES_ADD';
export const HIVES_ADD_SUCCESS = 'HIVES_ADD_SUCCESS';
export const HIVES_ADD_FAIL = 'HIVES_ADD_FAIL';

export const addHive = name => async (dispatch) => {
  dispatch({ type: HIVES_ADD });
  await request({
    url: '/hive',
    method: 'post',
    data: {
      name,
    },
  });
  dispatch(fetchHives());
  dispatch({ type: HIVES_ADD_SUCCESS });
};
