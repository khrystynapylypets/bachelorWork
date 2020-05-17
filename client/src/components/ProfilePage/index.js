import React, { Component } from 'react';
import { PrivateLayout } from '../PrivateLayout';
import ProfileDetailsContainer from '../../containers/ProfileDetailsContainer';
import { EventsCalendar } from '../EventsCalendar';
import {
  Row,
  Col,
} from 'react-bootstrap';
import './style.scss';

export class ProfilePage extends Component {


  componentWillMount() {
    document.body.classList.add('profile');
  }

  componentDidMount() {
    document.body.classList.add('profile');
  }

  componentWillUnmount() {
    document.body.classList.remove('profile');
  }
  render() {
    const { userId } = this.props;

    return (
      <PrivateLayout>
        <Row>
          <Col md={8}>
            <ProfileDetailsContainer userId={userId} />
          </Col>
          <Col md={4} className='events-column'>
            <EventsCalendar />
          </Col>
        </Row>
      </PrivateLayout>
    );
  }
}
