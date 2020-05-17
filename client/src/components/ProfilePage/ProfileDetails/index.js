import React, { Component } from 'react';
import {
  Jumbotron,
  Row,
  Col,
  Image,
  Spinner,
  Table,
  OverlayTrigger,
  Popover,
  ButtonGroup,
  Button,
} from 'react-bootstrap';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import './style.scss';

export class ProfileDetails extends Component {
  componentDidMount() {
    const { userId, userActions } = this.props;

    userActions.getUserData(userId);
  }

  render() {
    const {
      loading, email, firstName, secondName, lastName, dateWork, academicStatus, dateBirth, phoneNumber, isAdmin,
      canCreateSchedule,
    } = this.props;

    if (loading) {
      return <Spinner animation='border' variant='primary' />;
    }

    const emailPopover = (
      <Popover id='popover-email'>
        <Popover.Title as='h3'>Електронна пошта</Popover.Title>
        <Popover.Content>
          {email || 'Електронна пошта не вказана'}
        </Popover.Content>
      </Popover>
    );

    const phonePopover = (
      <Popover id='popover-phone'>
        <Popover.Title as='h3'>Номер телефону</Popover.Title>
        <Popover.Content>
          {phoneNumber || 'Номер телефону не вказаний'}
        </Popover.Content>
      </Popover>
    );

    const createSchedule = (
        <ButtonGroup>
          <Button>Створити розклад</Button>
        </ButtonGroup>
    );

    const createUsers = (
      <ButtonGroup>
        <Button>Створити нового користувача</Button>
      </ButtonGroup>
    );

    return (
      <Row className='profile-details'>
        <div className='general'>
          <div className='info'>
            <Row>
              <Col md={12}>
                <div className='avatar'>
                  <Image
                    src='https://iupac.org/wp-content/uploads/2018/05/default-avatar.png'
                    roundedCircle
                    width='180' height='180'
                  />
                </div>
              </Col>
              <Col md={12}>
                <h3>
                  {`${firstName} ${secondName} ${lastName}`}
                </h3>
              </Col>
              <Col md={12}>
                <p className='academicStatus'>
                  {academicStatus}
                </p>
              </Col>
              <Col md={12} className='info-buttons'>
                <OverlayTrigger
                  trigger='click' placement='bottom'
                  overlay={emailPopover}
                >
                  <div className='circle-button'>
                    <AiOutlineMail
                      className='icon' color='#ffffff'
                      size='1.5em'
                    />
                  </div>
                </OverlayTrigger>
                <OverlayTrigger
                  trigger='click' placement='bottom'
                  overlay={phonePopover}
                >
                  <div className='circle-button'>
                    <AiOutlinePhone
                      className='icon' color='#ffffff'
                      size='1.5em'
                    />
                  </div>
                </OverlayTrigger>
              </Col>
              <Col className='addit-functions' md={12}>
                {canCreateSchedule && createSchedule}
                {isAdmin && createUsers}
              </Col>
            </Row>
          </div>
        </div>
        <Col className='details'>
          <Jumbotron className='card'>
            <h3>Детальна інформація</h3>
            <Table>
              <tbody>
                <tr>
                  <td className='items'>Ім&apos;я</td>
                  <td>{firstName}</td>
                </tr>
                <tr>
                  <td className='items'>Прізвище</td>
                  <td>{lastName}</td>
                </tr>
                <tr>
                  <td className='items'>По батькові</td>
                  <td>{secondName}</td>
                </tr>
                <tr>
                  <td className='items'>Дата народження</td>
                  <td>{dateBirth}</td>
                </tr>
                <tr>
                  <td className='items'>Дата початку роботи</td>
                  <td>{dateWork}</td>
                </tr>
                <tr>
                  <td className='items'>Академічний статус</td>
                  <td>{academicStatus}</td>
                </tr>
              </tbody>
            </Table>
          </Jumbotron>
        </Col>
      </Row>
    );
  }
}
