import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import FontAwesome from 'react-fontawesome'
import Loading from '../../utils/Loading'

export default class Bills extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center my-4">Mes factures</h2>
                    <Loading />
                </div>
            </div>
        )
    }
}
