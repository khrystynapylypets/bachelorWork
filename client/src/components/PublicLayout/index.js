import React from 'react';
import {
  Container,
  Row,
  Col,
} from 'react-bootstrap';
import './style.scss';
import nulpLogo from './assets/nulp_logo.jpg';

export const PublicLayout = ({ children }) => (
  <Container className='public-layout'>
    <Row>
      <Col lg={5} className='left'>
        {children}
      </Col>
      <Col lg={7} className='right'>
        <img
          src={nulpLogo}
          alt='NULP logo'
          width='300px'
          height='300px'
        />
        <div className='gradient' />
      </Col>
    </Row>
  </Container>
);
