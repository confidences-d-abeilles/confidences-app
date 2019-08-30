import { combineReducers } from 'redux';
import home from './home/home.reducer';
import adminHives from './adminManageHives/hives.reducer';

const reducers = combineReducers({
  home,
  adminHives,
});

export default reducers;
