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
	// const [authUser,setAuthUser] = useState(null);
	// const [authWasListened,setAuthWasListened] = useState(false);

	// useEffect(()=>{
	// 	console.log('Running App useEffect...');
	// 	firebase.auth().onAuthStateChanged(
	// 	(authUser) => {
	// 		if(authUser) {
	// 			console.log("auth user state:"+authUser.email)
	// 			setAuthUser(authUser.email);
	// 			setAuthWasListened(true);
	// 		  } else {
	// 			console.log("no auth user!")
	// 			setAuthUser(null);
	// 			setAuthWasListened(true);
	// 		  }

	// 	})
	// })
	//const name = (currentUser) ? currentUser.displayName : "";
	//const [loggedInUser, setLoggedInUser] = useState(name) //currentUser === null ? "" : currentUser.displayName;
	
	// useEffect(() => {
	// 	let currentUser = CurrentUser()
	// 	let name = (currentUser) ? currentUser.displayName : "";
	// 	setLoggedInUser(name)
	// })
	
	console.log('Rendering App...');
  	console.log("App Props:"+JSON.stringify(props))
	//console.log("auth User:"+JSON.stringify(currentUser))
	return (
		<Router>
			<div className="App">
				<NavBar loggedInUser={authUser}/>
			</div>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			{/* <Route path="/users" render={(props) => <Users {...props} />}/> */}
			<PrivateRoute path='/users' component={Users} />
			<Route path="/books" render={(props) => <Books {...props} />} />
			<Route path="/register" exact component={Register}/>
		</Router>
	)
}
const Home = () => {
	return <div>Home page</div>;
}
  

export default App
