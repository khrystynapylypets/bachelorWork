import React, { Component } from 'react';
import { SubjectsCell } from '../../components/TableCells';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class GeneralSubjectsCellContainer extends Component {
  render() {
    const { subjectsActions, subjects, semester, scheduleOfSemesters, schedule } = this.props;

    return (
      <>
        <SubjectsCell
          name='Загальні дисципліни'
          getAllSubjects={subjectsActions.getGeneralSubjects}
          addSubject={subjectsActions.addSubject}
          subjects={subjects}
          semester={semester}
          scheduleOfSemesters={scheduleOfSemesters}
          schedule={schedule}
          typeOfSubjects='generalSubjects'
          addCoefficient={subjectsActions.addCoefficient}
          deleteSubject={subjectsActions.deleteSubject}
        />
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
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(GeneralSubjectsCellContainer);
