import React, { Component } from 'react'
import { LogIn } from '../components/LogIn'
import { reduxForm } from 'redux-form'


class LogInContainer extends Component {
  render() {
    return (
      <LogIn />
    )
  }
}

export default reduxForm({
  form: 'login',
})(LogInContainer)
