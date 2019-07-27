import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import fileDownload from 'js-file-download';

import Loading from '../../../utils/Loading';
import request, { client } from '../../../../services/Net';
import Payment from './tiles/Payment';
import Bills from './tiles/Bills';
import Parrains from './tiles/Parrains';
import Label from './tiles/Label';
import Bundle from '../users/tiles/Bundle';
import { withNotification } from '../../../../services/withNotification';
import Price from './tiles/Price';

export default withNotification(class AdminManageBundleId extends Component {
  state = {
    bundle: null,
    parrain: null,
    loading: true,
  };

  componentDidMount() {
    const { notification } = this.props;
    request({
      url: `/bundle/${this.props.match.params.id}`,
      method: 'get',
    }, notification).then((res) => {
      this.setState({
        bundle: { ...res, state: res.state.toString() },
        owner: res.owner,
      });

      request({
        method: 'get',
        url: `/user/${res.owner.id}`,
      }, notification).then((res2) => {
        this.setState({
          userLabelFilename: res2.label,
          loading: false,
        });
      });
    });
  }

  changeState = (event) => {
    this.setState({
      bundle: { ...this.state.bundle, state: parseInt(event.target.value, 10) },
    });
  }

  submitState = () => {
    const { notification } = this.props;
    request({
      url: `/bundle/${this.state.bundle.id}`,
      method: 'put',
      data: {
        state: this.state.bundle.state,
      },
    }, notification).then((res) => {

    });
  }

  downloadLabel = async () => {
    const { notification } = this.props;
    try {
      const response = await client({
        url: `/bundle/${this.state.bundle.id}/label`,
        method: 'GET',
        responseType: 'arraybuffer',
      });
      let retrievedFileName;
      try {
        const regexp = /filename="(.*)"/gi;
        retrievedFileName = regexp.exec(response.headers['content-disposition'])[1];
      } catch (err) {
        console.log('erreur filename');
        retrievedFileName = `${this.state.bundle.owner.name}.pdf`;
      }
      fileDownload(response.data, retrievedFileName);
    } catch (error) {
      console.error(error);
      notification.addNotification({ message: 'download fail', level: 'error' });
    }
  }

  render() {
    return (
      <div>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/admin/manage">Panel d'Administration</Link></li>
          <li className="breadcrumb-item"><Link to="/admin/manage/bundle">Parrainages</Link></li>
          <li className="breadcrumb-item active">
Parrainage
            {(this.state.bundle) ? ` de ${this.state.bundle.owner.firstname} ${this.state.bundle.owner.name}` : ''}
          </li>
        </ol>
        {(this.state.bundle)
          ? (
            <div className="row">
              <div className="col-lg-6">
                <Price bundleId={this.state.bundle.id} price={this.state.bundle.price} />
                <Payment
                  state={this.state.bundle.state.toString()}
                  changeState={this.changeState}
                  submitState={this.submitState}
                />
                <Bills bundleId={this.state.bundle.id} />
                <Label
                  labelFilename={this.state.userLabelFilename}
                  downloadLabel={this.downloadLabel}
                  loading={this.state.loading}
                  userId={this.state.bundle.owner.id}
                  mention={this.state.bundle.owner.label_mention}
                  model={this.state.bundle.owner.label_model}
                />
              </div>
              <div className="col-lg-6">
                <Bundle bundle={this.state.bundle} />
                {this.state.owner.user_type === 2 ? <Parrains parrain={this.state.owner} bundleLabel={this.state.bundle.label} />
                  : null}
              </div>
            </div>
          )
          : <Loading />}
      </div>
    );
  }
});
