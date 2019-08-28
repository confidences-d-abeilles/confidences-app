import { HIVES_FETCH, HIVES_FETCH_SUCCESS, HIVES_SET_NEEDLE } from './hives.actions';

const initialState = {
  hives: null,
  needle: '',
};


export default (state = initialState, action) => {
  switch (action.type) {
    case HIVES_FETCH:
      return {
        ...state,
      };
    case HIVES_SET_NEEDLE:
      return {
        ...state,
        needle: action.needle,
      };
    case HIVES_FETCH_SUCCESS:
      return {
        ...state,
        hives: action.data,
      };
    default:
      return state;
  }
};
