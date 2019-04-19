import React, { Component } from 'react';
import * as Sentry from '@sentry/browser';
import styled from '@emotion/styled';

const Background = styled('div')({
  width: '100vw',
  height: '100vh',
});

const Centered = styled('div')({
  position: 'absolute',
  left: '50%',
  top: '50%',
  textAlign: 'center',
  transform: 'translate(-50%, -50%)',
});

const Error = styled('p')({
  color: '#E49C00',
  fontSize: '2rem',
  fontWeight: 'bolder',
});

const FeedBackLink = styled('a')({
  color: 'white',
  cursor: 'pointer',
  textDecoration: 'underline !important',
});

export default class ErrorHandler extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error });
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });
      Sentry.captureException(error);
    });
  }

  render() {
    const { error } = this.state;
    const { children } = this.props;
    if (error) {
      return (
        <Background>
          <Centered>
            <Error>Une erreur est survenue <span role="img" aria-label="sad">😓</span>... Nous nous excusons de la gêne occasionnée</Error>
            <FeedBackLink onClick={() => Sentry.showReportDialog()}>
              Cliquez ici pour nous en dire plus sur les circonstances et nous aider à améliorer notre service
            </FeedBackLink>
          </Centered>
        </Background>
      );
    }
    return children;
  }
}
