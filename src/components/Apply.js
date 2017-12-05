import React, { Component } from 'react'
import { handleChange } from '../services/FormService'
import request from '../services/Net'
import NotificationSystem from 'react-notification-system'

export default class Apply extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            firstname: '',
            email: '',
            phone: '',
            linkedin: '',
            presentation: '',
            success: false
        }
    }

    apply(e) {
        e.preventDefault();
        request({
            url: '/contact/apply',
            method: 'post'
        }, this.refs.notif).then((res) => {
            this.setState({
                name: '',
                firstname: '',
                email: '',
                phone: '',
                linkedin: '',
                presentation: '',
                success: true
            })
        })
    }

    render () {
        return (
            <div className="container">
                <NotificationSystem ref="notif" />
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10 col-sm-12">
                        <h2 className="text-center my-4">CARRIÈRES : N’HÉSITEZ PLUS, REJOIGNEZ NOUS 🙂</h2>
                        <p>Vous aimez l’aventure, vous avez de l’ambition et vous êtes ultra motivé ! Pas de doute, vous êtes la pierre angulaire de notre future team.
                            <br /><br />
À votre clavier, le formulaire ci-dessous vous attend ! </p>
                        <form onSubmit={this.apply.bind(this)} className="mt-4">
                            <div className="form-group">
                                <input type="text" value={this.state.name} onChange={handleChange.bind(this)} placeholder="Votre nom *" name="name" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" value={this.state.firstname} onChange={handleChange.bind(this)} placeholder="Votre prenom *" name="firstname" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" value={this.state.email} onChange={handleChange.bind(this)} placeholder="Votre email *" name="email" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" value={this.state.phone} onChange={handleChange.bind(this)} placeholder="Votre numero de telephone *" name="phone" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <input type="text" value={this.state.linkedin} onChange={handleChange.bind(this)} placeholder="Lien vers votre compte LinkedIn" name="linkedin" className="form-control"/>
                            </div>
                            <div className="form-group">
                                <textarea value={this.state.presentation} rows="10" onChange={handleChange.bind(this)} placeholder="C'est à vous. Présentez-vous rapidement et donnez nous envie de vous rappeler ! *" name="presentation" className="form-control"/>
                            </div>
                            {this.state.success &&
                            <p className="alert alert-success">Votre candidature a ete envoyee avec succes</p>}
                            <button className="btn btn-primary mb-4">Envoyer</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
