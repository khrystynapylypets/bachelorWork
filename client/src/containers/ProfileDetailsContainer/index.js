import React from 'react'
import { connect } from 'react-redux'
import { ProfileDetails } from '../../components/ProfilePage/ProfileDetails';
import { getUserData } from '../../store/actions/userAction';
import { formatDate } from '../../helpers/generalFunctions'

const mapStateToProps = (state) => ({
    loading: state.user.loading,
    email: state.user.email,
    firstName: state.user.firstName,
    secondName: state.user.secondName,
    lastName: state.user.lastName,
    dateWork: formatDate(state.user.dateWork),
    academicStatus: state.user.academicStatus,
    dateBirth: formatDate(state.user.dateBirth),
    phoneNumber: state.user.phoneNumber,
})

const mapDispatchToProps = {
    getUserData,
}


function mergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
}

const ProfileDetailsContainer = connect(mapStateToProps, mapDispatchToProps, mergeProps)(ProfileDetails)

export default ProfileDetailsContainer
