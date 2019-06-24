import React, { Component } from 'react';
import moment from 'moment';

import request from '../../../services/Net';
import Loading from '../../utils/Loading';
import { withNotification } from '../../../services/withNotification';
import { Button, ButtonLink } from '../../utils/Button';

export default withNotification(class CompanyManageDashboard extends Component {
  state = {
    user: null,
    hivesNames: null,
    loading: false,
  };

  componentDidMount() {
    this.prepareData();
  }

  prepareData() {
    const { notification } = this.props;
    this.setState({
      loading: true,
    });
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        user: res,
      });
      if (res.bundles[0]) {
        if (res.bundles[0].contain && res.bundles[0].contain[0]) {
          this.setState({
            hives: res.bundles[0].contain,
          });
        } else {
          this.setState({
            hivesNames: new Array(res.bundles[0].hives).fill(''),
          });
        }
      }
      this.setState({
        loading: false,
      });
    });
  }

  handleName(index, e) {
    const names = this.state.hivesNames;
    names[index] = e.target.value;
    this.setState({
      hivesNames: names,
    });
  }

  saveNames(e) {
    e.preventDefault();
    const { notification } = this.props;
    if (this.state.hivesNames.indexOf('') !== -1) {
      notification.addNotification({
        message: 'Il manque certains noms de ruches, veillez à tous les sélectionner.',
        level: 'warning',
      });
    } else {
      this.setState({
        loading: true,
      });
      request({
        url: `/bundle/${this.state.user.bundles[0].id}/multi_assoc`,
        method: 'post',
        data: {
          hivesNames: this.state.hivesNames,
        },
      }, notification).then((res) => {
        this.setState({
          hivesNames: null,
        });
        this.prepareData();
      });
    }
  }

  render() {
    const {
      user, hivesNames, loading, hives,
    } = this.state;
    return (
      <div>
        <div className="row py-4">
          <div className="col text-center">
            <Button primary disabled>Consulter ma page entreprise</Button>

            {user
              && user.bundles[0]
              && user.bundles[0].certif
              && user.bundles[0].state > 1 ? (
                <ButtonLink
                  href={`${process.env.REACT_APP_CONTENT_DOMAIN}/${user.bundles[0].certif}`}
                  external
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Télécharger mon certificat de parrainage
                </ButtonLink>
              ) : <Button disabled primary>Télécharger mon certificat de parrainage</Button>
            }
          </div>
        </div>
        {(user && user.bundles[0] && user.bundles[0].state >= 2)
          ? (
            <div>
              <h2>Vos ruches</h2>
              <hr />
              {(loading) ? <Loading />
                : [
                  (hivesNames)
                    ? (
                      <div className="row py-4 align-items-center">
                        <div className="col-lg-4">
                          <p>
Vous pouvez maintenant choisir le nom de
                            {user.bundles[0].hives > 1 ? 'vos ruches' : 'votre ruche'}
.
                          </p>
                        </div>
                        <form className="col-lg-8" onSubmit={this.saveNames.bind(this)}>
                          {hivesNames.map((val, key) => (
                            <div className="form-group">
                  <label>
Ruche n°
                              {key + 1}
                            </label>
                  <select value={hivesNames[key]} onChange={this.handleName.bind(this, key)} className="form-control">
                              <option value="">Choisissez un nom pour cette ruche</option>
                              <option value="Campanule">Campanule</option>
                              <option value="Épilobe">Épilobe</option>
                              <option value="Rhododendron">Rhododendron</option>
                              <option value="Muguet">Muguet</option>
                              <option value="Arnica">Arnica</option>
                              <option value="Lis martagon">Lis martagon</option>
                              <option value="Sainfoin">Sainfoin</option>
                              <option value="Ail des ours">Ail des ours</option>
                              <option value="Alchémille">Alchémille</option>
                              <option value="Marguerite">Marguerite</option>
                              <option value="Bourache">Bourache</option>
                              <option value="Linaigrette">Linaigrette</option>
                              <option value="Colchique">Colchique</option>
                              <option value="Centaurée ">Centaurée </option>
                              <option value="Aster">Aster</option>
                              <option value="Bouton d'or">Bouton d'or</option>
                              <option value="Coucou">Coucou</option>
                              <option value="Pensée des Alpes">Pensée des Alpes</option>
                              <option value="Gentiane jaune">Gentiane jaune</option>
                              <option value="Anémone">Anémone</option>
                              <option value="Jonquille">Jonquille</option>
                              <option value="Menthe">Menthe</option>
                              <option value="Crocus">Crocus</option>
                              <option value="Colchique des Alpes">Colchique des Alpes</option>
                              <option value="Coquelicot">Coquelicot</option>
                              <option value="Digitale">Digitale</option>
                              <option value="Iris des marais">Iris des marais</option>
                              <option value="Ancolie commune">Ancolie commune</option>
                              <option value="Bleuet de montagne">Bleuet de montagne</option>
                              <option value="Millepertuis">Millepertuis</option>
                              <option value="Joubarbe">Joubarbe</option>
                              <option value="Orchis Vanillé">Orchis Vanillé</option>
                              <option value="Petite pervenche">Petite pervenche</option>
                              <option value="Edelweiss">Edelweiss</option>
                              <option value="Lotier des Alpes">Lotier des Alpes</option>
                              <option value="Oeillet sauvage">Oeillet sauvage</option>
                              <option value="Primevère">Primevère</option>
                              <option value="Muscari">Muscari</option>
                              <option value="Vipérine">Vipérine</option>
                              <option value="Safran">Safran</option>
                              <option value="Chicorée">Chicorée</option>
                              <option value="Phacélie">Phacélie</option>
                              <option value="Génépi">Génépi</option>
                            </select>
                </div>
                          ))}
                          <div className="form-group text-center">
                            <button className="btn btn-primary">Confirmer mon choix</button>
                          </div>
                        </form>
                      </div>
                    )
                    : (
                      <div>

                        {(user && user.bundles[0])
                          ? (
                            <p>
                  Notre offre :
                  {' '}
                  {user.bundles[0].hives}
                  {' '}
ruche
                  {user.bundles[0].hives > 1 ? 's' : ''}
                  <br />
                  Date de début :
                  {' '}
                  {moment(user.bundles[0].start_date).format('DD/MM/YYYY')}
                  <br />
                  Date de fin :
                  {' '}
                  {moment(user.bundles[0].end_date).format('DD/MM/YYYY')}
                  <br />
                </p>
                          )
                          : null
              }
                      </div>
                    ),
                  hives
                && (
                <div className="row">
                  {hives.map(ruche => (
                    <div className="col-lg-4">
                      <div className="card my-2 p-1">
                          Ruche
                        {' '}
                        {ruche.name}
                        <br />
                        <a href={`${process.env.REACT_APP_APP_DOMAIN}/hive/${ruche.id}`}>Voir la page</a>
                      </div>
                    </div>
                  ))}
                </div>
                )]
              }
            </div>
          ) : null}
      </div>
    );
  }
});
