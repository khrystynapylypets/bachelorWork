import React from 'react';
import {
  Modal,
  Container,
  Row,
  Col,
  Form,
} from 'react-bootstrap';

export const ScheduleForm = ({ onHandleSubmit, show, onHandleChangeDegree, onHandleChangeForm, onHandleChangeCoef, onHandleShow, onHandleClose }) => (
  <div >
    {/* кнопка до кабінету завідувача */}
    <button
      type='submit'
      className='btn btn-primary'
      onClick={onHandleShow}
    >
      Створити графік
    </button>

    <Modal 
      centered 
      show={show}
      onHide={onHandleClose}
    >
      <Form onSubmit={onHandleSubmit}>
        <Container>
          <Modal.Header closeButton className='form-modal-header'>
            <Modal.Title>Введіть необхідні дані</Modal.Title>
          </Modal.Header>
          <Row>
            <Col md={12}>
              <Form.Group controlId='degree'>
                <Form.Label>Освітній ступінь:</Form.Label>
                <Form.Control as='select' onChange={onHandleChangeDegree}>
                  <option>Бакалавр</option>
                  <option>Магістр</option>
                  {/* <option>Доктор філософії</option> */}
                  {/* <option>Доктор наук</option> */}
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId='form'>
                <Form.Label>Форма навчання:</Form.Label>
                <Form.Control
                  as='select'
                  className='form-control'
                  onChange={onHandleChangeForm}
                >
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
                <input
                  type='number'
                  id='quantity'
                  placeholder='Вкажіть число'
                  defaultValue='30' name='quantity'
                  required
                  min='1'
                  className='form-control'
                  onChange={onHandleChangeCoef}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={12}>
              <Form.Group controlId='button'>
                <button
                  type='submit'
                  className='btn btn-primary btn-block'
                  onClick={onHandleClose}
                >
                  Підтвердити
                </button>
              </Form.Group>
            </Col>
          </Row>
        </Container>
      </Form>
    </Modal>
  </div>
);
