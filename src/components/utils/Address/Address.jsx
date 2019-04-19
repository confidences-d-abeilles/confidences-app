import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import EditAddress from './EditAddress';
import ViewAddress from './ViewAddress';
import request from '../../../services/Net';
import { Button } from '../Button';
import { withNotification } from '../../../services/withNotification';

export default withNotification(class Address extends Component {
  constructor(props) {
    super(props);
    const { data } = props;
    this.state = {
      edit: false,
      address: data,
    };
  }

  componentWillReceiveProps({ data }) {
    if (data) {
      this.setState({
        address: { ...data, sexe_m: (data.sexe_m) ? '1' : '0' },
      });
    }
  }

  updateAddress = (event) => {
    const { address } = this.state;
    this.setState({
      address: { ...address, [event.target.name]: event.target.value },
    });
  };

  submitAddress = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    const { address } = this.state;
    request({
      url: `/address/${address.id}`,
      method: 'PUT',
      data: address,
    }, notification).then(() => {
      this.setState({ edit: false });
    });
  };

  render() {
    const { edit, address } = this.state;
    const { company } = this.props;
    return (
      <div>
        {(!edit)
          ? (
            <div>
              <ViewAddress data={address} />
              <div className="text-right mt-2">
                <Button onClick={() => { this.setState({ edit: true }); }} primary>
                  <FontAwesome name="pencil" />
              &nbsp;Editer cette adresse
                </Button>
              </div>
            </div>
          )
          : <EditAddress data={address} onChange={this.updateAddress} onSubmit={this.submitAddress} company={company} />}
      </div>
    );
  }
});
