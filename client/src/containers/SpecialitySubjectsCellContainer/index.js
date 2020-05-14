import React, { Component } from 'react';
import { SubjectsCell } from '../../components/TableCells';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class SpecialitySubjectsCellContainer extends Component {
  render() {
    const { subjectsActions, subjects, semester, scheduleOfSemesters, schedule } = this.props;

    return (
      <>
        <SubjectsCell
          name='Фахові дисципліни'
          getAllSubjects={subjectsActions.getSpecialitySubjects}
          subjects={subjects}
          addSubject={subjectsActions.addSubject}
          semester={semester}
          scheduleOfSemesters={scheduleOfSemesters}
          schedule={schedule}
          typeOfSubjects='specialitySubjects'
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
  subjects: subjects.specialitySubjects,
  scheduleOfSemesters: schedule.semesters,
  schedule: schedule,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SpecialitySubjectsCellContainer);
