import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Meta from './utils/Meta';

export default class Presignup extends Component {

    render () {
        return (
            <div className="container">
                <Meta title="Créer un compte"/>
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <h2 className="text-center my-5">Je suis ...</h2>
                        <p className="text-center">
                            <Link to="/signup/company" className="btn btn-secondary">Une Entreprise</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        					<Link to="/signup/individual" className="btn btn-secondary">Un Particulier</Link>&nbsp;&nbsp;&nbsp;&nbsp;
        					<Link to="/signup/contributor" className="btn btn-secondary">Un Partenaire</Link>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}
