
import { HOME_FETCH_SUCCESS } from './home.actions';

const initialState = {
  loading: 'true',
  users: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HOME_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    default:
      return state;
  }

};
