import React from 'react';
import MetaTags from 'react-meta-tags';

export default ({ title }) => (
  <MetaTags>
    <title>{title ? `${title} | Association Confidences d'Abeilles` : 'Association Confidences d\'Abeilles'}</title>
  </MetaTags>
);
