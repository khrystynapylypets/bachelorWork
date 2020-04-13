import React from 'react'
import {
    Modal,
    Container,
    Row,
    Col,
    Form
} from 'react-bootstrap'



export const ScheduleForm = ({ handleSubmit, show, handleChangeDegree, handleChangeForm, handleChangeCoef, handleShow, handleClose }) => (
    <div >
        {/* кнопка до кабінету завідувача */}
        <button className="btn btn-primary" onClick={handleShow}>
            Створити графік
        </button>

        <Modal centered show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
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
                                <Form.Control as="select" className='form-control' onChange={handleChangeForm}>
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
                                <input type="number" id="quantity" placeholder='Вкажіть число' defaultValue="30" name="quantity" required min="1" className='form-control' onChange={handleChangeCoef}/>
                            </Form.Group>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Form.Group controlId='button'>
                                <button type="submit" className="btn btn-primary btn-block" disabled="" onClick={handleClose}>
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
