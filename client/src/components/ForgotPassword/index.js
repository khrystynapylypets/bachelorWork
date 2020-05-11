import React from 'react';
import { Field } from 'redux-form';
import { Input } from '../CommonFields/Input';
import { PublicLayout } from '../PublicLayout';
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap';

export const ForgotPassword = ({ handleSubmit, invalid, submitting, onSubmit }) => (
  <PublicLayout>
    <form onSubmit={handleSubmit(onSubmit)} className='login-form form'>
      <Container>
        <h3 className='title'>Відновити пароль</h3>
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
        </Row>
      </Container>
    </form>
  </PublicLayout>
);

