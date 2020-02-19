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

export class Registration extends Component {
  render() {
    const { handleSubmit } = this.props

    return (
      <PublicLayout>
        <Form onSubmit={handleSubmit} className='registration-form form'>
          <Container>
            <h3 className='title'>Зареєструватись</h3>
            <Row>
              <Col md={12}>
                <Form.Group controlId='fistName'>
                  <Form.Label>Ім&#39;я</Form.Label>
                  <Field
                    name='fistName'
                    component={Input}
                    type='text'
                    placeholder="Введіть ваше ім'я"
                    id='fistName'
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='secondName'>
                  <Form.Label>По батькові</Form.Label>
                  <Field
                    name='secondName'
                    component={Input}
                    type='text'
                    placeholder='Введіть ваше по батькові'
                    id='secondName'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId='lastName'>
                  <Form.Label>Прізвище</Form.Label>
                  <Field
                    name='lastName'
                    component={Input}
                    type='text'
                    placeholder='Введіть ваше прізвище'
                    id='lastName'
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='email'>
                  <Form.Label>Електронна пошта</Form.Label>
                  <Field
                    name='email'
                    component={Input}
                    type='email'
                    placeholder='Введіть електронну пошту'
                    id='email'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId='dateBirth'>
                  <Form.Label>Дата народження</Form.Label>
                  <Field
                    name='dateBirth'
                    component={Input}
                    type='date'
                    placeholder='Введіть дату народження'
                    id='dateBirth'
                  />
                </Form.Group>
              </Col>
              <Col md={12}>
                <Form.Group controlId='dateWork'>
                  <Form.Label>Дата початку робочої діяльності</Form.Label>
                  <Field
                    name='dateWork'
                    component={Input}
                    type='date'
                    placeholder='Введіть дату початку робочої діяльності'
                    id='dateWork'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Form.Group controlId='academicStatus'>
                  <Form.Label>Вчене звання</Form.Label>
                  <Field
                    name='academicStatus'
                    component={Input}
                    type='text'
                    placeholder='Введіть вчене звання'
                    id='academicStatus'
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <Button variant='primary' block>Відправити</Button>
              </Col>
            </Row>
          </Container>
        </Form>
      </PublicLayout>
    )
  }
}
