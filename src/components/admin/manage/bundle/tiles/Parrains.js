import React from 'react'
import SquareImg from '../../../../utils/SquareImg';

const Parrains = ( props ) => (
  <div className="mb-4">
    <div className="card">
      <div className="card-block text-center">
        <h3 className="card-title">Informations generales</h3>
        <div className="row">
          <div className="col">
            <p>{props.parrain.visible ? 'page visible ' : 'page non visible'}</p>
          </div>
          <div className="col">
              <a className="btn btn-info btn-sm" href={"/parrains/"+props.parrain.namespace} target="_blank" rel="noopener noreferrer">{"/parrains/"+props.parrain.namespace}</a>
          </div>
        </div>
        <br />
        <br />
        <div className="row">
          <div className="col">
            <h3 className="card-title">Label</h3>
            <a href={process.env.REACT_APP_CONTENT_DOMAIN+'/'+props.bundleLabel} target="_blank" rel="noopener noreferrer">
              <SquareImg className="card-img-top img-fluid" src={process.env.REACT_APP_CONTENT_DOMAIN+'/'+props.bundleLabel} alt="Bundle label" />
            </a>
          </div>
          <div className="col">
            <h3 className="card-title">LogoHQ</h3>
            <a href={process.env.REACT_APP_CONTENT_DOMAIN+'/'+props.parrain.HQlogo} target="_blank" rel="noopener noreferrer">
              <SquareImg className="card-img-top img-fluid" src={process.env.REACT_APP_CONTENT_DOMAIN+'/'+props.parrain.HQlogo} alt="hqlogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Parrains;
