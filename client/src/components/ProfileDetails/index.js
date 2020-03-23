import React, { Component } from 'react'
import {
  Jumbotron,
  Row,
  Col,
} from 'react-bootstrap'
import './style.scss'

export class ProfileDetails extends Component {

  render() {
    return (
          <Row className='profile-details'>
            <div className='details'>
              main
            </div>
            <Col className='general'>
              <Jumbotron className='card'>
                details
              </Jumbotron>
            </Col>
          </Row>
    )
  }
}