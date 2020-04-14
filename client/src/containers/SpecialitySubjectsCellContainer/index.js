import React, { Component } from 'react'
import { SpecialitySubjectsCell } from '../../components/TableCells'
import { getSpecialitySubjects } from '../../store/actions'
import { connect } from 'react-redux'

class SpecialitySubjectsCellContainer extends Component {

    
    render() {
        
        return (
            <>
                <SpecialitySubjectsCell getAllSubjects={this.props.getSpecialitySubjects} subjects={this.props.subjects} />
            </>
        )
    }
}

const mapDispatchToProps = {
    getSpecialitySubjects
}

const mapStateToProps = ({ subjects }) => ({
    subjects: subjects.specialitySubjects,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SpecialitySubjectsCellContainer)