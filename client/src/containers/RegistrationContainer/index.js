import React, { Component } from 'react'
import { Registration } from '../../components/Registration'
import { reduxForm } from 'redux-form'
import { validate } from '../../utils/validation'
import { registerUser } from '../../store/actions'
import { connect } from 'react-redux'
import { ErrorAlert } from '../../components/ErrorAlert'

class RegistrationContainer extends Component {

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  handleOnSubmit = (user) => {
    const { registerUser, reset } = this.props

    registerUser(user)
    reset()
  }


  render() {
    const { handleSubmit, submitting, invalid, errorMessage } = this.props

    return (
      <>
        {errorMessage.length > 0 &&
        <ErrorAlert description={errorMessage}/>
        }
        <Registration
          handleSubmit={handleSubmit}
          onSubmit={this.handleOnSubmit}
          submitting={submitting}
          invalid={invalid}
        />
      </>
    )
  }
}

const mapDispatchToProps = {
  registerUser,
}

const mapStateToProps = ({ user }) => ({
  errorMessage: user.error,
})


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'registerForm',
    validate,
  })(RegistrationContainer),
)
