import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ProfilePage } from '../../components/ProfilePage';
import { getUserData } from '../../store/actions';
import { Spinner } from 'react-bootstrap'
import { ErrorAlert } from '../../components/ErrorAlert'


class ProfilePageContainer extends Component {

  componentDidMount() {
    const { getUserData, userId } = this.props

    getUserData(userId)
  }

  render() {
    const { loading, errorMessage, userData } = this.props

    return (
        <>
          {loading ?
              <Spinner animation='border' variant='primary' />
              :
              errorMessage && errorMessage.length > 0
                  ? <ErrorAlert description={errorMessage} />
                  : <ProfilePage user={userData}/>
          }
        </>
    )
  }
}

const mapDispatchToProps = {
  getUserData,
}

const mapStateToProps = ({ user }) => ({
  userId: user.id,
  loading: user.loading,
  errorMessage: user.error,
  userData: user.userData,
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ProfilePageContainer)
