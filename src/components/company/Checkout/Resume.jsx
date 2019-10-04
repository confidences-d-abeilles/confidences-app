import React from 'react';
import Button from '@cda/button';

const Resume = ({
  hives, pots, products, price, changeBundle,
}) => (
  <p>
		Nous soutenons
    {' '}
    {hives}
    {' '}
ruche
    {(hives > 1) ? 's' : ''}
    {' '}
qui
    {' '}
    {(hives > 1) ? 'seront' : 'sera'}
    {' '}
marquée
    {(hives > 1) ? 's' : ''}
    {' '}
aux couleurs de notre entreprise. En
		contrepartie nous recevrons
    {' '}
    {pots}
    {' '}
pot
    {(pots > 1) && 's'}
    {' '}
de miel de 250g produit
    {(pots > 1) && 's'}
    {' '}
par nos abeilles.
		Nous bénéficions en plus d’une page internet dédiée à notre entreprise et aux
		actions qu’elle mène en faveur de l’environnement. Des actualités de
    {' '}
    {(hives > 1) ? 'nos' : 'notre'}
    {' '}
ruche
    {(hives > 1) ? 's' : ''}
    {' '}
y
		seront régulièrement postées, accessibles au grand public et à nos partenaires.
    <br />
    <br />
    <strong>Vous avez également ajouté les produits suivants :</strong>
    <br />
    {products.length <= 1 && 'Aucun produit supplémentaire'}
    {products.map((p) => {
		  if (p.type === 11 || p.type === 21) {
		    return (
  <div>
    {p.qty}
    {' '}
    {p.designation}
  </div>
		    );
		  }
		  return null;
    })}
    <br />
    <strong>
      Le montant total du don est de
      {' '}
      {price}
      {' '}
euros.
    </strong>
    <br />
    <br />
    <Button onClick={changeBundle}>Modifier mon don</Button>
  </p>
);

export default Resume;
