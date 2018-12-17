import React, { Component } from 'react';
import request from '../../services/Net';
import CompanyManageDashboard from './manage/Dashboard';
import Account from './manage/Account';
import CompanyManageInfos from './manage/Infos';
import CompanyManageMyPage from './manage/MyPage';
import CompanyManageBills from './manage/Bills'
import CompanyManageCustomize from './manage/Customize'
import {
	Route,
	Link,
	Redirect,
	Switch
} from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import waitLogo from '../../assets/img/waitlogo.png';
import Meta from '../utils/Meta'
import NotFound from '../utils/NotFound'
import FontAwesome from 'react-fontawesome'
import ReactGA from 'react-ga';

export default class CompanyManage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
			user : null
		}
	}

	componentDidMount() {
		this.updateMe();
	}

	updateMe() {
		request({
			url : '/user/me',
			method : 'get'
		}, this.refs.notif)
		.then((res) => {
			this.setState({
				user : res
			});
		})
		.catch((err) => {});
	}

	companyManageInfosRoute = (props) => {
		ReactGA.pageview(this.props.location.pathname);
		return(
			<CompanyManageInfos update={this.updateMe.bind(this)} />
		)
	}

	checkInfos() {
		if (!this.state.user.company_name) {
			return (<Redirect to="/company/identity" />);
		}
		if (this.state.user.addresses && !this.state.user.addresses[0]) {
			return (<Redirect to="/company/address" />);
		}
		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 0 ) {
			return (
				<p className="alert alert-danger mt-4">
					Vous n'avez pas encore réglé votre parrainage.&nbsp;
					<Link to="/company/payment">Cliquez ici</Link> pour le faire ou <Link to="/company/checkout">sur ce lien</Link>&nbsp;
					si vous souhaitez modifier l'offre choisie.&nbsp;
					Si vous avez ajouté Confidences d'Abeilles en tant que bénéficiaire, effectuez votre virement&nbsp;
					et confirmez <Link to="/company/payment">ici</Link>.
				</p>
			);
		}

		if (this.state.user && this.state.user.bundles[0] && this.state.user.bundles[0].state === 1 ) {
			return (
				<p className="alert alert-warning mt-4">La validation du règlement de votre parrainage est en cours</p>
			);
		}

		if (this.state.user && this.state.user.newsletter) {
			return (
				<p className="alert alert-warning mt-4">Vous êtes inscrit(e) à la newsletter. Une fois tous les 2 mois vous recevrez des nouvelles de vos abeilles ainsi que des nôtres. Si vous ne souhaitez pas la recevoir, merci de modifier <Link to="/company/account">vos préférences.</Link></p>
			)
		}

		if (this.state.user && !this.state.user.bundles[0]) {
			return (<Redirect to="/company/wish" />);
		}
	}

	render () {
		return (
				<div className="container py-4">
					<Meta title="Mon espace personnel"/>
					<NotificationSystem ref="notif" />
					<div className="row">
						<div className="col-lg-3 col-md-4 col-sm-12">
							<div style={{ height: '210px', maxWidth: '100%' }}>
								{(this.state.user && this.state.user.HQlogo)?
								<img src={process.env.REACT_APP_CONTENT_DOMAIN+'/'+this.state.user.HQlogo} alt="Logo entreprise" style={{ maxWidth: '100%', maxHeight: '100%' }} />:
									<Link to="/company/manage/infos" style={{ display: 'block', height: '100%'}}><img src={waitLogo} alt="Logo à uploader" style={{ maxHeight: '100%', width: '100%' }} /></Link>}
							</div>
							<ul className="list-group">
								<li className="list-group-item"><Link to="/company/manage"><FontAwesome name="archive" fixedWidth={true} />&nbsp;&nbsp;Notre parrainage</Link></li>
								<li className="list-group-item"><Link to="/company/manage/customize"><FontAwesome name="flask" fixedWidth={true} />&nbsp;&nbsp;Nos pots de miel</Link></li>
								<li className="list-group-item"><Link to="/company/manage/mypage"><FontAwesome name="bookmark" fixedWidth={true} />&nbsp;&nbsp;Notre page dediee</Link></li>
								<li className="list-group-item"><Link to="/company/manage/infos"><FontAwesome name="address-card" fixedWidth={true} />&nbsp;&nbsp;Mes informations</Link></li>
								<li className="list-group-item"><Link to="/company/manage/bills"><FontAwesome name="file" fixedWidth={true} />&nbsp;&nbsp;Factures</Link></li>
								<li className="list-group-item"><Link to="/company/manage/account"><FontAwesome name="gears" fixedWidth={true} />&nbsp;&nbsp;Mon compte</Link></li>
								<li className="list-group-item"><Link to="/logout"><FontAwesome name="sign-out" fixedWidth={true} />&nbsp;&nbsp;Deconnexion</Link></li>
							</ul>
						</div>
						<div className="col-lg-9 col-md-8 col-sm-12">
							<div className="row">
								<div className="col-12">
									{(this.state.user)?this.checkInfos():''}
								</div>
							</div>
							<div className="row">
								<div className="col-12">
									<Switch>
										<Route exact path="/company/manage" component={CompanyManageDashboard} />
										<Route exact path="/company/manage/infos" component={this.companyManageInfosRoute.bind(this)} />
										<Route exact path="/company/manage/mypage" component={CompanyManageMyPage} />
										<Route exact path="/company/manage/customize" component={CompanyManageCustomize} />
										<Route exact path="/company/manage/bills" component={CompanyManageBills} />
										<Route exact path="/company/manage/account" component={Account} />
										<Route component={NotFound} />
									</Switch>
								</div>
							</div>
						</div>
					</div>
				</div>
		);
	}
}
