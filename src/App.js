import React, { useState, useEffect, Fragment, useContext } from 'react'
import Users from './users'
import Books from './books'
import Login from './login'
import PrivateRoute from './PrivateRoute'
import Register from './forms/RegisterForm'
import {CurrentUser} from './userContext'
import {firebase} from './firebaseClient'
import NavBar from './NavBar'
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Route,
	Redirect,
	RouterChildContext,
	RouteComponentProps
}from "react-router-dom";
const App = (props) => {
	const authUser = CurrentUser()
	console.log('Rendering App...');
  	console.log("App Props:"+JSON.stringify(props))
	console.log("auth User:"+JSON.stringify(authUser))
	return (
		<Router>
			<div className="App">
				<NavBar loggedInUser={authUser}/>
			</div>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			{/* <Route path="/users" render={(props) => <Users {...props} />}/> */}
			<PrivateRoute loggedInUser={authUser} path='/users' component={Users} />
			<Route path="/books" render={(props) => <Books {...props} />} />
			<Route path="/register" exact component={Register}/>
		</Router>
	)
}
const Home = () => {
	return <div>Home page</div>;
}
  

export default App
