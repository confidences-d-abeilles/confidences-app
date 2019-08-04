import React from 'react';
import { Link } from 'react-router-dom';

const Hive = ({ hive }) => (
  <div>
    <h3><small>Ma ruche</small></h3>
    {(hive)
      ? <Link to={`/hive/${hive.id}`}>{hive.name}</Link>
		  : "Aucune ruche ne vous a été attribuée pour l'instant"}
  </div>
);

export default Hive;
