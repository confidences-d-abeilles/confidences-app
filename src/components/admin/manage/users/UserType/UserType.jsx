import React from 'react';

const Type = ({ type }) => {
  switch (type) {
    case 1:
      return (<span className="badge badge-default">Particulier</span>);
    case 2:
      return (<span className="badge badge-default">Entreprise</span>);
    case 3:
      return (<span className="badge badge-default">Apporteur d&apos;Affaires</span>);
    case 4:
      return (<span className="badge badge-default">Editeur</span>);
    case 5:
      return (<span className="badge badge-default">Administrateur</span>);
    default:
      return null;
  }
};

export default Type;
