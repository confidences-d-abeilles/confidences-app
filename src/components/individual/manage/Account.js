import React, { Component } from 'react';
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'

export default class Account extends Component {

    constructor(props) {
        super(props)
        this.state = {
            sessions : null
        }
    }

    componentDidMount() {
        request({
            url: '/session',
            method: 'get'
        }, this.refs.notif).then((res) => {
            this.setState({
                sessions: res
            })
        })
    }

    render () {
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
            </div>
        )
    }
}
