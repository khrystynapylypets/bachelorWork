import React, { Component } from 'react'
import { Registration } from '../components/Registration'
import { reduxForm } from 'redux-form'

class RegistrationContainer extends Component {
  render() {
    return (
      <Registration />
    )
  }
}

export default reduxForm({
  form: 'login',
})(RegistrationContainer)
