import React, { Component } from 'react';
import NotificationSystem from 'react-notification-system';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import request from '../services/Net';
import '../assets/styles/parrains_homepage.css';
import first from '../assets/img/homepage/1.jpg';
import second from '../assets/img/homepage/2.jpg';
import third from '../assets/img/homepage/3.jpg';
import fourth from '../assets/img/homepage/4.jpg';
import fifth from '../assets/img/homepage/5.jpg';
import sixth from '../assets/img/homepage/6.jpg';
import seventh from '../assets/img/homepage/7.jpg';
import Loading from './utils/Loading';
import Meta from './utils/Meta';

const defaultImg = require('../assets/img/profile.png');

const carouselSlides = [
  { element: first, label: 'first' },
  { element: second, label: 'second' },
  { element: third, label: 'third' },
  { element: fourth, label: 'fourth' },
  { element: fifth, label: 'fifth' },
  { element: sixth, label: 'sixth' },
  { element: seventh, label: 'seventh' },
];

export default class Home extends Component {
  state = {
    users: null,
  }

  componentDidMount() {
    request({
      url: '/user/public',
      method: 'get',
    }, this.refs.notif).then((res) => {
      this.setState({
        users: res.reverse(),
      });
      this.autoplay = setInterval(() => { this.refs.slider.slickNext(); }, 5000);
    });
  }

  componentWillUnmount() {
    clearInterval(this.autoplay);
  }

  render() {
    return (
      <div className="container py-4">
        <Meta title="Accueil"/>
        <NotificationSystem ref="notif" />
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 col-md-10 col-sm-12">
            <h1>Parrainez une ruche, aidez-nous à protéger les abeilles</h1>
            <p>
              Confidences d’Abeilles vous propose
              aujourd’hui de l’aider à poursuivre sa
              mission. Vous aussi participez à la protection
              des abeilles, à la préservation de la
              biodiversité en parrainant une ruche.
            </p>
            <p className="text-center">
              <Link to="/company/presentation" className="btn btn-secondary m-2">Service entreprise</Link>
              <Link to="/individual/presentation" className="btn btn-secondary m-2">Service particulier</Link>
            </p>
          </div>
          <div className="col-lg-6 col-md-10 hidden-sm-down my-4">
            <div id="carouselHome" className="carousel slide" data-interval="2500" data-ride="carousel">
              <ol className="carousel-indicators">
                {/* eslint-disable-next-line react/no-array-index-key */}
                {[6].map((e, key) => <li data-target="#carouselHome" data-slide-to={key} key={key} className={key === 0 && 'active'} />)}
              </ol>
              <div className="carousel-inner" role="listbox">
                {carouselSlides.map(({ element, label }, key) => (
                  <div className={key === 0 ? 'carousel-item active' : 'carousel-item'} key={label}>
                    <img className="d-block w-100 h-100" src={element} alt={label} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <p>
              Cette mission nous la menons avec vous, particuliers, entreprises, citoyens avertis qui nous
              accompagnez depuis nos débuts. En finançant un rucher pédagogique vous nous avez déjà
              permis d’organiser des journées découvertes et de formation ; nous sommes fiers
              aussi d’avoir lancé plusieurs néophytes dans le grand bain de l’apiculture !
            </p>
          </div>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col">
            <h2 className="text-center my-4">Ils parrainent déjà des ruches</h2>
            {(this.state.users)?
              <Slider ref="slider" {...{
                  dots: false,
                  infinite: true,
                  speed: 1000,
                  slidesToShow: 4,
                  slidesToScroll: 4,
                  arrows: true,
                }}>
                {this.state.users.map((user) => {
                  if (user.user_type === 1 || user.user_type  === 2) {
                    let img;
                    if (user.logo) {
                      img = process.env.REACT_APP_CONTENT_DOMAIN+'/'+user.logo;
                    } else if (user.hive_img) {
                      img = process.env.REACT_APP_CONTENT_DOMAIN+'/'+user.hive_img;
                    } else {
                      img = defaultImg;
                    }
                    return (
                      <div key={user.id}>
                        <Link to={(user.namespace)?'/parrains/'+user.namespace:'/hive/'+user.hive_id}>
                          <img className="img-fluid" src={img} alt={(user.company_name)?user.company_name:user.firstname+' '+user.name}/>
                          <p className="my-2" style={{ height: '2em', lineHeight: '2em', overflow: 'hidden'}}>{(user.company_name)?user.company_name:user.firstname+' '+user.name}</p>
                        </Link>
                      </div>
                    )
                  } else {
                    return null;
                  }
                })}
              </Slider>
              :<Loading />}
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-10 col-sm-12">
            <p>
              Vous voulez apporter votre pierre à l’édifice et participer à cette belle aventure ? Nous vous
              proposons de parrainer une ruche. En échange de quoi, les butineuses vous feront découvrir
              leur précieux butin : une partie du miel qu’elles auront amassé !
            </p>
          </div>
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <Link className="btn btn-secondary" to="/presignup">Parrainer une ruche</Link>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 text-center my-2">
            <Link to="/hives" className="btn btn-secondary">Découvrir les ruches</Link>
          </div>
        </div>
      </div>
    );
  }
}
