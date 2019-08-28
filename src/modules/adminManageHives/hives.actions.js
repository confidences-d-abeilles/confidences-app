import request from '../../services/Net';

export const HIVES_FETCH = 'HIVES_FETCH';
export const HIVES_SET_NEEDLE = 'HIVES_SET_NEEDLE';
export const HIVES_FETCH_SUCCESS = 'HIVES_FETCH_SUCCESS';

export const fetchHives = needle => async (dispatch) => {
  if (needle) {
    dispatch({ type: HIVES_SET_NEEDLE, needle });
  }
  dispatch({ type: HIVES_FETCH });
  const data = await request({
    url: `/hive/bundle/owner${needle ? `/${needle}` : ''}`,
    method: 'GET',
  });
  dispatch({ type: HIVES_FETCH_SUCCESS, data });
};

export const HIVES_ADD = 'HIVES_ADD';
export const HIVES_ADD_SUCCESS = 'HIVES_ADD_SUCCESS';

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
