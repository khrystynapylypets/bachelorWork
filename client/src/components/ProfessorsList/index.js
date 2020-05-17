import React, { Component } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import {
  Row,
  Card,
  Accordion,
  Spinner,
  Button,
  Col,
  Container,
  Form,
} from 'react-bootstrap';
import { applyFilter, applySort, formatDate } from '../../helpers/generalFunctions';
import { ProfessorsListHeader } from './ProfessorsListHeader';
import { PrivateLayout } from '../PrivateLayout';
import './style.scss';

export class ProfessorsList extends Component {
  componentDidMount() {
    const { professorsActions } = this.props;

    professorsActions.queryProfessors();
  }

  render() {
    const { isQuerying, list, professorsActions, filter, sortKey, sortOptions, isAdmin } = this.props;
    const { updateFilter, clearFilters, sortList } = professorsActions;


    if (isQuerying) {
      return <Spinner animation='border' variant='primary' />;
    }

    const filteredList = applyFilter(list, filter);
    const sortedList = applySort(filteredList, sortKey);
    const professorsCount = filteredList.length;

    const professorsList = !_.isEmpty(filteredList)
      ? (
        <Accordion defaultActiveKey='0'>
          {
            sortedList.map((professor, index) => {
              const { firstName, secondName, lastName, academicStatus, phoneNumber, email, created, id } = professor;
              const formattedDate = formatDate(created);

              const addAdditionalRights = isAdmin ? (
                <Form>
                  <Form.Check
                    id={id}
                    type='switch'
                    label='Створювати розклад'
                  />
                </Form>
              ) : null;

              return (
                <Card key={id}>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Button} variant='link'
                      eventKey={index}
                    >
                      {`${firstName} ${secondName} ${lastName}`}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={index}>
                    <Card.Body>
                      { academicStatus
                      && <p><span>Академічний статус:</span> {academicStatus}</p>
                      }
                      { phoneNumber
                      && <p><span>Номер телефону:</span> {phoneNumber}</p>
                      }
                      { email
                      && <p><span>Електронна пошта:</span> {email}</p>
                      }
                      { created
                      && <p><span>Профіль створено:</span> {formattedDate}</p>
                      }
                      <div className='links'>
                        <Link to={`/profile/${id}`}> Перейти до особистого профілю</Link>
                        {addAdditionalRights}
                      </div>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })
          }
        </Accordion>
      )
      : <div>Список порожній</div>;

    return (
      <PrivateLayout>
        <Container>
          <Row className='professors-list'>
            <Col md={12}>
              <ProfessorsListHeader
                updateFilter={updateFilter}
                clearFilters={clearFilters}
                filter={filter}
                professorsCount={professorsCount}
                sortKey={sortKey}
                sortList={sortList}
                sortOptions={sortOptions}
              />
            </Col>
            <Col className='list' md={12}>
              {professorsList}
            </Col>
          </Row>
        </Container>
      </PrivateLayout>
    );
  }
}
