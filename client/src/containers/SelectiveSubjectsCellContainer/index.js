import React, { Component } from 'react';
import { SubjectsCell } from '../../components/TableCells';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class SelectiveSubjectsCellContainer extends Component {

  render() {
    return (
      <>
        <SubjectsCell name='Вибіркові дисципліни' getAllSubjects={this.props.subjectsActions.getSelectiveSubjects} subjects={this.props.subjects}
          addSubject={this.props.subjectsActions.addSubject} semester={this.props.semester}
          scheduleOfSemesters={this.props.scheduleOfSemesters} schedule={this.props.schedule} typeOfSubjects='selectiveSubjects'
          addCoefficient={this.props.subjectsActions.addCoefficient} deleteSubject={this.props.deleteSubject} />
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
  subjects: subjects.selectiveSubjects,
  scheduleOfSemesters: schedule.semesters,
  schedule: schedule,
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectiveSubjectsCellContainer);