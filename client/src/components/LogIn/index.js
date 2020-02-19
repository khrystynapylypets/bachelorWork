import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Input } from '../Input'
import { PublicLayout } from '../PublicLayout'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
} from 'react-bootstrap'
import './style.scss'

export class LogIn extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <PublicLayout>
        <Form onSubmit={handleSubmit} className='login-form form'>
          <Container>
            <h3 className='title'>Авторизуватись</h3>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className='form-label'>Електронна пошта</Form.Label>
                  <Field
                    name='email'
                    component={Input}
                    type='email'
                    placeholder='Введіть вашу електронну пошту'
                    id='email'
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='password'>
                  <Form.Label>Пароль</Form.Label>
                  <Field
                    name='password'
                    component={Input}
                    type='password'
                    placeholder='Введіть ваш пароль'
                    id='password'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant='primary' block>Відправити</Button>
              </Col>
              <Col md={12}>
                <p className='forgot-password'>
                  Forgot <a href='#/'>password?</a>
                </p>
              </Col>
            </Row>
          </Container>
        </Form>
      </PublicLayout>
    )
  }
}

