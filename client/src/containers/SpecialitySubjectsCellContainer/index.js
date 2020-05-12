import React, { Component } from 'react';
import { SubjectsCell } from '../../components/TableCells';
import { subjectsActions } from '../../store/actions/subjectsActions';
import { connect } from 'react-redux';

class SpecialitySubjectsCellContainer extends Component {

    render() {
        return (
            <>
                <SubjectsCell name='Фахові дисципліни' getAllSubjects={this.props.subjectsActions.getSpecialitySubjects} subjects={this.props.subjects} 
                addSubject = {this.props.subjectsActions.addSubject} semester={this.props.semester}
                scheduleOfSemesters = {this.props.scheduleOfSemesters} schedule={this.props.schedule} typeOfSubjects='specialitySubjects'
                addCoefficient = {this.props.subjectsActions.addCoefficient} deleteSubject = {this.props.subjectsActions.deleteSubject} />
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
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpecialitySubjectsCellContainer);