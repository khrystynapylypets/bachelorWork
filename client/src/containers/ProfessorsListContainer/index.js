import React from 'react'
import { connect } from 'react-redux'
import { ProfessorsList } from '../../components/ProfessorsList';
import { queryProfessors, clearFilters, updateFilter, sortList } from '../../store/actions/professorsAction';

const mapStateToProps = (state) => ({
    loading: state.professors.loading,
    list: state.professors.list,
    filter: state.professors.filter,
    count: state.professors.count,
    error: state.professors.error,
})

const mapDispatchToProps = {
    queryProfessors,
    clearFilters,
    updateFilter,
    sortList,
}


const ProfessorsListContainer = connect(mapStateToProps, mapDispatchToProps)(ProfessorsList)

export default ProfessorsListContainer
