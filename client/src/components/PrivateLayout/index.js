import React from 'react'
import LogOut from '../../containers/LogOutContainer'
import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  FormControl,
  Button,
  Form,
} from 'react-bootstrap'
import './style.scss'

export const PrivateLayout = ({ children }) => (
    <Container fluid className='private-layout'>
      <Row>
        <Col md={12} className='header'>
          <Navbar>
            <Form inline className='search-form'>
              <FormControl type='text' placeholder='Search' className='search'/>
              <Button variant='outline-primary'>Пошук</Button>
            </Form>
            <Nav>
              <Nav.Link href="#home">Home</Nav.Link>
              <LogOut />
            </Nav>
          </Navbar>
        </Col>
        <Col md={12} className='main'>
          {children}
        </Col>
      </Row>
    </Container>
)
