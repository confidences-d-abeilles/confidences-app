import {
  HIVES_FETCH,
  HIVES_FETCH_FAIL,
  HIVES_FETCH_SUCCESS,
} from './hives.actions';
import { FETCH_HIVE_SUCCESS, UPDATE_INFO_SUCCESS } from './hive/hive.actions';

const initialState = {
  hives: {},
  loading: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case HIVES_FETCH:
      return {
        ...state,
        loading: true,
      };
    case HIVES_FETCH_SUCCESS:
      return {
        ...state,
        hives: action.data.reduce((acc, hive) => ({ ...acc, [hive.id]: hive }), {}),
        loading: false,
      };
    case HIVES_FETCH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case FETCH_HIVE_SUCCESS:
      return {
        ...state,
        hives: {
          ...state.hives,
          [action.data.id]: {
            ...action.data,
          },
        },
      };
    case UPDATE_INFO_SUCCESS:
      return {
        ...state,
        hives: {
          ...state.hives,
          [action.id]: {
            ...state.hives[action.id],
            ...action.data,
          },
        },
      };
    default:
      return state;
  }
};
