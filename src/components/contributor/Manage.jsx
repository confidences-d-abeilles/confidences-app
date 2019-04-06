import React, { Component } from 'react';
import {
  Route,
  Link,
  Redirect,
  Switch,
} from 'react-router-dom';
import request from '../../services/Net';
import ContributorManageDashboard from './manage/Dashboard';
import ContributorManageInfos from './manage/Infos';
import ContributorManageLeads from './manage/Leads';
import ContributorManageConditions from './manage/Conditions';
import ContributorManageContract from './manage/Contract';
import ContributorManageHelp from './manage/Help';
import ContributorManageSupport from './manage/Support';
import profile from '../../assets/img/profile2.png';
import Meta from '../utils/Meta';
import NotFound from '../utils/NotFound';
import { withNotification } from '../../services/withNotification';

export default withNotification(class ContributorManage extends Component {
  state = {
    balance : 0,
    leads: 0,
    cleads: 0,
    contracts: [],
    loading : true,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url : '/user/me',
      method : 'get'
    }, notification)
      .then((res) => {
        this.setState({
          user : res,
          loading : false,
          leads : res.leads.length,
          balance: res.balance
        })
        res.leads.map((lead) => {
          if (lead.converted) {
            this.setState({
              cleads: this.state.cleads + 1
            })
          }
          return null;
        });
      });
  }

  money() {
    const { notification } = this.props;
    request({
      url: '/user',
      method: 'put',
      data: {
        money_back: true
      }
    }, notification).then((res) => {
      notification.addNotification({
        message: 'Votre demande a bien été prise en compte, votre virement sera effectué par nos équipes dans les plus brefs délais',
        level: 'success'
      });
    });
  }

  render () {
    return (
      <div className="container py-4">
        <Meta title="Mon espace personnel"/>
        {(!this.state.loading && this.state.user.contracts.length === 0)?<Redirect to="/contributor/wish" />:''}
        {(!this.state.loading && !this.state.user.addresses.length)?<Redirect to="/contributor/address" />:''}
        {(!this.state.loading && this.state.user.contracts.length > 0 && !this.state.user.contracts[0].signed)?<Redirect to="/contributor/checkout" />:''}
        <div className="row">
          <div className="col-3">
            <img src={profile} alt="Logo entreprise" className="py-4 img-fluid" />
            <br />
            <ul className="list-group">
              <li className="list-group-item"><Link to="/contributor/manage">Tableau de bord</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/leads">Mes entreprises</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/support">Support de communication</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/infos">Mes informations</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/contract">Mon contrat</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage">Mes commissions</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/conditions">Conditions spécifiques d'utilisation</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage/help">Aide</Link></li>
              <li className="list-group-item"><Link to="/contributor/manage">Deconnexion</Link></li>
            </ul>
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-8">
                Entreprises demarchées : {this.state.leads} / 10<br />
                Conversion : {this.state.cleads} / {this.state.leads}<br />
                Mon solde : {this.state.balance} €<br />
              </div>
              <div className="col-4">
                <p className="text-center">
                  <Link to="/contributor/approach" className="btn btn-secondary">Demarcher une entreprise</Link>
                </p>
                <p className="text-center">
                  <button className="btn btn-secondary" onClick={this.money.bind(this)}>Récupérer mon solde</button>
                </p>
              </div>
            </div>
            <Switch>
              <Route exact path="/contributor/manage" component={ContributorManageDashboard} />
              <Route exact path="/contributor/manage/conditions" component={ContributorManageConditions} />
              <Route exact path="/contributor/manage/contract" component={ContributorManageContract} />
              <Route exact path="/contributor/manage/help" component={ContributorManageHelp} />
              <Route path="/contributor/manage/infos" component={ContributorManageInfos} />
              <Route exact path="/contributor/manage/leads" component={ContributorManageLeads} />
              <Route exact path="/contributor/manage/support" component={ContributorManageSupport} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
});
