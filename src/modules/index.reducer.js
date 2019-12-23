import { combineReducers } from 'redux';
import home from './home/home.reducer';
import adminHives from './adminManageHives/hives.reducer';
import adminUsers from './adminManageUsers/users.reducer';

const reducers = combineReducers({
  home,
  adminHives,
  adminUsers,
});

export default reducers;
