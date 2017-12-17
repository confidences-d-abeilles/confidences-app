import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import { Link } from 'react-router-dom'

export default class AdminManageServer extends Component {

    constructor (props) {
        super(props)
        this.state = {

        }
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
                </div>
            </div>
        )
    }
}
