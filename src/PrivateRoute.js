// This is used to determine if a user is authenticated and
// if they are allowed to visit the page they navigated to.

// If they are: they proceed to the page
// If not: they are redirected to the login page.
import React from 'react'
import { useAuth } from './context/authContext'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useAuth().auth
  console.log("Private Route, Logged User:"+JSON.stringify(auth.isSessionLoggedin))
  if (auth.loading) {
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
        (auth.isSessionLoggedin) ? (
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