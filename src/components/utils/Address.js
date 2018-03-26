import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { handleChange, handleTick } from '../../services/FormService'
import { Link } from 'react-router-dom'
import NotificationSystem from 'react-notification-system'
import request from '../../services/Net'
import ReactQuill from 'react-quill';
import ReactGA from 'react-ga';
import Confirm from './Confirm';
const config = require('../../config.js');

export default class Address extends Component {
  constructor (props) {
      super(props);
      console.log("const du compo address");
      console.log(props.user ? props.user.name+' '+props.user.firstname:'');
      this.state = {
        fnct: props.fnct,
        id: '',
        sexe_m: props.user ? props.user.sexe_m?'1':'0':'',
        address1: props.user ? props.user.name+' '+props.user.firstname:'',
        // address2: this.props.user ? this.props.user.company_name:'',
        // address1: '',
        address2: '',
        address3: '',
        address4: '',

        zip: '',
        city: '',
        country: '',
        redirect: false,
        phone: this.props.user ? this.props.user.phone: '',
        is_infos: false
      }
      console.log(this.state.address1);
  }

  componentWillReceiveProps(nextProps){
    console.log('nextProps');
    console.log(this.props.functionDefault);
    request({
      url : '/address/type',
      method : 'POST',
      data: {
        type: this.props.type
      }
    }, this.refs.notif).then((res) => {
      console.log(res);
          // this.state = {
          //   id: res[0].id,
          //   sexe_m: res[0].sexe_m?'1':'0',
          //   address1: res[0].line1,
          //   address2: res[0].line2,
          //   address3: res[0].line3,
          //   address4: res[0].line4,
          //   phone: res[0].phone,
          //   zip: res[0].zipcode,
          //   city: res[0].city,
          //   country: res[0].country,
          //   is_infos: true
          // }
      }, () => {
        this.setState({is_infos:true});
        console.log('componentDidMount next props finis');
      });
  }

  componentDidMount() {
    console.log("debut du componentDidMount");
    if (this.props.fnct){
      const data = new FormData();
      data.append('type', this.props.type);
      console.log('componentDidMount est un update');
      request({
  			url : '/address/type',
  			method : 'POST',
        data: data
  		}, this.refs.notif).then((res) => {
  					this.setState({
  						id: res[0].id,
  						sexe_m: res[0].sexe_m?'1':'0',
  						address1: res[0].line1,
  						address2: res[0].line2,
  						address3: res[0].line3,
  						address4: res[0].line4,
              phone: res[0].phone,
  						zip: res[0].zipcode,
  						city: res[0].city,
  						country: res[0].country,
              is_infos: true
  					}, () => {

          console.log('componentDidMount finis');
        });
      });
    }
  }

  updateAddress(e) {
    console.log("fnct update");
    e.preventDefault();
    const data = new FormData();
    data.append('sexe_m', this.state.sexe_m);
    data.append('line1', this.state.address1);
    data.append('line2', this.state.address2);
    data.append('line3', this.state.address3);
    data.append('line4', this.state.address4);
    data.append('zipcode', this.state.zip);
    data.append('country', this.state.country);
    data.append('city', this.state.city);
    data.append('phone', this.state.phone);
    request({
      url: '/address/'+this.state.id,
      method: 'PUT',
      data: data
    }, this.refs.notif).then((res) => {
       let objState = {};
       objState[this.props.var] = false;
       this.props.functionDefault(objState);
		})

  }

  createAddress(e) {
      e.preventDefault();
      console.log(this.state.sexe_m);
      console.log(this.state.address3);
      console.log(this.state.city);
      console.log(this.state.zip);
      if (!this.state.sexe_m || !this.state.address3 || !this.state.city || !this.state.zip) {
        this.refs.notif.addNotification({
          message : "Merci de renseigner tous les champs",
          level : 'warning'
        })
      } else {
        request({
          url : '/address',
          method: 'post',
          data : {
            sexe_m : (this.state.sexe_m === '0')?false:true,
            line1 : this.state.address1,
            line2 : this.state.address2,
            line3 : this.state.address3,
            line4 : this.state.address4,
            phone : this.state.phone,
            city : this.state.city,
            zipcode : this.state.zip,
            country: this.state.country,
            type : this.props.type
          }
        }, this.refs.notif).then((res) => {
          let objState = {};
          objState['address1'] = this.state.address1;
          objState['address2'] = this.state.address2;
          objState['address3'] = this.state.address3;
          objState['address4'] = this.state.address4;
          objState['city'] = this.state.city;
          objState['zip'] = this.state.zip;
          objState['country'] = this.state.country;
          objState['type'] = this.state.type;
          objState['phone'] = this.state.phone;
          this.props.functionDefault(objState);// rajouter une variable par default pour
          // dechecker une fois save
          this.state = {
            redirect: true
          }
        });
      }
  }

 render () {
   return (
     <div>
      <NotificationSystem ref="notif" />

         <form onSubmit={this.props.fnct?this.updateAddress.bind(this):this.createAddress.bind(this)}>
          <h2 className="text-center my-4">{this.props.title}</h2>
           <div className="form-group d-flex">
             <label className="radio-inline form-check-label">
               <input type="radio" className="form-check-input" name="sexe_m" value="1" onChange={handleChange.bind(this)} checked={this.state.sexe_m === '1'}/>
               &nbsp;M
             </label>
             <label className="radio-inline form-check-label ml-4">
               <input type="radio" className="form-check-input" name="sexe_m" value="0" onChange={handleChange.bind(this)} checked={this.state.sexe_m === '0'}/>
               &nbsp;Mme
             </label>
           </div>
           <div className="form-group">
             <label>Nom et prénom</label>
             <input type="text" name="address1" onChange={handleChange.bind(this)} value={this.state.address1} className="form-control form-control-sm" placeholder="Nom et prénom"/>
           </div>
           {this.state.address2 ?
             <div className="form-group">
               <label>Nom de l'entreprise</label>
               <input type="text" name="address2" onChange={handleChange.bind(this)} value={this.state.address2} className="form-control form-control-sm" placeholder="Nom de l'entreprise"/>
             </div>
           :null}
           <div className="form-group">
             <label>Adresse ligne 1</label>
             <input type="text" name="address3" onChange={handleChange.bind(this)} value={this.state.address3} className="form-control form-control-sm" placeholder="Adresse ligne 1"/>
           </div>
           <div className="form-group">
             <label>Adresse ligne 2</label>
             <input type="text" name="address4" onChange={handleChange.bind(this)} value={this.state.address4} className="form-control form-control-sm" placeholder="Adresse ligne 2"/>
           </div>
           <div className="form-group">
             <label>numero de telephone</label>
             <input type="text" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} className="form-control form-control-sm" placeholder="numero de telephone"/>
           </div>
           <div className="form-group row">
             <div className="col-12">
               <label>Code postal et ville</label>
             </div>
             <div className="col-4">
               <input type="text" name="zip" onChange={handleChange.bind(this)} value={this.state.zip} className="form-control form-control-sm" placeholder="Code postal"/>
             </div>
             <div className="col-8">
               <input type="text" name="city" onChange={handleChange.bind(this)} value={this.state.city} className="form-control form-control-sm" placeholder="Ville *"/>
             </div>
           </div>
           <div className="form-group">
             <label>Pays / État</label>
             <input type="text" name="country" onChange={handleChange.bind(this)} value={this.state.country} className="form-control form-control-sm" placeholder="Pays / Etat *"/>
           </div>
           <p>
            {this.props.textDefault}
           </p>
             <button className="btn btn-primary">{this.props.textButton}</button>
         </form>
       {(this.state.redirect)?
 					   <Redirect to={this.props.redirect} />
 				:null}
     </div>
   )
 }
}
