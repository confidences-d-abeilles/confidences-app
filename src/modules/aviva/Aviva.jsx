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
    <h1>Aidez-nous à remporter le concours AVIVA</h1>
    <h1>votez pour notre projet 🚀</h1>
    <h1>et gagnez un séjour à Annecy 🏔️ et 2 bons d'achat de 50€ 🎁</h1>
    <p className="text-center">
      <MorphButton />
    </p>
    <h2>Un mot sur le projet</h2>
    <p>Confidences d'Abeilles participe au grand prix AVIVA en espérant remporter une subvention 🐝 Une subvention pour pérenniser son activité, développer son cheptel, et embaucher. 🤝 Nos ambitions sont toujours de proposer des produits artisanaux de qualité, de préserver l'apiculture française 🍯 et la biodiversité. 🌺</p>
    <h2>Comment gagner un séjour à Annecy ?</h2>
    <ul>
      <li>Cliquez sur le bouton «Je vote» ci-dessus</li>
      <li>Créez un compte pour pouvoir voter (15 secondes avec Facebook)</li>
      <li>Attribuez vos 10 votes à notre projet</li>
      <li>Rendez-vous sur <a href="https://www.facebook.com/confidencesdabeille/posts/2387733334838485">notre publication Facebook</a>, likez et invitez en commentaire la personne avec qui vous voudriez passer ce séjour à nous soutenir également</li>
    </ul>
    <p>Le 15 juin, nous tirerons les 3 gagnants parmi les personnes respectant les conditions ci-dessus.</p>
    <h3>3 lots à gagner : un séjour à Annecy avec <a href="https://www.alpes-bivouac.com/produits/alti-dome/">Alpes Bivouac</a> (valeur 258€) et 2 bons d’achat de 50€ à valoir sur <a href="https://confidencesdabeilles.fr">confidencesdabeilles.fr</a></h3>
    <p>
      Un grand merci pour votre aide 👏<br />
      L'équipe 😘 et les 🐝
    </p>
    <img src={Bottom} alt="Champignons" className="mt-3 img-fluid" />
  </div>
);
