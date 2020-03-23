import React, { Component } from 'react'
import {
    Modal,
    Container,
    Row,
    Col,
    Button,
    Form,
    Spinner,
    DropdownButton,
    Dropdown,
    InputGroup,
    FormControl
} from 'react-bootstrap'



export const ScheduleForm = ({ handleReset, handleSubmit, show, handleChangeDegree, handleChangeForm, handleChangeCoef, handleShow, handleClose }) => (
    <div >
        {/* кнопка до кабінету завідувача */}
        <button class="btn btn-primary" onClick={handleShow}>
            Створити графік
        </button>

        <Modal centered show={show} onHide={handleClose}>
            <Form action="/create-schedule">
                <Container>
                    <Modal.Header closeButton id='modal-header'>
                        <Modal.Title>Введіть необхідні дані</Modal.Title>
                    </Modal.Header>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId='degree'>
                                <Form.Label>Освітній ступінь:</Form.Label>
                                <Form.Control as="select" onChange={handleChangeDegree}>
                                    <option>Бакалавр</option>
                                    <option>Магістр</option>
                                    <option>Доктор філософії</option>
                                    <option>Доктор наук</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId='form'>
                                <Form.Label>Форма навчання:</Form.Label>
                                <Form.Control as="select" class='form-control' onChange={handleChangeForm}>
                                    <option>Денна</option>
                                    <option>Заочна</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId='coef'>
                                <Form.Label className='right'>Сума коефіцієнтів:</Form.Label>
                                <input type="number" id="quantity" placeholder='Вкажіть число' name="quantity" min="1" value="30" class='form-control' onChange={handleChangeCoef}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId='button'>
                                <button type="submit" class="btn btn-primary btn-block" disabled="" onClick={handleClose}>
                                    Підтвердити
                                        </button>
                            </Form.Group>
                        </Col>
                    </Row>
                </Container>
            </Form>
        </Modal>
    </div>
)
