import React from 'react'
import history from '../history'
import { Router, Route, Switch } from 'react-router-dom'
import { PublicRoute } from './PublicPoute'
import { PrivateRoute } from './PrivateRoute'
import LogInContainer from '../containers/LogInContainer'
import RegistrationContainer from '../containers/RegistrationContainer'
import ForgotPasswordContainer from '../containers/ForgotPasswordContainer'
import { NotFound } from '../components/NotFound'
import { HomePage } from '../components/HomePage'

export const routes = (
  <Router history={history}>
    <Switch>
      <PublicRoute path='/login' component={LogInContainer}/>
      <PublicRoute path='/register' component={RegistrationContainer}/>
      <PublicRoute path='/forgot-password' component={ForgotPasswordContainer}/>
      <Router path='/home' component={HomePage}/>
      <Route path='*' component={NotFound}/>
    </Switch>
  </Router>
)
