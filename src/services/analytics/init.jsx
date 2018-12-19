import ReactGA from 'react-ga';
import { isLoggedIn, getUserType } from '../AuthService';

export default (BaseComponent) => {
  if (process.env.NODE_ENV === 'production') {
    ReactGA.initialize('UA-73256412-3');
    if (isLoggedIn(true) && getUserType() === '4') {
      ReactGA.ga('set', 'dimension1', 1);
    } else {
      ReactGA.ga('set', 'dimension1', 0);
    }
  }
  return BaseComponent;
};
