import React, { Component } from 'react';

export default class Custom extends Component {

    constructor(props) {
        super (props);
        this.state = {

        }
    }

    render () {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <h2 className="text-center my-5">Choix des étiquettes</h2>
                    <p className="alert alert-info">Cette fonctionnalité est en cours de développement et sera disponible d'ici quelques jours. Merci de votre patience.</p>
                </div>
            </div>
        )
    }
}
