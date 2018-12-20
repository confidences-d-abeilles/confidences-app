import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import NotificationSystem from 'react-notification-system';
import FontAwesome from 'react-fontawesome';
import logoSquare from '../assets/img/logo-square.png';
import { isLoggedIn } from '../services/AuthService';
import { handleChange } from '../services/FormService';
import request from '../services/Net';
import MyLink from './utils/Link';
import navLinks from '../config/navLinks';

export default class Header extends Component {
  state = {
    redirect: false,
    email: '',
    firstname: '',
  }

  subNewsletter = (e) => {
    e.preventDefault();
    const { email, firstname } = this.state;
    request({
      url: '/newsletter',
      method: 'post',
      data: {
        firstname,
        email,
        listId: '17334',
      },
    }, this.refs.notif).then(() => {
      this.refs.newsmodal.style.display = 'none';
      this.refs.newsmodal.classList.remove('show');
      this.setState({
        email: '',
        firstname: '',
      });
    });
  }

  newsletterPopup = () => (
    <div className="modal fade" id="newsmodal" data-backdrop={false} ref="newsmodal">
      <div className="modal-dialog" role="document">
        <form className="modal-content" onSubmit={this.subNewsletter}>
          <div className="modal-header">
            <h5 className="modal-title">S'abonner à la newsletter</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <div className="form-group">
              <input type="text" name="firstname" value={this.state.firstname} className="form-control" onChange={handleChange.bind(this)} placeholder="Votre prénom..." />
            </div>
            <div className="form-group">
              <input type="email" name="email" value={this.state.email} className="form-control" onChange={handleChange.bind(this)} placeholder="Votre adresse email..." />
            </div>
          </div>
          <div className="modal-footer">
            <input type="submit" className="btn btn-secondary" value="Valider" />
          </div>
        </form>
      </div>
    </div>
  )

  render() {
    const { redirect } = this.state;
    return (
      <div>
        <NotificationSystem ref="notif" />
        <nav className="navbar navbar-toggleable-md navbar-light" style={{ boxShadow: '0 2px 2px silver' }}>
          <button className="navbar-toggler navbar-toggler-right align-self-center" type="button" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon" />
          </button>
          {redirect && <Redirect to="/" />}
          <Link className="navbar-brand" to="/">
            <img src={logoSquare} width="auto" height="64" alt="Logo Confidences d'Abeilles" />
            <h2 className="badge badge-danger" style={{ position: 'absolute', top: '75px', left: '75px', fontSize: '1.5em', zIndex: 1000 }}>{(process.env.NODE_ENV === "development")?'Bêta':null}</h2>
          </Link>
          <div className="hidden-lg-up collapse" style={{justifyContent: 'space-between'}} id="navbarNav" onClick={() => { document.getElementById("navbarNav").classList.remove("show") }}>
            <ul className="navbar-nav">
              {isLoggedIn() ? navLinks.mobile.loggedIn.map(props => (
                <li className="nav-item">
                  <MyLink className="nav-link" {...props} />
                </li>)) : (
                  <Fragment>
                    {navLinks.mobile.visitors.before.map(props => (
                      <li className="nav-item">
                        <MyLink className="nav-link" {...props} />
                      </li>
                    ))}
                    <li className="nav-item">
                      <strong
                        className="nav-link"
                        style={{ cursor: 'pointer' }}
                        data-toggle="modal"
                        data-target="#newsmodal"
                      >
                        <FontAwesome name="envelope-o" />
                        &nbsp;
                        Newsletters
                      </strong>
                    </li>
                    {navLinks.mobile.visitors.after.map(props => (
                      <li className="nav-item">
                        <MyLink className="nav-link" {...props} />
                      </li>
                    ))}
                  </Fragment>
              )}
            </ul>
          </div>
          {isLoggedIn()
            ? <ul className="navbar-nav hidden-md-down" />
            : (
              <ul className="navbar-nav hidden-md-down">
                {navLinks.desktop.visitors.map(props => (
                  <li className="nav-item">
                    <MyLink className="nav-link" {...props} />
                  </li>
                ))}
              </ul>
            )}
          <ul className="navbar-nav ml-auto hidden-md-down">
            {!isLoggedIn() && (
              <li className="nav-item">
                <strong
                  className="nav-link"
                  style={{ cursor: 'pointer' }}
                  data-toggle="modal"
                  data-target="#newsmodal"
                >
                  <FontAwesome name="envelope-o" />
                  &nbsp;
                  Newsletter
                </strong>
              </li>
            )}
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" style={{ cursor : 'pointer' }} href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                La société
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                {navLinks.desktop.dropdown.map(props => <MyLink className="dropdown-item" {...props} />)}
              </div>
            </li>
            {isLoggedIn()
              ? (
                <Fragment>
                  <li className="nav-item">
                    &nbsp;&nbsp;
                    <Link className="btn btn-primary" to="/account">Mon compte</Link>
                  </li>
                  <li className="nav-item">
                    &nbsp;&nbsp;
                    <Link className="btn btn-primary" to="/logout">Deconnexion</Link>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item">
                    &nbsp;&nbsp;
                    <Link className="btn btn-primary" to="/login">Se connecter</Link>
                  </li>
                  <li className="nav-item">
                    &nbsp;&nbsp;
                    <Link className="btn btn-primary" to="/presignup">Créer un compte</Link>
                  </li>
                </Fragment>
              )}
          </ul>
          {this.newsletterPopup()}
        </nav>
      </div>
    );
  }
}
