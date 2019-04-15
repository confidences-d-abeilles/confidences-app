import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import request from '../../services/Net';
import Loading from './Loading';
import { withNotification } from '../../services/withNotification';
import ReactPixel from 'react-facebook-pixel';

const Pending = () => (
  <Fragment>
    <Loading />
    <p style={{ textAlign: 'center' }}>Veuillez patienter pendant la validation de votre paiement...</p>
  </Fragment>
);

const Error = () => (
  <p style={{ textAlign: 'center' }}>Le paiement a échoué. <Link to="/account">Cliquez-ici</Link> pour retourner à votre espace. Vous pourrez réessayer a tout moment</p>
);

class PayChecker extends PureComponent {
  state = {
    status: 1,
  };

  componentDidMount() {
    this.ticker = setInterval(this.checkStatus, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.ticker);
  }

  checkStatus = () => {
    const { bundleId, notification } = this.props;
    request({
      url: `/bundle/${bundleId}`,
      method: 'get',
    }, notification).then(({ state, price }) => {
      this.setState({ status: parseInt(state, 10), price });
    });
  };

  render() {
    const { status, price } = this.state;
    if (status === 2 && price) {
      ReactPixel.track('Purchase', {
        value: price,
        currency: 'EUR',
      });
    }
    const { children } = this.props;
    return (
      <div>
        {status === 2 && children}
        {status === 1 && <Pending />}
        {status === 0 && <Error />}
      </div>
    );
  }
}

export default withNotification(PayChecker);
