import request from '../../services/Net';

const HOME_FETCH_START = 'HOME_FETCH_START';
export const HOME_FETCH_SUCCESS = 'HOME_FETCH_SUCCESS';


export const fetchPublicUsers = async (dispatch) => {
  dispatch({ type: HOME_FETCH_START });
  const data = await request({
    url: '/user/public',
    method: 'GET',
  });
  dispatch({ type: HOME_FETCH_SUCCESS, payload: data });
};
