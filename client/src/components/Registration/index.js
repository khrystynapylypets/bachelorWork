import React from 'react'
import { Field } from 'redux-form'
import { Input } from '../CommonFields/Input'
import { Password } from '../CommonFields/Password'
import { PublicLayout } from '../PublicLayout'
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Spinner,
} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './style.scss'

export const Registration = ({ handleSubmit, onSubmit, invalid, submitting }) => (
    <PublicLayout>
        <form onSubmit={handleSubmit(onSubmit)} className='registration-form form'>
            <Container>
                <h3 className='title'>Зареєструватись</h3>
                <Row>
                    <Col md={{ offset: 4 }} className='login-block'>
                        Вже маєте акаунт?
                        <Link to='/login'> Авторизуватись</Link>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Form.Group controlId='firstName'>
                            <Form.Label>Ім&#39;я<sup>*</sup></Form.Label>
                            <Field
                                name='firstName'
                                component={Input}
                                type='text'
                                placeholder="Введіть ваше ім'я"
                                id='firstName'
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId='secondName'>
                            <Form.Label>По батькові<sup>*</sup></Form.Label>
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
                            <Form.Label>Прізвище<sup>*</sup></Form.Label>
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
                            <Form.Label>Електронна пошта<sup>*</sup></Form.Label>
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
                    <Col md={12}>
                        <Form.Group controlId='dateWork'>
                            <Form.Label>Дата початку робочої діяльності<sup>*</sup></Form.Label>
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
                            <Form.Label>Вчене звання<sup>*</sup></Form.Label>
                            <Field
                                name='academicStatus'
                                component={Input}
                                type='text'
                                placeholder='Введіть вчене звання'
                                id='academicStatus'
                            />
                        </Form.Group>
                    </Col>
                    <Col md={12}>
                        <Form.Group controlId='dateBirth'>
                            <Form.Label>Дата народження<sup>*</sup></Form.Label>
                            <Field
                                name='dateBirth'
                                component={Input}
                                type='date'
                                placeholder='Введіть дату народження'
                                id='dateBirth'
                            />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Button
                            variant='primary'
                            disabled={submitting || invalid}
                            type='submit'
                            block
                        >
                            {submitting ? <Spinner animation='border' variant='primary'/> : 'Відправити'}
                        </Button>
                    </Col>
                </Row>
            </Container>
        </form>
    </PublicLayout>
)
