
import { HOME_FETCH_FAIL, HOME_FETCH_SUCCESS } from './home.actions';

const initialState = {
  loading: 'true',
  users: [],
  error: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case HOME_FETCH_FAIL:
      return {
        ...state,
        loading: false,
        error: 'fetch failed',
      };
    default:
      return state;
  }

};
