import React, { Component } from 'react';
import request from '../../../../services/Net';
import { handleChange } from '../../../../services/FormService';
import { Button } from '../../../utils/Button';
import { withNotification } from '../../../../services/withNotification';


export default withNotification(class ContributorManageInfosBank extends Component {
  state = {
    iban: '',
    name: '',
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: '/user/me',
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        iban: res.iban,
        name: res.account_holder,
      });
    });
  }

  updateBank(e) {
    e.preventDefault();
    const { notification } = this.props;
    const { iban, name } = this.state;
    request({
      url: '/user',
      method: 'put',
      data: {
        iban,
        account_holder: name,
      },
    }, notification);
  }

  render() {
    return (
      <div className="row my-4">
        <div className="col-6">
          <form onSubmit={this.updateBank.bind(this)}>
            <div className="form-group">
              <input type="text" name="iban" onChange={handleChange.bind(this)} className="form-control" value={this.state.iban} placeholder="IBAN" />
            </div>
            <div className="form-group">
              <input type="text" name="name" onChange={handleChange.bind(this)} className="form-control" value={this.state.name} placeholder="Nom du titulaire du compte" />
            </div>
            <Button>Mettre à jour</Button>
          </form>
        </div>
      </div>
    );
  }
});
