import React from 'react'
import { Link } from 'react-router-dom';
import SquareImg from '../../../../utils/SquareImg';

const config = require('../../../../../config.js')

const Parrains = ( props ) => (
  <div className="mb-4">
    <div className="card">
      <div className="card-block text-center">
        <h3 className="card-title">Informations generales</h3>
        <Link to={"/parrains/"+props.parrain.namespace} className="btn btn-info btn-sm">
          page du parrain
        </Link>
        <div className="row">
          <div className="col">
            <h3 className="card-title">Label</h3>
          </div>
          <div className="col">
            <h3 className="card-title">LogoHQ</h3>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <a href={config.cdn_url+'/'+props.bundleLabel} target="_blank">
              <SquareImg className="card-img-top img-fluid" src={config.cdn_url+'/'+props.bundleLabel} alt="Bundle label" />
            </a>
          </div>
          <div className="col">
            <a href={config.cdn_url+'/'+props.parrain.HQlogo} target="_blank">
              <SquareImg className="card-img-top img-fluid" src={config.cdn_url+'/'+props.parrain.HQlogo} alt="hqlogo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Parrains;
