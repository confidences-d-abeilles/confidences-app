import React, { Component } from 'react'
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
      this.state = {
        fnct: props.fnct,
        id: '',
        sexe_m: '',
        address1: '',
        address2: '',
        address3: '',
        address4: '',
        zip: '',
        city: '',
        country: ''
      }
      console.log(props.fnct);
  }

  componentDidMount() {
    const data = new FormData();
    data.append('type', this.props.type);
    request({
			url : '/address/type',
			method : 'POST',
      data: data
		}, this.refs.notif).then((res) => {
					this.state = {
						id: res[0].id,
						sexe_m: res[0].sexe_m?'1':'0',
						address1: res[0].line1,
						address2: res[0].line2,
						address3: res[0].line3,
						address4: res[0].line4,
						zip: res[0].zipcode,
						city: res[0].city,
						country: res[0].country
					}
          console.log('start');
          console.log(res[0].line1);
          console.log(this.props.fnct);
			});
  }

  updateAddress() {
    console.log("fnct update");

  }

  createAddress() {
    console.log("fnct create");

  }

 render () {
   return (
     <div>
         <form onSubmit={this.props.fnct?this.updateAddress.bind(this):this.createAddress.bind(this)}>
           <div className="form-group">
             <label>Nom de l'entreprise</label>
             <input type="text" name="address2" onChange={handleChange.bind(this)} value={this.state.address2} className="form-control form-control-sm" placeholder="Nom de l'entreprise"/>
           </div>
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
           <div className="form-group">
             <label>Adresse ligne 1</label>
             <input type="text" name="address3" onChange={handleChange.bind(this)} value={this.state.address3} className="form-control form-control-sm" placeholder="Adresse ligne 1"/>
           </div>
           <div className="form-group">
             <label>Adresse ligne 2</label>
             <input type="text" name="address4" onChange={handleChange.bind(this)} value={this.state.address4} className="form-control form-control-sm" placeholder="Adresse ligne 2"/>
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

             <button className="btn btn-primary">Enregistrer</button>

         </form>
     </div>
   )
 }
}
