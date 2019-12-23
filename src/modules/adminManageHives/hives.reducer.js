import {
  HIVES_FETCH,
  HIVES_FETCH_FAIL,
  HIVES_FETCH_SUCCESS,
  HIVES_SET_NEEDLE
} from './hives.actions';

const initialState = {
  hives: [],
  loading: true,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case HIVES_FETCH:
      return {
        ...state,
        loading: state.hives.length <= 0, // Only show loader if no data present
      };
    case HIVES_FETCH_SUCCESS:
      return {
        ...state,
        hives: action.data,
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
