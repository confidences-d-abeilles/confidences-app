import { combineReducers } from 'redux';
import home from './home/home.reducer';

const reducers = combineReducers({
  home,
});

export default reducers;
