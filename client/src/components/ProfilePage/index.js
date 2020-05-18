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
    const { professorsActions } = this.props;

    professorsActions.queryProfessors();
    document.body.classList.add('profile');
  }

  componentWillUnmount() {
    document.body.classList.remove('profile');
  }
  render() {
    const { userId, eventsList, eventActions } = this.props;

    return (
      <PrivateLayout>
        <Row>
          <Col md={8}>
            <ProfileDetailsContainer userId={userId} />
          </Col>
          <Col md={4} className='events-column'>
            <EventsCalendar
              userId={userId}
              eventsList={eventsList}
              eventActions={eventActions}
            />
          </Col>
        </Row>
      </PrivateLayout>
    );
  }
}
