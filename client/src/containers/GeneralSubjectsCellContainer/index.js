import React, { Component } from 'react'
import { GeneralSubjectsCell } from '../../components/TableCells'
import { getGeneralSubjects } from '../../store/actions'
import { connect } from 'react-redux'

class GeneralSubjectsCellContainer extends Component {

    
    render() {
        
        return (
            <>
                <GeneralSubjectsCell getAllSubjects={this.props.getGeneralSubjects} subjects={this.props.subjects} />
            </>
        )
    }
}

const mapDispatchToProps = {
    getGeneralSubjects
}

const mapStateToProps = ({ subjects }) => ({
    subjects: subjects.generalSubjects,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(GeneralSubjectsCellContainer)