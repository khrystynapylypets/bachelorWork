import React, { Component } from 'react'
import { ForgotPassword } from '../../components/ForgotPassword'
import { reduxForm } from 'redux-form'
import { validate } from '../../utils/validation'
import { connect } from 'react-redux'
import { resetPassword } from '../../store/actions'


class ForgotPasswordContainer extends Component {
  handleOnSubmit = (email) => {
    const { resetPassword } = this.props

    resetPassword(email)
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props

    return (
      <ForgotPassword
        handleSubmit={handleSubmit}
        onSubmit={this.handleOnSubmit}
        invalid={invalid}
        submitting={submitting}
      />
    )
  }
}

const mapDispatchToProps = () => ({
  resetPassword,
})

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'forgotPassword',
    validate,
  })(ForgotPasswordContainer),
)
