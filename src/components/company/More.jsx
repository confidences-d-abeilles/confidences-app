import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Banner from '../../assets/img/ent_more.jpg';
import broch from '../../assets/brochure.pdf';

import Meta from '../utils/Meta';
import Cover from '../Cover';
import ButtonLink from '@cda/button-link';

export default class More extends Component {
  state = {
    deployFirst: false,
    deployTwo: false,
    deploy3: false,
  };

  render() {
    return (
      <Cover img={Banner}>
        <Meta title="En savoir plus" />
        <h1 className="text-center">Le parrainage par les entreprises</h1>
        <div className="col-9">
          <h2 className="text-warning my-4">Pourquoi responsabiliser votre activité ?</h2>
          <p>
            Votre entreprise souhaite prendre ses responsabilités vis-à-vis de la société ?
            Dépasser ses préoccupations économiques, légales et adopter un comportement plus éthique ?
            {' '}
            <br />
            <br />
            Vous avez donc compris qu’en responsabilisant vos activités commerciales et en
            investissant dans le développement durable, vous pérennisiez votre entreprise à long
            terme. Le mouvement est en marche, et de plus en plus d’acteurs sont conscients que ce
            n’est pas en achetant des crédits carbones, que l’on aborde efficacement l’impact local
            d’une entreprise. L’intégration de pratiques responsables bénéficiant à toutes les parties
            prenantes (dont la société), devient dès lors un enjeu de taille pour l’entreprise. En effet,
            en dégradant son environnement, l’entreprise ne crée pas des conditions favorables à sa
            propre réussite. L’intérêt de celle-ci réside donc, dans la protection de
            l’écosystème dans lequel elle évolue.
            <br />
            <br />
          </p>
          <h3 className="my-4">Comment le faire ?</h3>
          <p>
            Vous voulez inscrire votre entreprise dans une démarche participative et durable pour l’environnement ?
            <strong> Faites donc le choix de parrainer des ruches ! </strong>
            <br />
            D’une part, vous aidez les apiculteurs à protéger les abeilles, d’autre part ces abeilles
            vont prendre soin de la biodiversité et donc de votre environnement ! Enfin, vous
            soutenez la filière française du miel et permettez aux consommateurs de manger local
            plutôt qu’importé et bien souvent frelaté.
            <br />
            Votre action va encore plus loin : en protégeant les abeilles vous favorisez la pollinisation,
            les rendements agricoles augmentent, les pesticides ne sont plus nécessaires,
            l’environnement s’en porte mieux et les abeilles aussi. Le cercle vertueux est bouclé !
            <br />
            <br />
            <p className="text-center">
              <ButtonLink to="/signup/company" primary>Devenir parrain</ButtonLink>
            </p>
            <br />
          </p>
          <h4 className="text-warning my-4">Qu’est ce que le parrainage de ruches vous apporte ?</h4>
          <p>
            En parrainant des ruches, vous montrez que vous êtes préoccupés par l’évolution de
            l’environnement dans lequel s’inscrit votre entreprise ; ce même environnement que
            l’ensemble de vos parties prenantes partagent. Que votre activité soit de type B2B ou B2C,
            vos clients sont de plus en plus exigeants. Ils accordent une importance croissante à
            l’éthique et à la responsabilité des entreprises.
            {' '}
            <br />
            Parrainer des ruches n’est pas LA solution miracle à vos problématiques de développement
            durable et de comportement responsable, mais un élément de réponse.
            {' '}
            <strong>
« Les petits
            ruisseaux font les grandes rivières. »
            </strong>
            <br />
            <br />
            <strong>Plus concrètement.</strong>
            {' '}
Votre parrainage peut être un réel atout dans votre communication
            interne et fédérer votre équipe autour d’une ou plusieurs ruches. Engagez vos
            collaborateurs en leur proposant de créer le futur design de vos pots de miel ! Partagez
            avec eux les dernières actualités des ruches, ils se languiront alors de recevoir un pot de
            miel de « leurs » abeilles.
            <br />
            Le parrainage représente aussi une stratégie de différenciation vis-à-vis de vos
            concurrents. Vos prospects n’y seront pas insensibles et vous les convertirez plus
            facilement en clients.
          </p>
          <p>
            <strong>De la Visibilité</strong>
            <br />
            Les engagements responsables que vous prenez et les efforts que vous faîtes méritent d’être
            soulignés. Vos clients ou partenaires attendent parfois que vous preniez de tels
            engagements pour justifier à leur tour, travailler avec des partenaires responsablement
            engagés. De simples communiqués en interne ne suffisent pas, la communication doit être
            transparente et accessible à tous. C’est pourquoi nous attachons une grande importance à
            la mise en valeur de vos actions et vous proposons trois canaux de communication :
            <br />
            <br />
            <ul>
              <li>
                <strong>La plateforme web de parrainage</strong>
                <br />
                ’est le canal privilégié, celui que nous vous dédions totalement avec la configuration de votre propre page.
                Décrivez votre activité, présentez vos engagements, ajoutez des liens vers votre site internet, publiez vos actualités et présentez vos ruches aux visiteurs.
                La configuration est très simple et nous vous guidons.
                La page est optimisée pour être partagée sur les réseaux sociaux.
                <a href="https://parrainagederuches.fr/parrains/perus" rel="noopener noreferrer" target="_blank"> Voir un exemple </a>
                De même, les sliders et autres photos utilisées sur notre plateforme mettent à l’honneur les parrains
                <br />
                <br />
              </li>
              <li>
                <strong>Les supports de communication</strong>
                <br />
                Nos propres supports de communication sont des vecteurs puissants de diffusion de l’information.
                Nous nous servons régulièrement de nos parrains pour illustrer nos supports ou accompagner nos explications d’exemples.
                <br />
                <br />
              </li>
              <li>
                <strong>Les réseaux sociaux</strong>
                <br />
                Ce sont les canaux que nous utilisons le plus pour notre propre communication.
                Nos « followers » (15 000+) forment une communauté engagée qui interagit bien avec nos publications.
                Nous les utiliserons pour communiquer sur votre engagement à nos côtés.
                <br />
              </li>
            </ul>
          </p>
          <p>
            <strong>Très concrètement. Un service sur mesure incluant :</strong>
            <ul>
              <li>
                40 pots de miels personnalisés (250g de miel produit par vos abeilles à offrir à vos clients, partenaires ou collaborateurs)
              </li>
              <li>
                1 outil de personnalisation des étiquettes en ligne
              </li>
              <li>
                1 graphiste à votre écoute pour réaliser des étiquettes exclusives (frais de création non compris)
              </li>
              <li>
                1 page dédiée à votre société (détails des actions responsables menées, photos et actualités de la ruches parrainée)
                {' '}
                <a href="https://parrainagederuches.fr/parrains/perus" rel="noopener noreferrer" target="_blank">Voir un exemple</a>
              </li>
              <li>
                1 éditeur d’actualité (pour alimenter vous-même la page dédiée)
              </li>
              <li>
                1 ruche à vos couleurs
              </li>
              <li>
                Du contenu de qualité pour engager votre communauté sur les réseaux sociaux et aborder diverses thématiques
              </li>
              <li>
                1 certificat de parrainage
              </li>
              <li>
                1 visite de la ruche à organiser avec votre équipe pour découvrir le monde des abeilles sous la tenue d’apiculteur. Organisation de séminaire possible.
              </li>
            </ul>
            <p className="text-center">
              <ButtonLink to="/signup/company">Parrainer une ruche</ButtonLink>
              <ButtonLink to={broch} external rel="noopener noreferrer" target="_blank">Découvrir la brochure</ButtonLink>
            </p>
          </p>
          <h3 className="text-warning my-4">Tarifs et Conditions</h3>
          <br />
          <a href="https://parrainagederuches.fr/prices" rel="noopener noreferrer" target="_blank">Consulter les tarifs</a>
          <br />
          <p>
            Ces tarifs comprennent l’ensemble des éléments cités ci-dessus ainsi que les frais de port
            pour l’envoi des pots de miel en France métropolitaine.
            <br />
            Pour l’étranger, les situations seront étudiées au cas par cas, merci de nous contacter en amont
            <br />
            <br />
            L’installation des ruches parrainées se fait sur nos ruchers situés en Haute-Savoie ou en
            Savoie. Vous souhaitiez voir vos ruches installées sur le site de votre entreprise, sur son
            toit pas exemple ? N’hésitez pas à nous en faire la demande. Nous étudierons la faisabilité
            du projet et nous reviendrons vers vous avec un devis si cela est envisageable (
            <i>
les tarifs
            présents sur le site ne concernent pas cette prestation
            </i>
).
          </p>
          <h4 className="my-4">Quand parrainer ?</h4>
          <p>
            Vous pouvez parrainer des abeilles tout au long de l’année.
            Il faut savoir que pour un parrainage effectué entre :
            <br />
            <br />
            <strong className="text-warning">Le 1er juillet et le 31 décembre</strong>
, vous recevrez le miel de vos abeilles après la récolte de printemps ; à partir du mois de mai de l’année suivante.
            <br />
            <br />
            <strong className="text-warning">Le 1er janvier et le 30 juin</strong>
, vous recevrez le miel de vos abeilles à l’automne, à partir du mois d’octobre.
          </p>
          <h3 className="text-warning my-4">Événement</h3>
          <p>
            Pourquoi ne pas profiter de votre parrainage pour en faire un élément de cohésion entre
            les membres de votre équipe ?
            <br />
            <br />
            <ul>
              <li>
                  Activité Team Building (1/2 journée)
                <br />
                <br />
                  Enfilez la fameuse vareuse de l’apiculteur et plongez dans le monde passionnant des abeilles en ouvrant votre première ruche.
                  Frissons garantis !
                  Au cours de la visite, les apiculteurs vous révèlent le fonctionnement d’une ruche, son organisation et partagent avec vous les confidences de vos abeilles.
                  Pour le plus grand plaisir de vos papilles une dégustation des produits de la ruche couronne le tout.
                <br />
                <br />
              </li>
              <li>
                  Séminaire Team Building (journée)
                <br />
                <br />
                  Sur une journée complète, vous découvrez aussi le monde des abeilles, vous profitez le temps d’un repas de notre sélection de tables de chefs qui travaillent le miel Confidences d’Abeilles ; enfin, vous choisissez l’une des nombreuses activités sportives qu’offre notre région pour vous défouler.
                  Entre le lac, les airs et la montagne il y a de quoi faire.
              </li>
            </ul>
          </p>
          <p className="text-center">
            <ButtonLink to="/signup/company" primary>Devenir parrain</ButtonLink>
            <ButtonLink to={broch} external rel="noopener noreferrer" target="_blank">Consulter la brochure</ButtonLink>
            <ButtonLink to="/faq">FAQ</ButtonLink>
          </p>
        </div>
      </Cover>
    );
  }
}
