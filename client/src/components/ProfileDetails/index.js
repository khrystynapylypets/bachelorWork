import React, { Component } from 'react'
import {
  Jumbotron,
  Row,
  Col,
  Image,
} from 'react-bootstrap'
import './style.scss'

export class ProfileDetails extends Component {

  render() {

    const {userData} = this.props
    const fullName = `${userData.firstName} ${userData.secondName} ${userData.lastName}`

    return (
          <Row className='profile-details'>
            <div className='details'>
              <div className='info'>
                <Image src='https://iupac.org/wp-content/uploads/2018/05/default-avatar.png' roundedCircle width='180' height='180'/>
                <h2>
                  {fullName}
                </h2>
              </div>
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