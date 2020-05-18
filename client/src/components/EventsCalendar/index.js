import React, { Component } from 'react';
import _ from 'lodash';
import {
  Jumbotron,
  Table,
} from 'react-bootstrap';
import { formatDate } from '../../helpers/generalFunctions';
import './style.scss';

export class EventsCalendar extends Component {
  componentDidMount() {
    const { eventActions } = this.props;

    eventActions.queryEvents();
  }

  render() {
    const { eventsList, userId } = this.props;

    const filteredList = [];

    for (let index = 0; index < eventsList.length; index++) {
      const { participants } = eventsList[index];

      if (_.indexOf(participants, userId) !== -1) {
        filteredList.push(eventsList[index]);
      }
    }

    const eventsContent = !_.isEmpty(filteredList) ? filteredList.map((event, index) => {
      const { title, date, place, description, time } = event;

      return (
        <div className='event-item' key={index}>
          <p>Подія номер {index + 1}</p>
          <Table>
            <tbody>
              <tr>
                <td className='items'>Назва</td>
                <td>{title}</td>
              </tr>
              <tr>
                <td className='items'>Дата</td>
                <td>{formatDate(date)}, {time}</td>
              </tr>
              <tr>
                <td className='items'>Місце проведення</td>
                <td>{place}</td>
              </tr>
              <tr>
                <td className='items'>Опис</td>
                <td>{description}</td>
              </tr>
            </tbody>
          </Table>
        </div>
      );
    })
      : <div>У вас немає подій</div>;

    return (
      <div className='events-calendar'>
        <Jumbotron className='card'>
          {eventsContent}
        </Jumbotron>
      </div>
    );
  }
}
