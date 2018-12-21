import React from 'react'
import Banner from '../../assets/img/partners.jpg';
import Thomas from '../../assets/img/thomas_apiculture.gif';
import ISA from '../../assets/img/isa_workwear_logo.jpg';
import Appointedd from '../../assets/img/appointedd.png';
import Allianz from '../../assets/img/allianz.png';

import Partner from './partners/Partner';

const Partners = props => (
  <div className="container">
    <img src={Banner} alt="Les partenaires" className="img-fluid" />
    <h2 className="text-center my-5" >Nos partenaires</h2>
    <Partner
      img={Thomas}
      title="Des vareuses pour nous mettre sur notre 31 !"
      content={"Confidences d’Abeilles et Thomas apiculture poursuivent depuis le début de l’année un partenariat ! "+
      "L'entreprise centenaire et historiquement connue pour fournir le matériel essentiel de l'apiculteur, nous met sur "+
      "notre 31 en nous fournissant de nouveaux équipements de protection. L'entreprise a décidé de soutenir notre projet et "+
      "s'engage à nos côtés !<br />"+
      "Toute l’équipe Confidences d’Abeilles remercie vivement Thomas Apiculture et salue son implication auprès de la "+
      "filière de l’apiculture française !"}
      link="https://www.thomas-apiculture.com/" />
    <Partner
      img={ISA}
      title="ISA France, l’entreprise qui marque les esprits !"
      content={"Isa France est partenaire de confidences d’abeilles pour le marquage de ses tenues de protection. La société basée sur "+
      "Faverges parraine aussi une ruche."}
      link="http://www.isa-workwear.com/" />
    <Partner
      img={Appointedd}
      title="La rolls des outils de réservations pour gérer nos visites ! "
      content={"Appointedd, le logiciel de gestion de réservation en ligne par excellence, n’a pas caché son enthousiasme à soutenir "+
      "Confidences d’Abeilles. Basée à Edinburgh, la startup pour laquelle Gaëtan a travaillé, cherche aujourd’hui à s’étendre à "+
      "l’international. Fort de son succès outre-manche, elle compte s’implanter sur le territoire français et Confidences d’Abeilles"+
      "lui offre une preuve de concept. Les grands gagnants de ce partenariat sont les futurs visiteurs qui bénéficient d’un outil "+
      "de réservation dernier cri, d’une expérience utilisateur (UX) fort bien pensée, et d’une grande facilité de gestion de leur"+
      "réservation. De son côté, Confidences d’Abeilles gère très simplement ses créneaux, ses visiteurs, les rappels mail des "+
      "visites, et les mails post-visites. Un bel outil en somme que toute entreprise gérant des réservations devrait sérieusement considérer !"}
      link="https://www.appointedd.com/" />
    <Partner
      img={Allianz}
      title="Cet assureur qui assure VRAIMENT !"
      content={"L’agence Allianz de Damien PERINET-MARQUET n’assure pas seulement notre activité, elle assure tout court ! Amateur de "+
      "beaux produits, entrepreneur dans l’âme, et convaincu que la réussite passe par des coups de pouce, Damien a voulu "+
      "apporter le sien à Confidences d’Abeilles. Il s’engage ainsi à nos côtés en parrainant une ruche.<br /> Dépassant le statut de l’assureur classique, il se passionne "+
      "pour le projet, et joue même le rôle d’ambassadeur par le biais de son propre réseau. Confidences d’Abeilles se réjouit d’avoir "+
      "un interlocuteur réactif, aussi proche de « ses clients » et sur lequel elle peut compter !"}
      link="https://agence.allianz.fr/albertville-olympique-73200-H97301" />
  </div>
)

export default Partners;