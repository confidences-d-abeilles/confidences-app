import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Link } from 'react-router-dom'
import Loading from '../../utils/Loading'
import PayForm from '../../utils/PayForm'
import { Elements } from 'react-stripe-elements'
import ReactGA from 'react-ga';
export default class AdminManageServer extends Component {

    constructor (props) {
        super(props)
        ReactGA.pageview(this.props.location.pathname);
        this.state = {
            user: null
        }
    }

    componentDidMount () {
        request({
            url: '/user/me',
            method: 'get'
        }, this.refs.notif).then((res) => {
            this.setState({
                user: res
            })
        })
    }

    testEmailInscription () {
        request({
            url: '/server/test-email-inscription',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartLater () {
        request({
            url: '/server/test-email-part-later',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartOk () {
        request({
            url: '/server/test-email-part-ok',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartAttente () {
        request({
            url: '/server/test-email-part-attente',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartVirementok () {
        request({
            url: '/server/test-email-part-virementok',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartRuche () {
        request({
            url: '/server/test-email-part-ruche',
            method: 'get'
        }, this.refs.notif)
    }

    testEmailPartCadeau () {
        request({
            url: '/server/test-email-part-cadeau',
            method: 'get'
        }, this.refs.notif)
    }

    testScheduleEmail () {
        request({
            url: '/server/schedule-test',
            method: 'get'
        }, this.refs.notif);
    }

    cancelEmail() {
        request({
            url: '/server/schedule-cancel',
            method: 'get'
        }, this.refs.notif);
    }

    render () {
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center">Espace technique</h2>
                </div>
                <div className="col-lg-4">
                    <h3>Emails particuliers</h3>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailInscription.bind(this)}>Test email confirmation inscription</button>
                    </div>
                    <div className="form-group text-center">
                        <label>Aller au prealable choisir un parrainage particulier <Link to="/individual/wish">ici</Link></label>
                        <button className="btn btn-info form-control" onClick={this.testEmailPartLater.bind(this)}>Test email paiement plus tard</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailPartOk.bind(this)}>Test email paiement ok</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailPartAttente.bind(this)}>Test email virement effectué</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailPartVirementok.bind(this)}>Test email virement ok</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailPartRuche.bind(this)}>Test email ruche</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testEmailPartCadeau.bind(this)}>Test email cadeau</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.testScheduleEmail.bind(this)}>Test email programmé</button>
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-info form-control" onClick={this.cancelEmail.bind(this)}>Cancel email programmé</button>
                    </div>
                </div>
            </div>
        )
    }
}
