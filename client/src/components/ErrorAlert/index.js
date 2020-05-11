import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './style.scss';

export class ErrorAlert extends Component {
  render() {
    const { description } = this.props;

    return (
      <Alert variant='danger' className='error-message'>
        <Alert.Heading>Something goes wrong</Alert.Heading>
        <p>
          {description}
        </p>
      </Alert>
    );
  }
}
