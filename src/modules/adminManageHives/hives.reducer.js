import { HIVES_FETCH_SUCCESS } from './hives.actions';

const initialState = {
  hives: null,
};


export default (state = initialState, action) => {
  switch (action.type) {
    case HIVES_FETCH_SUCCESS:
      return {
        ...state,
        hives: action.data,
      };
    default:
      return state;
  }
};
