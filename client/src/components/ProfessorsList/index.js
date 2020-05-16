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
} from 'react-bootstrap';
import { applyFilter } from '../../helpers/generalFunctions';
import { ProfessorsListHeader } from './ProfessorsListHeader';
import { PrivateLayout } from '../PrivateLayout';
import './style.scss';

export class ProfessorsList extends Component {
  componentDidMount() {
    const { professorsActions } = this.props;

    professorsActions.queryProfessors();
  }

  render() {
    const { isQuerying, list, professorsActions, filter } = this.props;
    const { updateFilter, clearFilters } = professorsActions;


    if (isQuerying) {
      return <Spinner animation='border' variant='primary' />;
    }

    const filteredList = applyFilter(list, filter);
    const professorsCount = filteredList.length;

    const professorsList = !_.isEmpty(filteredList)
      ? (
        <Accordion defaultActiveKey='0'>
          {
            filteredList.map((professor, index) => {
              const { firstName, secondName, lastName, academicStatus, phoneNumber, email } = professor;

              return (
                <Card>
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
                      { academicStatus &&
                        <p><span>Академічний статус:</span> {academicStatus}</p>
                      }
                      { phoneNumber &&
                        <p><span>Номер телефону:</span> {phoneNumber}</p>
                      }
                      { email &&
                        <p><span>Електронна пошта:</span> {email}</p>
                      }
                      <Link to='/profile'>Перейти до особистого профілю</Link>
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
