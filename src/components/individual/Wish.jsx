import React from 'react';
import Wish from '../../modules/wish/Wish';
import { withNotification } from '../../services/withNotification';

export default withNotification(({ notification }) => (
  <Wish notification={notification} mainProduct={20} basePots={8} />
));
