import React, {Component} from 'react';
import _ from 'lodash';
import {
  FormControl,
  Button,
  Accordion,
  Card,
  Container,
  Row,
  Col,
  Form,
  Dropdown,
  DropdownButton,
  Badge,
} from 'react-bootstrap';
import {useAccordionToggle} from 'react-bootstrap/AccordionToggle'
import {UPDATE_FILTER_DELAY} from '../../../utils/constants';
import './style.scss';

function CustomToggle({children, eventKey}) {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <Button
      onClick={decoratedOnClick}
    >
      {children}
    </Button>
  );
}

function filterIsEmpty(filter) {
  const {text, email, phone, academicStatus} = filter;
  return _.isEmpty(text) && _.isEmpty(email) && _.isEmpty(phone) && _.isEmpty(academicStatus);
}

export class ProfessorsListHeader extends Component {
  constructor(props) {
    super(props);

    const {filter} = this.props;

    this.state = {
      text: filter.text || '',
      email: filter.email || '',
      phone: filter.phone || '',
      lastModified: filter.lastModified,
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.filter.lastModified !== prevState.lastModified) {
      const {filter} = nextProps;

      return {
        text: filter.text || '',
        email: filter.email || '',
        phone: filter.phone || '',
        lastModified: filter.lastModified,
      };
    }

    return null;
  }

  componentWillUnmount() {
    this.handleClearFilters();
  }

  handleTextChange = (e) => {
    const text = e.target.value;
    const {updateFilter} = this.props;

    clearTimeout(this.timeoutId);

    if (text) {
      this.timeoutId = _.delay(updateFilter,
        UPDATE_FILTER_DELAY, 'text', text);
    }
    else {
      updateFilter('text', text);
    }

    this.setState({
      text,
    })
  };

  handleEmailFilterChange = (e) => {
    const email = e.target.value;
    const {updateFilter} = this.props;

    clearTimeout(this.timeoutId);

    if (email) {
      this.timeoutId = _.delay(updateFilter,
        UPDATE_FILTER_DELAY, 'email', email);
    }
    else {
      updateFilter('email', email);
    }

    this.setState({
      email,
    })
  };

  handlePhoneFilterChange = (e) => {
    const phone = e.target.value;
    const {updateFilter} = this.props;

    clearTimeout(this.timeoutId);

    if (phone) {
      this.timeoutId = _.delay(updateFilter,
        UPDATE_FILTER_DELAY, 'phone', phone);
    }
    else {
      updateFilter('phone', phone);
    }

    this.setState({
      phone,
    })
  };

  handleClearFilters = () => {
    const {clearFilters} = this.props;

    clearFilters();
  };


  render() {
    const {filter, professorsCount} = this.props;
    const {text, email, phone} = this.state;
    const disableButton = filterIsEmpty(filter);
    return (
      <div className='list-header'>
        <Accordion defaultActiveKey='0'>
          <Card>
            <Card.Header className='search-panel'>
              <Container>
                <Row noGutters={true}>
                  <Col md={9}>
                    <FormControl
                      placeholder="Ім'я викладача"
                      onChange={this.handleTextChange}
                      value={text}
                    />
                  </Col>
                  <Col md={3}>
                    <CustomToggle eventKey='1'>Додаткові фільтри</CustomToggle>
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body className='additional-filters'>
                <Container>
                  <Row>
                    <Col md={3}>
                      <Form.Label className='form-label'>Фільтр за електронною поштою</Form.Label>
                      <FormControl
                        placeholder="Електронна пошта"
                        onChange={this.handleEmailFilterChange}
                        value={email}
                      />
                    </Col>
                    <Col md={3}>
                      <Form.Label className='form-label'>Фільтр за номером телефону</Form.Label>
                      <FormControl
                        placeholder="Номер телефону"
                        onChange={this.handlePhoneFilterChange}
                        value={phone}
                      />
                    </Col>
                  </Row>
                </Container>
                <Button
                  onClick={this.handleClearFilters}
                  disable={disableButton}
                >Очистити фільтр</Button>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <Container>
          <Row>
            <Col md={10}>
            <div className='professors-count'>Кількість викладачів: <Badge>{professorsCount}</Badge></div>
            </Col>
            <Col md={2}>
              <DropdownButton title='Сортувати за'>
                <Dropdown.Item as='button'>Алфавітом</Dropdown.Item>
                <Dropdown.Item as='button'>Останніми створеними</Dropdown.Item>
                <Dropdown.Item as='button'>Першими створеними</Dropdown.Item>
              </DropdownButton>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
