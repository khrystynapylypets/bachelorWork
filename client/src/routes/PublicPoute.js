import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { getToken } from '../helpers/token'

export const PublicRoute = ({ component: Component, ...rest }) => {
  console.log(getToken())
  const routeComponent = (props) => (
    getToken()
      ? <Redirect to='/home'/>
      : <Component {...props}/>
  )

  return <Route {...rest} render={routeComponent}/>
}