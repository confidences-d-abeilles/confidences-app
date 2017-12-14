import React, { Component } from 'react'
import request from '../../../services/Net'
import NotificationSystem from 'react-notification-system'
import FontAwesome from 'react-fontawesome'
import Loading from '../../utils/Loading'
import moment from 'moment';

const config = require('../../../config.js');

export default class Bills extends Component {

    constructor(props) {
		super (props)
		this.state = {
			user : null,
			bills: null
		}
	}

    componentDidMount() {
        request({
            url: '/bill/mine',
            method: 'get'
        }, this.refs.notif).then((res) => {
            this.setState({
                bills: res
            })
        })
    }
    render() {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center my-5">Mes factures</h2>
                    {(this.state.bills)?
                    <table className="table">
                        <tbody>
                            <tr><th>Numero</th><th>Montant</th><th>Date</th><th></th></tr>
                            {this.state.bills.map((bill) => {
                                return (
                                    <tr><td>{bill.number}</td><td>{bill.price} €</td><td>{moment(bill.date).format('DD/MM/YYYY')}</td><td><a href={config.cdn_url+'/bills/'+bill.number+'.pdf'} download><FontAwesome name="cloud-download" /></a></td></tr>
                                )
                            })}
                        </tbody>
                    </table>:
                    <Loading />}
                </div>
            </div>
        )
    }
}
