import React, { Component } from 'react';
import Version1 from '../../../assets/img/P/etiqu1.jpg';
import Version2 from '../../../assets/img/P/etiqu2.jpg';
import ReactGA from 'react-ga';
export default class Custom extends Component {

    constructor(props) {
        super (props);
        ReactGA.pageview(this.props.location.pathname);
        this.state = {

        }
    }

    render () {
        return (
            <div className="row">
                <div className="col-lg-12 text-center">
                    <h2 className="text-center my-5">Choix des étiquettes</h2>
                    <p className="alert alert-info">Cette fonctionnalité est en cours de développement et sera disponible d'ici quelques jours. Merci de votre patience. En attendant, voici un aperçu des futures étiquettes ;)</p>
                    <img className="img-fluid" src={Version1} alt="Modèle 1"/><hr />
                    <img className="img-fluid" src={Version2} alt="Modèle 2"/>
                </div>
            </div>
        )
    }
}
