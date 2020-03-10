import React, { Component } from 'react'
import { Registration } from '../../components/Registration'
import { reduxForm } from 'redux-form'
import { validate } from '../../utils/validation'
import { registerUser } from '../../store/actions'
import { connect } from 'react-redux'

class RegistrationContainer extends Component {
  handleOnSubmit = (user) => {
    const { registerUser } = this.props

    registerUser(user)
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props

    return (
      <Registration
        handleSubmit={handleSubmit}
        onSubmit={this.handleOnSubmit}
        submitting={submitting}
        invalid={invalid}
      />
    )
  }
}

const mapDispatchToProps = () => ({
  registerUser,
})


export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'registerForm',
    validate,
  })(RegistrationContainer),
)
