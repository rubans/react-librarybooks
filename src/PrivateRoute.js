// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React, {useState} from 'react'
import {CurrentUser} from './userContext'
import { Redirect, Route } from 'react-router-dom'

const loggedIn = (currentUser) => {
	console.log('logged in CurrentUser:'+JSON.stringify(currentUser))
	if (!currentUser) {
		console.log('no auth token set');
		return false;
		//do something like redirect to login page
	} else {
    console.log("auth token set!")
		return true
	}
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const currentUser = CurrentUser()
  loggedIn(currentUser)
  // Add your own authentication on the below line.
  
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn(currentUser) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
export default PrivateRoute;