import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import ReactHtmlParser from 'react-html-parser';
import FontAwesome from 'react-fontawesome';
import moment from 'moment';
import ReactGA from 'react-ga';
import ReactStars from 'react-stars';
import { Link } from 'react-router-dom';
import Meta from './utils/Meta';
import Imagebox from './utils/Imagebox';
import ImgHive from '../assets/img/logo_ruche_entreprise.png';
import Loading from './utils/Loading';
import request from '../services/Net';

const config = require('../config.js');


export default class Hive extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hive: null,
    };
    ReactGA.pageview(this.props.location.pathname);
  }

  componentDidMount() {
    request({
      url: `/hive/${this.props.match.params.id}`,
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        hive: res,
      });
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <Meta title="La ruche" />
        <NotificationSystem ref="notif" />
        {(this.state.hive)
          ? (
            <div>
              <h1
                className="text-center my-4"
                style={{
                  fontFamily: 'HighTo', padding: '0.4em 2.5em', zIndex: '5', color: '#E49C00',
                }}
              >
RUCHE
                {this.state.hive.name.toUpperCase()}
              </h1>
              <div className="row">
                <div className="col-lg-5 col-md-7 col-sm-12 pr-4">
                  <div className="row">
                    <div className="col-lg-7 px-5">
                      <Imagebox
                        src={(this.state.hive.imgs[0]) ? `${config.cdn_url}/${this.state.hive.imgs[0]}` : ImgHive}
                        width="100%"
                        paddingTop="100%"
                        alt="Photo principale de la ruche"
                      />
                    </div>
                    <div
                      className="col-lg-5"
                      style={{
                        backgroundColor: '#E49C00', color: 'white', fontFamily: 'HighTo', fontSize: '1.25em',
                      }}
                    >
                      <h2 className="mt-4">PARRAINS</h2>
                      <div style={{ width: '100%', height: '1px', backgroundColor: 'white' }} className="mb-4" />
                      {this.state.hive
                    && this.state.hive.parrains.map((user, key) => {
                      console.log(user);
                      if (user.company_name) {
                        return (
                          <h3 key={key}><Link to={`/parrains/${user.namespace}`} style={{ color: 'white' }}>{user.company_name}</Link></h3>
                        );
                      }
                      return (
                        <h3 key={key}>{`${user.firstname} ${user.name}`}</h3>
                      );
                    })}
                    </div>
                  </div>
                  <h2 className="mt-5" style={{ fontFamily: 'HighTo' }}>INFORMATIONS SUR LA RUCHE</h2>
                  <ReactStars
                    count={5}
                    value={this.state.hive.ratio}
                    edit={false}
                    size={24}
                    color2="#ffd700"
                  />
                  <div style={{ width: '100%', height: '1px', backgroundColor: 'black' }} className="mb-4" />
                  <p style={{ fontFamily: 'HighTo', fontSize: '1.25em' }}>
                    {this.state.hive.info ? this.state.hive.info : 'Aucune information sur cette ruche pour le moment'}
                  </p>
                  <div className="row mb-5">
                    {this.state.hive.imgs.map((img, index) => {
                      if (img === this.state.hive.imgs[0]) {
                        return (null);
                      }
                      if (index !== 1) { index += 1; }
                      return (
                        <div className="col-lg-4">
                          <Imagebox
                            src={`${config.cdn_url}/${this.state.hive.imgs[index]}`}
                            width="100%"
                            paddingTop="100%"
                            alt="Photo de la ruche"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="col-lg-7 col-md-4 col-sm-12" style={{ fontFamily: 'HighTo', fontSize: '1.25em' }}>
                  <h2 className="text-center">ACTUALITÉS</h2>
                  {(this.state.hive.news.length)
                    ? this.state.hive.news.map((actu) => {
                      let date;
                      if (actu.date) {
                        date = new Date(actu.date);
                      } else {
                        date = new Date(actu.createdAt);
                      }
                      return (
                        <div className="my-2 row">
                          <div className="col-lg-2">
                            <Imagebox
                              src={`${config.cdn_url}/${actu.img}`}
                              alt="Card image cap"
                              width="100%"
                              paddingTop="100%"
                            />
                          </div>
                          <div className="col-lg-10">
                            <h3>{actu.title}</h3>
                            <p><small className="text-muted">{moment(date).format('DD/MM/YYYY')}</small></p>
                            <p className="collapse" id={actu.id}>
                              {ReactHtmlParser(actu.content)}
                            </p>
                            <button className="btn btn-link" data-toggle="collapse" data-target={`#${actu.id}`}>
Développer / Réduire
                              <FontAwesome name="sort" />
                            </button>
                          </div>
                        </div>
                      );
                    })
                    : 'Aucune actualité à afficher pour cette ruche'}
                </div>
              </div>
            </div>
          )
          : <Loading />}
      </div>
    );
  }
}
