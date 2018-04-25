import React from 'react'
import { Link } from 'react-router-dom';

const Parrains = ( props ) => (
  <div className="mb-4 text-center">
    <div className="card">
      <div className="card-block">
        <h3 className="card-title">Informations generales</h3>
        <Link to={"/parrains/"+props.namespace} className="btn btn-info btn-sm">
          page du parrain
        </Link>

      </div>
    </div>
  </div>
)

export default Parrains;
