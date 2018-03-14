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

    render () {
        return (
            <div className="row">
                <NotificationSystem ref="notif" />
                <div className="col-lg-12">
                    <h2 className="text-center">Espace technique</h2>
                </div>
            </div>
        )
    }
}
