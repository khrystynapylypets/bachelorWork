import React, { Component } from 'react'
import { SelectiveSubjectsCell } from '../../components/TableCells'
import { getSelectiveSubjects } from '../../store/actions'
import { connect } from 'react-redux'

class SelectiveSubjectsCellContainer extends Component {

    
    render() {
        
        return (
            <>
                <SelectiveSubjectsCell getAllSubjects={this.props.getSelectiveSubjects} subjects={this.props.subjects} />
            </>
        )
    }
}

const mapDispatchToProps = {
    getSelectiveSubjects
}

const mapStateToProps = ({ subjects }) => ({
    subjects: subjects.selectiveSubjects,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(SelectiveSubjectsCellContainer)