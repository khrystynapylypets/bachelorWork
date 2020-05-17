import React from 'react';
import LogOut from '../../containers/LogOutContainer';
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
} from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './style.scss';

export const PrivateLayout = ({ children }) => (
  <Container fluid className='private-layout'>
    <Row>
      <Col md={12} className='header'>
        <Navbar>
          <Nav className='navigation'>
            <NavLink activeClassName='is-active' to='/home'>Home</NavLink>
            <NavLink activeClassName='is-active' to='/profile' exact>Мій профіль</NavLink>
            <NavLink activeClassName='is-active' to='/list'>Список викладачів</NavLink>
          </Nav>
          <LogOut />
        </Navbar>
      </Col>
      <Col md={12} className='main'>
        {children}
      </Col>
    </Row>
  </Container>
);
