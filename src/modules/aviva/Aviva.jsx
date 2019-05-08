import React, { useState } from 'react';
import { ButtonLink } from '../../components/utils/Button';
import Top from '../../assets/img/aviva/top.jpg';
import Bottom from '../../assets/img/aviva/bottom.jpg';

const MorphButton = () => {
  const [text, setText] = useState('Voter');

  const clickHandler = () => {
    setText('Accéder au projet');
  };

  return <ButtonLink href="https://lafabriqueaviva.fr/fr/project/1105/show" onClick={clickHandler} primary external className="my-4">{text}</ButtonLink>;
};

export default () => (
  <div className="container">
    <img src={Top} alt="Fleurs" className="mb-5 img-fluid" />
    <h1>Aidez-nous à remporter le concours AVIVA votez pour notre projet et gagnez un séjour à Annecy 2 bons d’achat de 50€</h1>
    <p className="text-center">
      <MorphButton />
    </p>
    <h2>Un mot sur le projet</h2>
    <p>Renouer avec la nature, s'engager pour la biodiversité, protéger les abeilles, préserver le terroir, le savoir-faire français et consommer de la qualité, voilà nos ambitions. Grâce au concours AVIVA et ses généreuses subventions, nos abeilles pourraient enfin aspirer à polliniser toutes les fleurs de France</p>
    <h2>Comment gagner un séjour à Annecy ?</h2>
    <ul>
      <li>Cliquez sur le bouton «Je vote» ci-dessus</li>
      <li>Créez un compte pour pouvoir voter (15 secondes avec Facebook)</li>
      <li>Attribuez vos 10 votes à notre projet</li>
      <li>Rendez-vous sur notre publication Facebook, likez et invitez en commentaire la personne avec qui vous voudriez passer ce séjour à nous soutenir également</li>
    </ul>
    <p>Le 15 juin, nous tirerons les 3 gagnants parmi les personnes respectant les conditions ci-dessus.</p>
    <h3>3 lots à gagner : unséjour à Annecy avec Alpes Bivouac et 2 bons d’achat de 50€ à valoir sur confidencesdabeilles.fr</h3>
    <p>Un grand merci pour votre aide ! L’équipe et les abeilles</p>
    <img src={Bottom} alt="Champignons" className="mt-3 img-fluid" />
  </div>
);
