// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { useAuth } from './context/authContext'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  let loading = useAuth().loading
  let loggedIn = (useAuth().auth.data !== null)

  console.log("Private Route, Logged User:"+JSON.stringify(loggedIn))
  if (loading) {
    return (
      <Route
        {...rest}
        render={() => {
          return <p>Loading...</p>;
        }}
      />
    );
  }

  return (
    <Route
      {...rest}
      render={props =>
        (loggedIn) ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )


  // debug
  // return (
  //   <Route
  //     {...rest}
  //     render={props =>
  //       <div>Logged in 1:{new String(loggedIn)}</div>
  //     }
  //   />
  // )
} 
export default PrivateRoute;