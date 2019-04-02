import React, { PureComponent, Fragment } from 'react';
import { Link } from 'react-router-dom';
import request from '../../services/Net';
import Loading from './Loading';

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
    this.ticker.clearInterval();
  }

  checkStatus = () => {
    const { bundleId } = this.props;
    request({
      url: `/bundle/${bundleId}`,
      method: 'get',
    }, this.refs.notif).then(({ state }) => {
      this.setState({ status: parseInt(state, 10) });
    });
  };

  render() {
    const { status } = this.state;
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

export default PayChecker;
