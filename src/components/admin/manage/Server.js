import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

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

    render () {
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center">Espace technique</h2>
                </div>
                <div className="col-lg-4">
                    <h3>Emails</h3>
                    <button className="btn btn-info my-1" onClick={this.testEmailInscription.bind(this)}>Test email confirmation inscription</button>
                    <button className="btn btn-info my-1" onClick={this.testEmailPartLater.bind(this)}>Test email confirmation inscription</button>
                </div>
            </div>
        )
    }
}
