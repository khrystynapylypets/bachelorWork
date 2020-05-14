import React, { Component } from 'react';
import './style.scss';
import { ScheduleForm } from '../../components/ScheduleForm/index';
import CreateSchedule from '../../components/CreateSchedule/index';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class ScheduleFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isSubmitted: false,
      degree: 'Бакалавр',
      form: 'Денна',
      coefficients: 30,
    };
  }

  handleChangeDegree = (event) => {
    this.setState({ degree: event.target.value });
  }

  handleChangeForm = (event) => {
    this.setState({ form: event.target.value });
  }

  handleChangeCoef = (event) => {
    this.setState({ coefficients: event.target.value });
  }

  getCoefficients = () => {
    const { coefficients } = this.state;

    return (coefficients);
  }

  handleSubmit = (event) => {
    this.setState({ isSubmitted: true });
    event.preventDefault();
    let semesters;
    const { degree } = this.state;
    const { subjectsActions } = this.props;

    degree === 'Бакалавр' ? (semesters = 8) : (semesters = 3);
    subjectsActions.createEmptySchedule(semesters);
  }

  handleClose = () => this.setState({ show: false });
  handleShow = () => { this.setState({ show: true, isSubmitted: false, degree: 'Бакалавр', form: 'Денна', coefficients: 30 }); };

  render() {
    const { show, degree, form, coefficients, isSubmitted } = this.state;

    return (
      <>
        <ScheduleForm
          onHandleSubmit={this.handleSubmit}
          onHandleChangeDegree={this.handleChangeDegree}
          onHandleChangeForm={this.handleChangeForm}
          onHandleChangeCoef={this.handleChangeCoef}
          onHandleShow={this.handleShow}
          onHandleClose={this.handleClose}
          show={show}
        />
        {isSubmitted
          ? (
            <CreateSchedule
              degree={degree}
              form={form}
              coefficients={coefficients}
            />
          ) : null
        }
      </>
    );
  }
}


// const mapDispatchToProps = {
//     createEmptySchedule
// }

function mapDispatchToProps(dispatch) {
  return {
    subjectsActions: subjectsActions.bind(dispatch),
  };
}

export default connect(null, mapDispatchToProps)(ScheduleFormContainer);
