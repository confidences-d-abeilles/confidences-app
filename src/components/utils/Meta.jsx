import React from 'react';
import MetaTags from 'react-meta-tags';

export default ({ title }) => (
  <MetaTags>
    <title>{title ? `${title} | Confidences d'Abeilles` : 'Confidences d\'Abeilles'}</title>
  </MetaTags>
);
