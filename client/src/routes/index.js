import React from 'react'
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import LogInContainer from '../containers/LogInContainer'
import RegistrationContainer from '../containers/RegistrationContainer'
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer'
import { NotFound } from '../components/NotFound'

export const routes = (
  <Router history={history}>
    <Switch>
      <Route path='/login' component={LogInContainer} />
      <Route path='/register' component={RegistrationContainer} />
      <Route path='/forgot-password' component={ForgotPasswordContainer} />
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
)
