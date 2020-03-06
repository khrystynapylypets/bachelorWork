import React, { Component } from 'react'
import { Field } from 'redux-form'
import { Input } from '../../containers/CommonFields/Input'
import { Password } from '../../containers/CommonFields/Password'
import { PublicLayout } from '../PublicLayout'
import { Link } from 'react-router-dom'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap'
import './style.scss'

export class LogIn extends Component {
  render() {
    const { handleSubmit, invalid, submitting, onSubmit } = this.props

    return (
      <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className='login-form form'>
          <Container>
            <h3 className='title'>Авторизуватись</h3>
            <Row>
              <Col md={12}>
                <Form.Group>
                  <Form.Label className='form-label'>Електронна пошта<sup>*</sup></Form.Label>
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
                  <Form.Label>Пароль<sup>*</sup></Form.Label>
                  <Field
                    name='password'
                    component={Password}
                    type='password'
                    placeholder='Введіть ваш пароль'
                    id='password'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button
                  variant='primary'
                  block
                  disabled={invalid || submitting}
                  type='submit'
                >
                  {submitting ? <Spinner animation='border' variant='primary' /> : 'Відправити'}
                </Button>
              </Col>
              <Col md={12}>
                <p className='forgot-password'>
                  Forgot <Link to='/forgot-password'>password?</Link>
                </p>
              </Col>
            </Row>
          </Container>
        </form>
      </PublicLayout>
    )
  }
}

