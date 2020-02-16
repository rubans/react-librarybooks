// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useState} from 'react'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ loggedInUser, component: Component, ...rest }) => {
  console.log("Private Route, Logged User:"+JSON.stringify(loggedInUser))
  return (
    <Route
      {...rest}
      render={props =>
        (loggedInUser) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
export default PrivateRoute;