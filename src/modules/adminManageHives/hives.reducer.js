import {
  HIVES_FETCH,
  HIVES_FETCH_FAIL,
  HIVES_FETCH_SUCCESS,
} from './hives.actions';

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
    default:
      return state;
  }
};
