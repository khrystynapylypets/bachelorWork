import React from 'react'
import { connect } from 'react-redux'
import { ProfilePage } from '../../components/ProfilePage';

const mapStateToProps = (state) => ({
    userId: state.user.id,
})

function mergeProps(stateProps, dispatchProps, ownProps) {
    return {
        ...stateProps,
        ...dispatchProps,
        ...ownProps,
    }
}

const ProfilePageContainer = connect(mapStateToProps, null, mergeProps)(ProfilePage)

export default ProfilePageContainer

