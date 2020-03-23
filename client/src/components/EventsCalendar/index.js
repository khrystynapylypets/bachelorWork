import React, { Component } from 'react'
import {
  Jumbotron,
} from 'react-bootstrap'
import './style.scss'

export class EventsCalendar extends Component {

  render() {
    return (
        <div className='events-calendar'>
          <Jumbotron className='card'>
            events
          </Jumbotron>
        </div>
    )
  }
}