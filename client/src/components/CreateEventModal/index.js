import React, { Component } from 'react';
import _ from 'lodash';
import {
  Modal,
  Button,
  Form,
} from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const dataIsValid = ({ title, description, place, participants, time }) => {
  return !( _.isEmpty(title) || _.isEmpty(description)
    || _.isEmpty(place) || _.isEmpty(participants)) || _.isEmpty(time);
};

export class CreateEventModal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      date: new Date(),
      title: '',
      place: '',
      description: '',
      participants: [],
      time: '',
      isAllProfessors: false,
    };
  }

  handleChangeTitle = (e) => {
    const title = e.target.value;

    this.setState({
      title,
    });
  };

  handleChangeTime = (e) => {
    const time = e.target.value;

    this.setState({
      time,
    });
  };

  handleChangeDate = (date) => {
    this.setState({
      date,
    });
  };

  handleChangeDescription = (e) => {
    const description = e.target.value;

    this.setState({
      description,
    });
  };

  handleChangePlace = (e) => {
    const place = e.target.value;

    this.setState({
      place,
    });
  };

  handleEventSave = () => {
    const { handleClose, eventActions, error, isCreating, currentUserId } = this.props;
    const { date, title, place, description, participants, time } = this.state;
    const eventData = {
      date,
      title,
      place,
      description,
      participants: [ ...participants, currentUserId ],
      time,
    };

    eventActions.createEvent(eventData);

    if (!isCreating && !error) {
      handleClose();
    }
  };

  handleAllProfessorsChange = (e) => {
    const isAllProfessors = e.target.checked;
    const { list } = this.props;

    const selectedIds = list.map((item) => item.id);

    this.setState({
      isAllProfessors,
      participants: selectedIds,
    });
  };

  handleParticipantsChange = (e) => {
    const options = e.target.options;

    let selectedOptions = [];

    for (let index = 0; index < options.length; index++) {
      if (options[index].selected) {
        selectedOptions.push(options[index].value);
      }
    }

    this.setState({
      participants: selectedOptions,
    });
  };

  render() {
    const { list, handleClose } = this.props;
    const { date, title, place, description, isAllProfessors, time } = this.state;

    const saveButtonEnable = dataIsValid(this.state);
    
    const listOfParticipants = !_.isEmpty(list) ? list.map((item) => {
      const { firstName, lastName, id } = item;
      const fullName = `${firstName} ${lastName}`;

      return <option value={id} key={id}>{fullName}</option>;
    }) : null;

    return (
      <Modal.Dialog>
        <Modal.Header>
          <Modal.Title>Створити подію</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group controlId='date'>
            <Form.Label>Дата</Form.Label>
            <Calendar
              onChange={this.handleChangeDate}
              value={date}
            />
          </Form.Group>
          <Form.Group controlId='time'>
            <Form.Label>Час проведення</Form.Label>
            <Form.Control
              type='text'
              placeholder='Введіть годину проведення'
              onChange={this.handleChangeTime}
              value={time}
            />
          </Form.Group>
          <Form.Group controlId='title'>
            <Form.Label>Назва події</Form.Label>
            <Form.Control
              type='text'
              placeholder='Введіть назву події'
              onChange={this.handleChangeTitle}
              value={title}
            />
          </Form.Group>
          <Form.Group controlId='place'>
            <Form.Label>Місце проведення</Form.Label>
            <Form.Control
              type='text'
              placeholder='Місце проведення'
              onChange={this.handleChangePlace}
              value={place}
            />
          </Form.Group>
          <Form.Group controlId='description'>
            <Form.Label>Опис</Form.Label>
            <Form.Control
              as='textarea'
              rows='5'
              onChange={this.handleChangeDescription}
              description={description}
            />
          </Form.Group>
          <Form.Group controlId='participants'>
            <Form.Label>Учасники</Form.Label>
            <Form.Check
              type='checkbox'
              label='Вибрати усіх викладачів'
              checked={isAllProfessors}
              onChange={this.handleAllProfessorsChange}
            />
            <Form.Control
              as='select'
              multiple
              disabled={isAllProfessors}
              onChange={this.handleParticipantsChange}
            >
              {listOfParticipants}
            </Form.Control>
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button
            variant='secondary'
            onClick={handleClose}
          >
            Close
          </Button>
          <Button
            disabled={!saveButtonEnable}
            onClick={this.handleEventSave}
          >
            Save changes
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    );
  }
}
