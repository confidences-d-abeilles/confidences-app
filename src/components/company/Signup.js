import React, { Component } from 'react';

export default class CompanySignup extends Component {

    render () {
        return (
            <form>
                <h1>Inscription en tant qu'entreprise</h1>
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Mot de passe
                    <input type="password" />
                </label>
                <label>
                    Confirmation de mot de passe
                    <input type="password" />
                </label>
                <button type="submit">S'inscrire</button>
            </form>
        );
    }
}
