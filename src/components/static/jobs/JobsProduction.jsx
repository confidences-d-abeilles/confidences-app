import React from 'react';
import { Link } from 'react-router-dom';

import Meta from '../../utils/Meta'
import { APropos } from './APropos'
const Production = () => (
  <div className="container">
    <Meta title="Offre de stage" />
    <div className="row mt-4 justify-content-center align-items-center">
      <div className="col-lg-9 col-md-10 col-sm-12">
        <h1 className="text-center my-4">CDI / CDD Responsable Production Apicole - Février 2019</h1>
        <APropos />
        <h2>Missions</h2>
        <ul>
          <li>
            <strong>Gestion du cheptel :</strong> Vous venez épauler l’équipe pour s’occuper des ruches déjà en place.
            Sortie d’hivernage, relance printanière, optimisation des colonies et de leur environnement
            (au sein large) en vue des futures récoltes.
          </li>
          <li>
            <strong>Développement du cheptel :</strong> Vous participez à la croissance de Confidences d’Abeilles en
            augmentant le nombre de ruches en production, en créant de nouvelles colonies, et en
            maintenant en excellent état de santé celle en place.
                  </li>
          <li>
            <strong>Développement du service de parrainage :</strong> En lien avec le pôle commercial &
            communication, vous êtes la personne de terrain du service de parrainage. Vous récoltez les
            éléments nécessaires (photos, informations) à la création d’actualités pour chacune des
            ruches parrainées.
          </li>
          <li>
            <strong>Production :</strong> Votre rôle est aussi d’assurer la production apicole de l’entreprise. Miel, pollen,
            propolis, et miel en rayon sont les produits qui vous concernent directement.
          </li>
        </ul>
        <h2>Profil recherché</h2>
        <p>
          Vous êtes fasciné(e) par les abeilles, vous avez suivi une formation en apiculture et/ou avez déjà
          travaillé avec un apiculteur au cours d’une saison, alors vous avez toutes les raisons de nous
          rejoindre. Vous n’êtes sûrement pas sans savoir :
        </p>
        <ul>
          <li>
            qu’il n’y a pas d’horaires en apiculture. Soyez donc prêt à faire (avec le sourire) de très
            grosses journées en saison.
          </li>
          <li>
            que ce travail est physique, qu’il fait chaud (ou froid), et que les piqûres font partie du jeu.
          </li>
        </ul>
        <p>
          Vous avez aussi les compétences suivantes :
        </p>
        <ul>
          <li>Le sens du bricolage et le permis B. Super.</li>
          <li>Une ténacité sans faille même dans l’échec. C’est formidable.</li>
          <li>Dynamisme et rapidité d'exécution ? Épatant !</li>
          <li>Une bonne communication en français (or in english, it doesn’t matter). Bien.</li>
          <li>Rigoureux(se) et méthodique. Excellent.</li>
          <li>Vous pensez que les défis sont faits pour être relevés. Nous devrions nous entendre.</li>
        </ul>
        <p>Alors n’hésitez plus et rejoignez-nous !</p>
        <p className="text-center">
          <Link className="btn btn-secondary" to="/apply">Postuler</Link>
        </p>
        <h2>Déroulement des entretiens</h2>
        <p>
          Le profil LinkedIn et le CV ne sont pas optionnels. Épargnez-nous la lettre de motivation, les
          formulations cérémonieuses, et écrivez-nous avec vos mots.<br /><br />
          <strong>Étape 1 :</strong> Premier entretien téléphonique d’introduction<br /><br />
          <strong>Étape 2 :</strong> Rencontre physique avec l’un des fondateurs
        </p>
        <h2>Conditions</h2>
        <p>
          Début idéal en Février 2019<br />
          Période d’essai et contrat à la clé<br />
          Rémunération & avantages selon profil, motivation, autonomie effective, et résultats
        </p>
      </div>
    </div>
  </div>
);

export default Production;
