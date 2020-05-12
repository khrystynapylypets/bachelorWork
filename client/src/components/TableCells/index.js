import React, { Component } from 'react';
import './style.scss';
import {
  Button,
  OverlayTrigger,
  Popover,
  Form,
} from 'react-bootstrap';


export class SubjectsCell extends Component {
  componentDidMount() {
    this.props.getAllSubjects();
  }

  getIdOfSelectedSubject = () => {
    const { subjects } = this.props;
    let selSubj;
    subjects.subjects.map((subject) => {
      if (this.selectedSubject === subject.name) {
        selSubj = subject;
      }
    })
    return selSubj;
  }

  getId = (name) => {
    const { subjects } = this.props;
    let id;
    subjects.subjects.map((subject) => {
      if (name === subject.name) {
        id = subject.id;
      }
    })
    return id;
  }

  getType = (name) => {
    const { subjects } = this.props;
    let type;
    subjects.subjects.map((subject) => {
      if (name === subject.name) {
        if (subject.type === 'general') {
          type = 'generalSubjects';
        }
        if (subject.type === 'speciality') {
          type = 'specialitySubjects';
        }
        if (subject.type === 'selective') {
          type = 'selectiveSubjects';
        }
      }
    })
    return type;
  }

  handleChangeOption = (event) => {
    this.selectedSubject = event.target.value;
  }

  handleSetCoefficient = (event) => {
    this.coefficient = event.target.value;
  }

  render() {
    let { subjects, semester, scheduleOfSemesters, schedule, typeOfSubjects } = this.props;
    //console.log('SUBJECTS'+subjects)
    let selectedSubject = subjects ? subjects.subjects[0].name : null;
    let coefficient;
    let output = (scheduleOfSemesters && scheduleOfSemesters[semester - 1][typeOfSubjects]) ?
      scheduleOfSemesters[semester - 1][typeOfSubjects].map((subject) =>
        // {
        <OverlayTrigger trigger='click' placement='right' overlay={
          <Popover id='popover-basic'>
            <Popover.Title as='h3'>Додаткові налаштування</Popover.Title>
            <Popover.Content>
              <p className='select-name'>Коефіцієнт</p>
              <input type='number' id='quantity'
                defaultValue={schedule[subject].coefficient} name='quantity' min='0' className='form-control' onChange={this.handleSetCoefficient} />
              <p className='select-name'>Викладачі</p>
              <div className='teachers-list'>
                <input type='checkbox' id='vehicle1' name='teacher1' value='Bike'></input>
                <label for='teacher1'> Прізвище І. П.</label><br></br>
                <input type='checkbox' id='vehicle2' name='teacher2' value='Car'></input>
                <label for='teacher2'> Прізвище І. П.</label><br></br>
                <input type='checkbox' id='vehicle3' name='teacher3' value='Boat'></input>
                <label for='teacher3'> Прізвище І. П.</label><br></br>
              </div>
              {/* <Form.Control as='select'>
                                 <option></option>
                            </Form.Control> */}
            </Popover.Content>
            <Form.Group controlId='button'>
              <Button type='submit' className='add-subject popup-button save-button' custom
                onClick={() => this.props.addCoefficient(this.getId(schedule[subject].name), this.coefficient || 0)}>
                Зберегти зміни
                            </Button>
              <Button type='submit' className='add-subject popup-button delete-button' custom
                onClick={() => this.props.deleteSubject(this.getId(schedule[subject].name), this.getType(schedule[subject].name), semester - 1)}>
                Видалити дисципліну
                            </Button>
            </Form.Group>

          </Popover>} rootClose>

          <Button className='subject-button' custom>{schedule[subject].name} <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABF0lEQVQ4T43TTStFURTG8d8dU8yUASlTA93yEkbiC0gZ+QTGhrdkIEMzUyMpZealKCPvRRkZGMkHICMlWtlHO51z7t2Ts1trP/+1zn7Wbvhd4xhK+7LPId5TYgQ9uMRXI4mvasQtrKd8CJ/Qh3PMBmAJu3jBxT9QVNlKsSkM4xonGMBEDthLsLJmpnGEbmwn6CnmOgHk4gK+jAN8tAOE+BhdWVtvURm3EasDzKS2q8Sh7a0ClInDxqh8kwpv4K4KENatZW3n4givYhOLZYBHrGAQO2mAisoFcx8LVYBvfGIe4f1Z8j63ty0gDj9gtGJCawE1U/2XKgW8ou5N5OBJ9Bd3MFbyj510EXfVDBdiNds85zLgM+5/AHBNTgGQXs7SAAAAAElFTkSuQmCC' alt=''></img></Button>
        </OverlayTrigger>
        //console.log('SUBJECT_ID' + subject + ' DATA ' + schedule[subject].name + ' SEMESTER ' + (semester-1))
        // schedule[subject].name
      )
      : console.log('UNDEFINED');
    // console.log('OUTPUT' + output);
    let listSubjects = subjects ? subjects.subjects.map((subject) => <option>{subject.name}</option>) : <option>-</option>;
    //console.log('SELECTED_SUBJECT'+selectedSubject)
    return (
      < td >
        <div className='subjects-type'>{this.props.name}</div>

        {output}

        <OverlayTrigger trigger='click' placement='right' overlay={
          <Popover id='popover-basic'>
            <Popover.Title as='h3'>Оберіть дисципліну</Popover.Title>
            <Popover.Content>
              <Form.Group controlId='subjects'>
                <Form.Control as='select' onChange={this.handleChangeOption}>
                  <option disabled selected>Виберіть дисципліну...</option>
                  {listSubjects}
                </Form.Control>
              </Form.Group>
            </Popover.Content>
            <Form.Group controlId='button'>
              <Button className='center btn btn-primary' onClick={() => this.props.addSubject(semester - 1, this.getIdOfSelectedSubject())}>
                Додати
                        </Button>
            </Form.Group>
          </Popover>} rootClose>

          <Button className='add-subject'>+ додати дисципліну</Button>
        </OverlayTrigger>
      </td >
    );
  }
}

export class CoefficientsCell extends Component {
  render() {
    const { coefficients, semester, scheduleOfSemesters, schedule } = this.props;

    let coefficient = 0;
    // scheduleOfSemesters &&
    // console.log('COEFFICIENTS '+ scheduleOfSemesters[semester-1].generalSubjects[0])
    // let result = scheduleOfSemesters && schedule &&
    //     (scheduleOfSemesters[semester-1].generalSubjects || scheduleOfSemesters.semesters[semester-1].specialitySubjects ||
    //         scheduleOfSemesters.semesters[semester-1].selectiveSubjects) ?
    //     scheduleOfSemesters[semester - 1].generalSubjects.map((item) => {
    //         coefficient += schedule[item].coefficient
    //         // coefficient += 7
    //     }) 
    //     // scheduleOfSemesters[semester - 1].specialitySubjects.map((item) => {
    //     //     //coefficient += item.coefficient
    //     //     coefficient = 7
    //     // }) &&
    //     // scheduleOfSemesters[semester - 1].selectiveSubjects.map((item) => {
    //     //     //coefficient += item.coefficient
    //     //     coefficient = 7
    //     // }) 
    //     : (<td> <div>Сума коефіцієнтів: {coefficient}/{coefficients}</div> </td>)

    return (
      <td>
        <div>Сума коефіцієнтів: {coefficient}/{coefficients}</div>
      </td>
    );
  }
}