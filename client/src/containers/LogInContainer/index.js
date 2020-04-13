import React, { Component } from 'react'
import { LogIn } from '../../components/LogIn'
import { reduxForm } from 'redux-form'
import { validate } from '../../utils/validation'
import { connect } from 'react-redux'
import { loginUser } from '../../store/actions'
import { ErrorAlert } from '../../components/ErrorAlert'


class LogInContainer extends Component {

  handleOnSubmit = (user) => {
    const { loginUser, reset } = this.props
    console.log(this.props)
    loginUser(user)
    reset()
  }

  render() {
    const { handleSubmit, submitting, invalid, errorMessage } = this.props

    return (
        <>
          {errorMessage.length > 0 &&
          <ErrorAlert description={errorMessage} />
          }
          <LogIn
            handleSubmit={handleSubmit}
            onSubmit={this.handleOnSubmit}
            invalid={invalid}
            submitting={submitting}
          />
        </>
    )
  }
}

const mapDispatchToProps = {
  loginUser,
}

const mapStateToProps = ({ user }) => ({
  errorMessage: user.error,
})

export default connect(
    mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'login',
    validate,
  })(LogInContainer),
)
