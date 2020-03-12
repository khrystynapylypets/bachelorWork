import React, { Component } from 'react'
import { LogIn } from '../../components/LogIn'
import { reduxForm } from 'redux-form'
import { validate } from '../../utils/validation'
import { connect } from 'react-redux'
import { loginUser } from '../../store/actions'


class LogInContainer extends Component {
  handleOnSubmit = (user) => {
    const { loginUser } = this.props

    loginUser(user)
  }

  render() {
    const { handleSubmit, submitting, invalid } = this.props

    return (
      <LogIn
        handleSubmit={handleSubmit}
        onSubmit={this.handleOnSubmit}
        invalid={invalid}
        submitting={submitting}
      />
    )
  }
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(
  null,
  mapDispatchToProps,
)(
  reduxForm({
    form: 'login',
    validate,
  })(LogInContainer),
)
