import React, { Component } from 'react';
import { SubjectsCell } from '../../components/TableCells';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class GeneralSubjectsCellContainer extends Component {

  render() {
    return (
      <>
        <SubjectsCell name='Загальні дисципліни' getAllSubjects={this.props.subjectsActions.getGeneralSubjects}
          addSubject={this.props.subjectsActions.addSubject} subjects={this.props.subjects} semester={this.props.semester}
          scheduleOfSemesters={this.props.scheduleOfSemesters} schedule={this.props.schedule} typeOfSubjects='generalSubjects'
          addCoefficient={this.props.subjectsActions.addCoefficient} deleteSubject={this.props.subjectsActions.deleteSubject} />
      </>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    subjectsActions: subjectsActions.bind(dispatch),
  };
}

const mapStateToProps = ({ subjects, schedule }) => ({
  subjects: subjects.generalSubjects,
  scheduleOfSemesters: schedule.semesters,
  schedule: schedule,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeneralSubjectsCellContainer);