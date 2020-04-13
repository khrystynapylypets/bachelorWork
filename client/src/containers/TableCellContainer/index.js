import React, { Component } from 'react'
import {ScheduleForm} from '../../components/ScheduleForm/index'
import CreateSchedule from '../../components/CreateSchedule/index'
import { GeneralSubjectsCell } from '../../components/TableCells'
import { getAllSubjects } from '../../store/actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class TableCellContainer extends Component {

    
    render() {
        
        return (
            <>
                <GeneralSubjectsCell getAllSubjects={this.props.getAllSubjects} subjects={this.props.subjects} />
            </>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(getAllSubjects, dispatch)
}

const mapStateToProps = ({ subjects }) => ({
    subjects: subjects.subjects,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TableCellContainer)