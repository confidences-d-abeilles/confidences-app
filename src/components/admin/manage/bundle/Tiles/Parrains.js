import React from 'react'
import { Link } from 'react-router-dom';
import SquareImg from '../../../../utils/SquareImg';

const config = require('../../../../../config.js')

const Parrains = ( props ) => (
  <div className="mb-4">
    <div className="card">
      <div className="card-block">
        <h3 className="card-title">Informations generales</h3>
        <Link to={"/parrains/"+props.parrain.namespace} className="btn btn-info btn-sm">
          page du parrain
        </Link>
        <h3 className="card-title">Label</h3>
        <div className="row">
          <div className="col-4">
            <SquareImg className="card-img-top img-fluid" src={config.cdn_url+'/'+props.bundleLabel} alt="Bundle label" />
          </div>
          <div className="col-6">
            upload le fichier ?
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <SquareImg className="card-img-top img-fluid" src={config.cdn_url+'/'+props.parrain.HQlogo} alt="hqlogo" />
          </div>
          <div className="col-6">
            upload le fichier ?
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Parrains;
