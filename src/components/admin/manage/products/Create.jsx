import React, { Component } from 'react';
import { handleChange } from '../../../../services/FormService';
import request from '../../../../services/Net';

import { withNotification } from '../../../../services/withNotification';

export default withNotification(class Create extends Component {
  state = {
    designation: '',
    type: '',
    price: '',
    duty: '',
  };

  create(e) {
    const { notification } = this.props;
    e.preventDefault();
    request({
      url: '/product',
      method: 'post',
      data: {
        designation: this.state.designation,
        type: this.state.type,
        price: this.state.price,
        duty: this.state.duty
      }
    }, notification).then((res) => {
      this.setState({
        designation: '',
        type: '',
        price: '',
        duty: '',
      });
      this.props.refresh();
    });
  }

  render() {
    return (
      <form onSubmit={this.create.bind(this)}>
        <div className="row">
          <div className="col-lg-6">
            <div className="form-group">
              <input
                type="text" name="designation" className="form-control"
                placeholder="Designation du produit" value={this.state.designation}
                onChange={handleChange.bind(this)} />
            </div>
            <div className="form-group">
              <select name="type" onChange={handleChange.bind(this)} value={this.state.type}
                className="form-control">
                <option value="">Choisissez un type de produit</option>
                <option value="10">Parrainage entreprise</option>
                <option value="11">Produit supplémentaire entreprise</option>
                <option value="20">Parrainage particulier</option>
                <option value="21">Produit supplementaire particulier</option>
              </select>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">€ (HT)</div>
                <input type="number" name="price" min="0" step="0.01"
                  className="form-control" placeholder="Prix HT du produit"
                  value={this.state.price} onChange={
                    (e) => {
                      this.setState({
                        price: e.target.value,
                        ttc : (parseFloat(e.target.value, 10)+(parseFloat(this.state.duty, 10)/100)*parseFloat(e.target.value, 10)).toFixed(2)
                      })
                    }} />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">%</div>
                <input type="number" step="0.01" name="duty" min="0"
                  className="form-control" placeholder="TVA" value={this.state.duty}
                  onChange={
                    (e) => {
                      this.setState({
                        duty: e.target.value,
                      });
                      if (this.state.price) {
                        this.setState({
                          ttc : (this.state.price)?(parseFloat(this.state.price, 10)+(parseFloat(e.target.value, 10)/100)*parseFloat(this.state.price, 10)).toFixed(2):''
                        });
                      } else {
                        this.setState({
                          price: (this.state.ttc)?(parseFloat(this.state.ttc, 10)/ (parseFloat(e.target.value, 10)+100)*100).toFixed(2):'',
                        });
                      }
                    }} />
              </div>
            </div>
            <div className="form-group">
              <div className="input-group">
                <div className="input-group-addon">€ (TTC)</div>
                <input type="number" name="ttc" min="0" step="0.01"
                  className="form-control" placeholder="Prix TTC du produit"
                  value={this.state.ttc} onChange={
                    (e) => {
                      this.setState({
                        ttc: e.target.value,
                        price : (e.target.value / (parseFloat(this.state.duty)+100) * 100).toFixed(2)
                      })
                    }} />
              </div>
            </div>
            <div className="form-group">
              <button className="btn btn-primary">Créer le produit</button>
            </div>
          </div>
        </div>
      </form>
    )
  }
});
