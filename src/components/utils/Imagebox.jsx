import React, { useState } from 'react';
import Lightbox from 'lightbox-react';
import 'lightbox-react/style.css';

export default ({
 width, height, paddingTop, src, className, ...props 
}) => {
  const [opened, setOpened] = useState(false);

  return (
    <div
      onClick={() => setOpened(true)}
      className={className}
      style={{
        width,
        cursor: 'pointer',
        height,
        backgroundPosition: 'center',
        paddingTop,
        backgroundImage: `url(${src})`,
        backgroundSize: 'cover',
      }}
      {...props}
    >
      {opened && <Lightbox mainSrc={src} onCloseRequest={() => setOpened(false)} />}
    </div>
  );
};
