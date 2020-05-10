import React, {Component} from 'react'
import {
    Row,
    Card,
    Accordion,
    Spinner,
    Button,
    Col,
    Container,
} from 'react-bootstrap'
import {ProfessorsListHeader} from './ProfessorsListHeader'
import {ErrorAlert} from '../ErrorAlert'
import {PrivateLayout} from '../PrivateLayout';
import _ from 'lodash'
import {Link} from 'react-router-dom'
import {applyFilter} from '../../helpers/generalFunctions';
import './style.scss'

export class ProfessorsList extends Component {

    componentDidMount() {
        const {queryProfessors} = this.props
        queryProfessors()
    }

    render() {

        const {
            loading, list, updateFilter, filter, clearFilters,
        } = this.props


        if (loading) {
            return <Spinner animation='border' variant='primary'/>
        }

        const filtredList = applyFilter(list, filter)
        console.log(filtredList)

        const professorsList = !_.isEmpty(filtredList) ?
            <Accordion defaultActiveKey='0'>
                {
                    filtredList.map((professor, index) => {
                        const {firstName, secondName, lastName, academicStatus, phoneNumber, email} = professor;
                        return (
                            <Card>
                                <Card.Header>
                                    <Accordion.Toggle as={Button} variant='link' eventKey={index}>
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
            :
            <div>Список порожній</div>

        return (
            <PrivateLayout>
                <Container>
                    <Row className='professors-list'>
                        <Col md={12}>
                            <ProfessorsListHeader updateFilter={updateFilter} clearFilters={clearFilters} filter={filter} />
                        </Col>
                        <Col className='list' md={12}>
                            {professorsList}
                        </Col>
                    </Row>
                </Container>
            </PrivateLayout>
        )
    }
}