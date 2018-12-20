import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome'
import imgPlaceholder from '../../assets/img/img-placeholder.gif';
import pdfIcon from '../../assets/img/pdf.png';
import { handleChange } from '../../services/FormService';
import request from '../../services/Net'
import NotificationSystem from 'react-notification-system'
import ReactGA from 'react-ga';
import Meta from '../utils/Meta';
import leaflet_e from '../../assets/leaflet_e.pdf'
import brochure from '../../assets/brochure.pdf'

export default class ContributorApproach extends Component {

  constructor(props) {
    super(props)
    ReactGA.pageview(this.props.location.pathname);
    this.state = {
      question: '',
      faq: []
    }
  }

  componentDidMount() {
    request({
      url: '/faq/4',
      method: 'get'
    }, this.refs.notif).then((res) => {
      this.setState({
        faq: res
      });
    })
  }

  submitQuestion(e) {
    e.preventDefault();
    request({
      url: '/contact',
      method: 'post',
      data : {
        demand: '8',
        content : this.state.question
      }
    }, this.refs.notif).then((res) => {
      this.setState({
        question: ''
      })
    })
  }

  render () {
    return (
      <div className="container">
        <Meta title="Démarchage d'entreprise"/>
        <NotificationSystem ref="notif" />
        <div className="row">
          <div className="col-6">
            <h2 className="text-center">Comment démarcher une entreprise ?</h2>
            <p>
              Une fois trouvée, nous vous aidons à la
              contacter en remplissant un formulaire très
              court. Il ne vous reste alors plus qu’à attendre
              qu’elle parraine ses premières ruches.
            </p>
            <div className="row">
              <div className="col my-2 text-center">
                <Link to="/contributor/prelead" className="btn btn-secondary">Ajouter une entreprise</Link>
              </div>
              <div className="col my-2 text-center">
                <Link to="/hives" className="btn btn-secondary">Consulter la liste des parrains</Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div id="carouselHome" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active">
                  <img className="d-block img-fluid" src={imgPlaceholder} alt="First slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={imgPlaceholder} alt="Second slide" />
                </div>
                <div className="carousel-item">
                  <img className="d-block img-fluid" src={imgPlaceholder} alt="Third slide" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-8">
            <h3 className="text-center my-4">Que faut-il faire en pratique ?</h3>
            <h4>Définir une liste d’entreprise</h4>
            <p>
              Pour commencer il faut déterminer les entreprises que vous souhaitez contacter. Vous
              devez attacher une importance particulière à cette sélection puisque vous ne pourrez en
              ajouter que 10 au départ. Faites le tour de votre cercle privé, de votre réseau, de vos
              connaissances et ne retenez que celles avec lesquelles vous avez le plus de chance de
              réussir. L’idée est de travailler avec des leads qualifiés. Vous convertirez d’autant plus et
              resterez motivés pour poursuivre votre prospection.<br /><br />
              Si l’une des entreprises que vous avez contactées parraine des ruches, elle vous donnera
              alors la possibilité de contacter 5 entreprises de plus.<br /><br />
              N&#39;hésitez pas à consulter la liste des entreprises marraines pour vérifier que celles que
              vous vouliez contacter ne s’y trouvent pas déjà.
            </p>
            <h4>Contacter l'entreprise</h4>
            <p>
              Pour prendre contact il y a deux possibilités :
            </p>
            <ul>
              <li>
                <u>Directement à partir de cette plateforme :</u> lorsque vous choisissez d&#39;ajouter une
                entreprise il vous est proposé de lui envoyer un mail. Pour vous aider, des templates
                sont proposés et il ne vous reste plus qu&#39;à les compléter / modifier. L&#39;adresse mail
                utilisée pour l&#39;envoi vous est attribuée par défaut et c&#39;est à celle-ci que répondra
                l&#39;entreprise. Exemple, l&#39;adresse mail de Baptiste Claire serait
                bacl@parrainagederuches.fr. Vous pourrez consulter les messages reçus depuis votre
                compte.
              </li>
              <li>
                <u>Avec vos propres ressources :</u> Vous avez aussi la possibilité d&#39;utiliser votre messagerie
                classique, votre téléphone ou encore mieux de rencontrer directement des membres
                de l&#39;entreprise sélectionnée. Pour vous aider, des supports de communication sont à
                votre disposition ci-dessous ainsi que des templates de mail à copier / coller /
                modifier. Vous êtes libres de les imprimer et de les utiliser.
              </li>
            </ul>
            <h4>Ajouter l'entreprise à votre liste des démarches effectuées</h4>
            <p>
              Que vous ayez choisi l&#39;une ou l&#39;autre des méthodes il vous faudra renseigner quelques
              détails concernant l&#39;entreprise contactée pour pouvoir toucher une commission. Il vous
              suffit pour cela de cliquer sur &quot;AJOUTER UNE ENTREPRISE&quot; puis de compléter le petit
              formulaire ; bien remplir le champ numéro siret et celle-ci sera ajoutée à votre liste. Il ne
              vous reste alors plus qu&#39;à attendre une inscription et un parrainage de la part de
              l&#39;entreprise que vous avez contactée. Son statut sera mis à jour dans la liste des entreprises
              démarchées.<br /><br />
              Bien entendu, une relance téléphonique augmente très fortement votre taux de
              conversion. Retrouvez nos conseils ci-dessous.
            </p>
            <div className="row">
              <div className="col my-2 text-center">
                <Link to="/contributor/prelead" className="btn btn-secondary">Ajouter une entreprise</Link>
              </div>
              <div className="col my-2 text-center">
                <Link to="/contributor/parrains" className="btn btn-secondary">Recherche de parrains par numéro SIRET</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-9">
            <a href="/contributor/approach"><p className="text-center lead my-4" data-toggle="collapse" data-target="#advices" >Conseils pour améliorer votre taux de conversion <FontAwesome name='chevron-down' /></p></a>
            <div className="collapse" id="advices">
              <ul>
              <li>Conseil n°1 : Ne pas envoyer d’email sur des boites « fourre-tout » type contact@ ou
info@ ou encore hello@. Toujours trouver l’email du gérant / d’un responsable / d’un
directeur. Si le mail n’est pas trouvable sur le site internet de la société, sur <a target="_blank" rel="noopener noreferrer" href="https://hunter.io/email-finder">hunter.io</a>,
faire une recherche google « @nomdelentreprise.fr ou .com » (garder les guillemets)
pour trouver la nomenclature des mails et donc par extension déterminer celui du
gérant.</li>
              <li className="my-2">
                Conseil n°2 : Pour avoir un excellent taux de réponse à vos emails, il faut vous limiter à
trois phrases :
<ul>
  <li>Phrase 1 : Je me permets de vous contacter au sujet de, de la part de, à propos de</li>
  <li>Phrase 2 : Ce que vous faites (Nous proposons aux entreprises de répondre à leurs
enjeux en termes de RSE en parrainant des ruches…)</li>
  <li>Phrase 3 : A quel moment et sur quel numéro seriez-vous joignable pour en
discuter ?</li>
</ul>
              </li>
              <li className="my-2">Conseil n° 3 : pour un premier mail « tentative de contact » en objet attire l’attention.
Pour un second mail « Je n’arrive pas à vous joindre ». Pour un troisième et dernier mail
« dernière tentative de contact »</li>
<li className="my-2">Conseil n°4 : sans réponse ou retour d’une personne au bout de 3 tentatives, il faut laisser tomber</li>
<li className="my-2">Conseil n°5 : dans tous les cas appeler la personne deux jours après l’envoi du premier email. Indiquer vouloir parler à Madame ou Monsieur Untel suite à un échange d’email.</li>
<li className="my-2">Conseil n°6 : Toujours commencer par se présenter et s’assurer que notre interlocuteur a
un peu de temps. Script type :<ul>
<li>Monsieur X ?</li>
<li>Oui</li>
<li>Untel, étudiant en … à l’école de …, <strong>je ne vous dérange pas ?</strong></li>
<li>Non</li>
<li>Présentation succincte de deux ou trois phrases maximum destinée à accrocher
l’attention de la personne et entamer une discussion</li>
</ul></li>
<li className="my-2">Conseil n°7 : Le but est de faire parler votre interlocuteur et de rebondir sur ses points
d’attention. Il faut toujours essayer de tisser un lien avec lui (proximité géographique,
connaissance en commun, loisir commun, etc.).</li>
<li className="my-2">Conseil n°8 : essayer d’aborder rapidement les avantages que son entreprise aurait à
parrainer une ruche</li>
<li className="my-2">Conseil n°9 : demander à votre interlocuteur s’il a des questions à vous poser</li>
<li className="my-2">Conseil n°10 : Préciser que l’inscription est gratuite et que le paiement peut être réalisé
plus tard par carte bancaire ou virement.</li>
<li className="my-2">Conseil n°11 : utiliser des chiffres dans votre approche. Date de création de la société,
nombre de ruches déjà parrainées, nombre de parrains, nombre de pots de miels offerts
par ruche, nombre d’abeilles.</li>
<li className="my-2">Conseil n°12 : Téléphoner debout (aisance et assurance dans la voix qui rassure) et avec
le sourire (ça s’entend aussi !).</li>
<li className="my-2">Conseil n°13 : Si votre appel tombe mal, proposez immédiatement à votre interlocuteur
de le recontacter ultérieurement pour ne pas le déranger. Donnez-lui trois possibilités.</li>
            </ul>
            </div>
            <a href="/contributor/approach" className="link-nostyle"><p className="text-center lead my-4" data-toggle="collapse" data-target="#supports" >Supports de communication <FontAwesome name='chevron-down' /></p></a>
            <div className="collapse" id="supports">
              <p>Exemples de mail pour entrer en contact avec une entreprise</p>
              <div className="card-deck">
                <div className="card" data-toggle="modal" data-target="#modal1" style={{ cursor: 'pointer' }}>
                  <div className="card-block">
                    <p className="card-text text-center lead">
                      Je connais mon interlocuteur
                    </p>
                  </div>
                </div>
                <div className="modal fade" id="modal1">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Je connais mon interlocuteur</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                      Objet : Tentative de contact<br /><br />
                      Bonjour Madame, Monsieur [x],<br /><br />
                      Je me permets de vous contacter au sujet de la Responsabilité Sociétale et Environnementale (RSE)
                      des entreprises de la part de la société Confidences d’Abeilles. Elle propose aujourd’hui un service de
                      parrainage de ruches à destination d’entreprises comme la vôtre. En échange, vous recevrez des pots
                      de miel à offrir à vos équipes ou vos partenaires.<br /><br />
                      A quel moment et sur quel numéro seriez-vous joignable pour en discuter ?<br /><br />
                      Je vous souhaite une excellente journée,<br /><br />
                      [x]
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" data-toggle="modal" data-target="#modal2" style={{ cursor: 'pointer' }}>
                  <div className="card-block">
                    <p className="card-text text-center lead">
                      Je connais une personne dans la société
                    </p>
                  </div>
                </div>

                <div className="modal fade" id="modal2">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Je connais une personne dans la société</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                      Objet : Tentative de contact<br /><br />
                      Madame, Monsieur [x],<br /><br />
                      Ayant connaissance de votre activité par le biais de [x qui travaille chez vous] je crois savoir/pense
                      que le service proposé par Confidences d’Abeilles vous intéresse.<br /><br />
                      En effet, votre entreprise a la possibilité de parrainer des ruches et de répondre ainsi aux enjeux liés
                      à la Responsabilité Sociétale et Environnementale (RSE). En échange, vous recevrez des pots de miel
                      à offrir à vos équipes ou vos partenaires.<br /><br />
                      A quel moment et sur quel numéro seriez-vous joignable pour en discuter ?<br /><br />
                      Je vous souhaite une excellente journée,<br /><br />
                      [x]
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" data-toggle="modal" data-target="#modal3" style={{ cursor: 'pointer' }}>
                  <div className="card-block">
                    <p className="card-text text-center lead">
                      Je ne connais personne dans la société
                    </p>
                  </div>
                </div>

              <div className="modal fade" id="modal3">
                <div className="modal-dialog modal-lg" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                  <h5 className="modal-title">Je ne connais personne dans la société</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                  </div>
                  <div className="modal-body">
                  <p>
                    Objet : Tentative de contact<br /><br />
                    Madame, Monsieur,<br /><br />
                    Je m’appelle [x] et suis étudiant de/en [x]. Je me suis renseigné sur votre société et je pense que le
                    service proposé par Confidences d’Abeilles est susceptible de vous intéresser.<br /><br />
                    En effet, votre entreprise a la possibilité de parrainer des ruches et de répondre ainsi aux enjeux liés
                    à la Responsabilité Sociétale et Environnementale (RSE). En échange elle recevra des pots de miel
                    qu’elle pourra offrir à ses équipes ou partenaires.<br /><br />
                    A quel moment et sur quel numéro seriez-vous joignable pour en discuter ?<br /><br />
                    Je vous souhaite une excellente journée,<br /><br />
                    [x]
                  </p>
                  </div>
                  <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
                </div>
                </div>
              </div>

              </div>
              <div className="card-deck my-4">
                <div className="card" data-toggle="modal" data-target="#modal4" style={{ cursor: 'pointer' }}>
                  <div className="card-block">
                    <p className="card-text text-center lead">
                      Je relance mon contact
                    </p>
                  </div>
                </div>

                <div className="modal fade" id="modal4">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">Je relance mon contact</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                      Objet : Je n’arrive pas à vous joindre<br /><br />
                      Madame, Monsieur [x],<br /><br />
                      Je vous ai adressé un mail il y a [x] jours à propos d’un service de parrainage de ruches. Je n’ai pas
                      reçu de réponse de votre part. Je me permets de vous relancer puisque je pense que c’est un
                      excellent moyen pour vous de répondre aux enjeux liés à la RSE.<br /><br />
                      A quel moment seriez-vous disponible par téléphone pour que je puisse vous contacter ?<br /><br />
                      Dans l’attente de vous lire je vous souhaite une excellente journée,<br /><br />
                      [x]
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card" data-toggle="modal" data-target="#modal5" style={{ cursor: 'pointer' }}>
                  <div className="card-block">
                    <p className="card-text text-center lead">
                      J’ai obtenu une première réponse positive et je détaille maintenant le service par mail
                    </p>
                  </div>
                </div>

                <div className="modal fade" id="modal5">
                  <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title">J’ai obtenu une première réponse positive et je détaille maintenant le service par mail</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                      <div className="modal-body">
                        <p>
                      Objet : L’offre de parrainage en détail<br /><br />
                      Madame, Monsieur [x],<br /><br />
                      Je vous remercie pour votre retour.<br /><br />
                      Si je devais résumer le parrainage de ruches en entreprise, je dirais ceci : c&#39;est un partenariat
                      gagnant-gagnant entre votre entreprise et les apiculteurs. En effet, le parrainage de ruche est un acte
                      fort qui s&#39;inscrit pleinement dans le plan européen de Responsabilité Sociétale et Environnementale
                      (RSE) ; disons-le clairement, c&#39;est aussi une tendance suivie par de nombreux grands groupes tels que
                      Le Point, Groupe Leader et dernièrement Intermarché. Ces derniers ont bien compris que l&#39;impact
                      d&#39;une telle action dépassait largement le cercle des collaborateurs. En plus de fédérer les employés
                      autour d&#39;un projet actuellement plébiscité de toute part, ils s&#39;adressent aussi à leurs partenaires,
                      leurs clients en démontrant l&#39;engagement pris en faveur d&#39;une noble cause. Quel cadeau plus
                      personnalisé pourrait-on offrir à la place d’un pot de miel produit par les ruches de la société à ses
                      partenaires ou à ses clients ? Ceci étonnera, intriguera et plaira à coup sûr !<br /><br />
                      Pour Confidences d&#39;Abeilles, c&#39;est l’opportunité de développer son cheptel. L&#39;installation de
                      nouvelles ruches permet d&#39;une part de lutter contre le syndrome d&#39;effondrement des colonies et
                      d&#39;autre part, en renforçant la population d&#39;abeilles et donc l&#39;action de pollinisation, c&#39;est la
                      biodiversité que l&#39;on préserve. « L’union fait la force », un adage qui se vérifie année après année sur
                      ses ruchers. Plus il y a de ruches et plus il est facile de pallier les carences de certaines, plus il est aisé
                      d’utiliser la force des unes pour tirer les autres vers le haut. Le parrainage de ruches va donc au-delà
                      d’une simple augmentation de la population d’abeilles ; c’est un épaulement de poids pour le cheptel
                      déjà en place et une assurance supplémentaire pour Confidences d’Abeilles.<br /><br />
                      Parrainer une ruche pour une entreprise est donc loin d&#39;être anodin. C’est une volonté forte et
                      résolument tournée vers l’avenir qui profite autant à l&#39;entreprise, qu’à l&#39;environnement et qu’aux
                      apiculteurs.<br /><br />
                      Vous pouvez retrouver ici une infographie présentant le service proposé et là un document exhaustif
                      avec une FAQ.<br /><br />
                      Par ailleurs, vous trouverez ci-après mes coordonnées. Je reste à votre entière disposition si vous
                      avez des questions.<br /><br />
                      Je vous souhaite une excellente journée.<br /><br />
                      [x]<br /><br />
                      [Coordonnées]
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card">
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-2"><a href={leaflet_e} target="_blank" rel="noopener noreferrer"><img src={pdfIcon} alt="Telecharger le PDF" className="img-fluid" /></a></div>
                <div className="col-6">Infographie - Le Parrainage de ruches par Confidences d'Abeilles</div>
              </div>
              <div className="row justify-content-center align-items-center my-4">
                <div className="col-2"><a href={brochure} target="_blank" rel="noopener noreferrer"><img src={pdfIcon} alt="Telecharger le PDF" className="img-fluid" /></a></div>
                <div className="col-6">Brochure détaillée du service proposé par Confidences d'Abeilles</div>
              </div>
            </div>
            <a href="/contributor/approach"><p className="text-center lead my-4" data-toggle="collapse" data-target="#faq" >FAQ <FontAwesome name='chevron-down' /></p></a>
            <div className="collapse" id="faq">
              <form className="my-4" onSubmit={this.submitQuestion.bind(this)}>
                <div className="form-group row">
                  <div className="col-8">
                    <input type="text" placeholder="J'ai une question à soumettre" name="question" value={this.state.question} onChange={handleChange.bind(this)} className="form-control" />
                  </div>
                  <div className="col-4">
                    <button className="btn btn-primary">Soumettre</button>
                  </div>
                </div>
              </form>
              {this.state.faq.map((item) => {
                return (
                  <div className="my-4" key={item.id}>
                    <span className="lead" onClick={() => document.getElementById(item.id).classList.toggle('show')} style={{ cursor: 'pointer' }}>{item.question}      <FontAwesome name='chevron-down' /></span>
                    <p className="collapse" id={item.id}>{item.answer}</p>
                    <hr />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
