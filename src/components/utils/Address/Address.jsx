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
    this.state = {
      edit: false,
      address: props.data,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.data) {
      this.setState({
        address: { ...nextProps.data, sexe_m: (nextProps.data.sexe_m) ? '1' : '0' },
      });
    } // pres operation
  }

  updateAddress = (event) => {
    this.setState({
      address: { ...this.state.address, [event.target.name]: event.target.value },
    });
  };

  submitAddress = (e) => {
    e.preventDefault();
    const { notification } = this.props;
    request({
      url: `/address/${this.state.address.id}`,
      method: 'PUT',
      data: this.state.address,
    }, notification).then(() => {
      this.setState({ edit: false });
    });
  };

  render() {
    return (
      <div>
        {(!this.state.edit)
          ? (
            <div>
              <ViewAddress data={this.state.address} />
              <div className="text-right mt-2">
                <Button onClick={() => { this.setState({ edit: true }); }}>
                  <FontAwesome name="pencil" />
              &nbsp;Editer cette adresse
                </Button>
              </div>
            </div>
          )
          : <EditAddress data={this.state.address} onChange={this.updateAddress} onSubmit={this.submitAddress} company={this.props.company} />}
      </div>
    );
  }
});
