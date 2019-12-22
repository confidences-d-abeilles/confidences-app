import React, { Component } from 'react';

import request from '../../../../../services/Net';
import Loading from '../../../../utils/Loading';
import FileUpload from '../../../../utils/FileUpload';
import { withNotification } from '../../../../../services/withNotification';
import { Button } from '@cda/button';

export default withNotification(class Bills extends Component {
  state = {
    bills: null,
    loading: true,
  };

  componentDidMount() {
    this.get();
  }

  get = () => {
    const { notification } = this.props;
    this.setState({ loading: true });
    request({
      url: `/bill/bundle/${this.props.bundleId}`,
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        bills: res,
        loading: false,
      });
    });
  }

  uploadFile = () => {
    const { notification } = this.props;
    this.setState({
      loading: true,
    });
    const data = new FormData();
    if (document.getElementById('billDoc').files[0]) {
      data.append('file', document.getElementById('billDoc').files[0]);
    } else {
      this.setState({ loading: false });
    }
    request({
      url: `/bill/${this.state.bills.id}`,
      method: 'put',
      data,
    }, notification).then(() => {
      this.setState({ loading: false });
      this.get();
    });
  };

  render() {
    const { bills, loading } = this.state;
    return (
      <div className="newcard">
        <h4>Facture</h4>
        <div className="card-body p-2">
          {(bills && !loading)
            ? (
              <div className="card-text">
                <strong>Numéro</strong>
                {` : ${bills.number}`}
                <br />
                <strong>Montant</strong>
                {` : ${bills.price} €`}
                <br />
                <strong>Document&nbsp;</strong>
                {bills.file ? (
                  <span>
                    <a href={`${process.env.REACT_APP_CONTENT_DOMAIN}/bills/${bills.file}`} target="_blank" rel="noopener noreferrer">Fichier actuel</a>
                    <br />
                  </span>
                ) : 'Aucun document pour cette facturation'}
                <FileUpload identifier="billDoc" label="Uploader un fichier" />
                <div className="text-center">
                  <Button onClick={this.uploadFile}>Envoyer le fichier</Button>
                </div>
              </div>
            )
            : <div className="card-text"><Loading /></div>
          }
        </div>
      </div>
    );
  }
});
