import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import { Button } from '@cda/button';
import Input from '@cda/input';

import request from '../../../services/Net';
import { handleChange } from '../../../services/FormService';
import Loading from '../../utils/Loading';
import Meta from '../../utils/Meta';
import Address from '../../utils/Address/Address';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class IndividualManageInfos extends Component {
  constructor(props) {
    super(props);

    this.state = {
      logout: false,
      phone: '',
      email: '',
      bsexe_m: '',
      baddress1: '',
      baddress2: '',
      baddress3: '',
      baddress4: '',
      bzip: '',
      bcity: '',
      bcountry: '',
      dsexe_m: '',
      daddress1: '',
      daddress2: '',
      daddress3: '',
      daddress4: '',
      dzip: '',
      dcity: '',
      dcountry: '',
      dphone: '',
      password: '',
      conf: '',
      editInfos: false,
      editBaddress: false,
      editDaddress: false,
    };
    this.getState = this.getState.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        user: res,
        email: res.email,
        phone: res.phone,
      });
      res.addresses.forEach((address) => {
        if (address.type === 1) {
          this.setState({
            billing_address: address,
          });
        }
        if (address.type === 2) {
          this.setState({
            delivery_address: address,
          });
        }
      });
    });
  }

  async save() {
    const { notification } = this.props;
    await request({
      url: `/address/${this.state.bid}`,
      method: 'put',
      data: {
        sexe_m: this.state.bsexe_m === '0' ? 'false' : 'true',
        line1: this.state.baddress1,
        line2: this.state.baddress2,
        line3: this.state.baddress3,
        line4: this.state.baddress4,
        zipcode: this.state.bzip,
        city: this.state.bcity,
        country: this.state.bcountry,
      },
    }, notification);
    await request({
      url: `/address/${this.state.did}`,
      method: 'put',
      data: {
        sexe_m: this.state.dsexe_m === '0' ? 'false' : 'true',
        line1: this.state.daddress1,
        line2: this.state.daddress2,
        line3: this.state.daddress3,
        line4: this.state.daddress4,
        zipcode: this.state.dzip,
        city: this.state.dcity,
        country: this.state.dcountry,
        phone: this.state.dphone,
      },
    }, notification);
    await request({
      url: '/user',
      method: 'put',
      data: {
        phone: this.state.phone,
        email: this.state.email,
      },
    }, notification);
  }

  changeInfos(e) {
    e.preventDefault();
    const { notification } = this.props;
    request({
      url: '/user',
      method: 'put',
      data: {
        phone: this.state.phone,
        email: this.state.email,
      },
    }, notification).then((res) => {
      this.setState({
        editInfos: false,
      });
    });
  }

  getState(_objState) {
    this.setState(_objState);
  }

  render() {
    return (
      <div>
        <Meta title="Mes informations" />
        {this.state.logout && <Redirect to="/" />}
        <h2 className="text-center my-2">
					Mes informations

        </h2>
        {(this.state.user)
          ? (
            <div>
              <div className="row">
                <div className="col-lg-6 col-sm-12">
                  <div className="newcard">
                    {(!this.state.editInfos)
                      ? (
                    <div>
              <h3 className="mb-2"><small>Informations générales</small></h3>
              <strong>Nom :</strong>
              {' '}
              {this.state.user.name}
              <br />
              <strong>Prénom :</strong>
              {' '}
              {this.state.user.firstname}
              <br />
              <strong>Numéro de téléphone :</strong>
              {' '}
              {this.state.phone}
              <br />
              <strong>Email :</strong>
              {' '}
              {this.state.email}
              <div className="text-right mt-2">
                  <Button primary onClick={() => { this.setState({ editInfos: true }); }}>
                  <FontAwesome name="pencil" />
&nbsp;Editer ces informations
                </Button>
                </div>
            </div>
                      )
                      :										(
                    <form onSubmit={this.changeInfos.bind(this)}>
              <div className="form-group">
                  <label>Numéro de téléphone</label>
                  <Input type="tel" name="phone" onChange={handleChange.bind(this)} value={this.state.phone} placeholder="Numéro de téléphone" />
                </div>
              <div className="form-group">
                  <label>Email</label>
                  <Input type="email" name="email" onChange={handleChange.bind(this)} value={this.state.email} placeholder="Email" />
                </div>
              <div className="form-group text-center">
                  <Button>Enregistrer</Button>
                </div>
            </form>
                      )}
                  </div>
                  <div className="newcard">
                    <h3 className="mb-2"><small>Adresse de facturation</small></h3>
                    <Address data={this.state.billing_address} />
                  </div>
                </div>
                <div className="col-lg-6 col-sm-12">
                  <div className="newcard">
                    <h3 className="mb-2"><small>Informations de livraison</small></h3>
                    <Address data={this.state.delivery_address} />
                  </div>
                </div>
              </div>
            </div>
          )
				  : <Loading />}
      </div>
    );
  }
});
