import React, { Component } from 'react'
import { PrivateLayout } from '../PrivateLayout'
import { ProfileDetails } from '../ProfileDetails'
import { EventsCalendar } from '../EventsCalendar'
import {
  Row,
  Col,
} from 'react-bootstrap'
import './style.scss'

export class ProfilePage extends Component {


  render() {

    const {user} = this.props

    return (
        <PrivateLayout>
          <Row>
            <Col md={8}>
              <ProfileDetails userData={user} />
            </Col>
            <Col md={4} className='events-column'>
              <EventsCalendar />
            </Col>
          </Row>
        </PrivateLayout>
    )
  }
}