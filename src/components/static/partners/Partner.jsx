import React from 'react';

const Partner = props => (
  <div className="row mb-5">
    <div className="col-lg-4 text-center d-flex flex-column justify-content-center py-5">
      <img src={props.img} alt="Thomas Apiculture" className="img-fluid align-self-center" style={{ maxHeight: '10em', flex: 0 }} />
    </div>
    <div className="col-lg-8" style={{ fontFamily: 'highTo', fontSize: '1.25em' }}>
      <h3 className="mb-4" style={{ color: '#E49C00' }}>{props.title}</h3>
      <p style={{ color: '#666666' }} dangerouslySetInnerHTML={{ __html: props.content }} />
      <p className="text-center">
        <a href={props.link} target="_blank" rel="noopener noreferrer" className="btn btn-link">En savoir plus</a>
      </p>
    </div>
  </div>
);

export default Partner;
