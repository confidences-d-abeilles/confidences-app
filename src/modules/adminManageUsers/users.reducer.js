import {
  USERS_FETCH,
  USERS_FETCH_FAIL,
  USERS_FETCH_SUCCESS, USERS_SEARCH,
} from './users.actions';
import { normalizeUser } from './users.utils';

const initialState = {
  users: [],
  filteredUsers: [],
  loading: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case USERS_FETCH:
      return {
        ...state,
        loading: state.users.length <= 0, // Only show loader if no data present
      };
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        users: action.data,
        filteredUsers: action.data,
        loading: false,
      };
    case USERS_FETCH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case USERS_SEARCH:
      const normalizedString = action.data.toLowerCase();
      if (normalizedString.length === 0) {
        return {
          ...state,
          filteredUsers: state.users,
        };
      }
      const matches = str => str.indexOf(normalizedString) >= 0;
      const results = state.users.map(normalizeUser).filter(user =>
        matches(user.firstname) || matches(user.name) || matches(user.company_name));
      return {
        ...state,
        filteredUsers: results,
      };
    default:
      return state;
  }
};
