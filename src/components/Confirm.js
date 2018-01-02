import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system'
import Loading from './utils/Loading'

export default class Confirm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    componentDidMount() {
        request({
            url: '/user/email/'+this.props.match.params.token,
            method: 'get'
        }, this.refs.notif).then((res) => {
            this.setState({
                loading: false
            })
        })
    }

    render() {
        return (
            <div className="container">
                <NotificationSystem  ref="notif" />
                {(this.state.loading)?
                <Loading />
                :<p>Votre adresse email a été confirmée avec succès !</p>}
             </div>
        )
    }
}
