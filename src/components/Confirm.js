import React, { Component } from 'react';
import request from '../services/Net';
import NotificationSystem from 'react-notification-system'
import Loading from './utils/Loading'
import { Redirect } from 'react-router-dom'
import Meta from './utils/Meta'

export default class Confirm extends Component {

    constructor (props) {
        super(props)
        this.state = {
            loading: true,
            redirect: false
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
            setTimeout(() => {
                this.setState({
                    redirect: true
                })
            }, 3000)
        })
    }

    render() {
        return (
            <div className="container py-5">
                <Meta title="Confirmation d'adresse email"/>
                {this.state.redirect && <Redirect to="/account" />}
                <NotificationSystem  ref="notif" />
                {(this.state.loading)?
                <Loading />
                :<p className="alert alert-success">Votre adresse email est bien vérifié, vous allez être redirigé vers votre compte dans quelques instants</p>}
             </div>
        )
    }
}
