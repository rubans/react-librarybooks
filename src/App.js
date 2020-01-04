import React, { useState, Fragment } from 'react'
import { 
	Nav, 
	Navbar, 
	NavItem 
} from "react-bootstrap";
import Users from './users'
import Books from './books'
import Login from './login'
import Register from './forms/RegisterForm'
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Route,
	Redirect,
	RouterChildContext,
	RouteComponentProps
}from "react-router-dom";
import {loggedIn} from "./utils"

	// const requireAuth = (props, href) => {
	// 	const loginHref = {
	// 		pathname: '/login',
	// 		state: { from: {pathname: href} }
	// 	}
	// 	const redirect = {
	// 		pathname: '/users',
	// 		state: { from: {pathname: href} }
	// 	}
	// 	//props.history.push(loginHref);
	// 	//console.log("app history:"+JSON.stringify(props.history))
		
	// 	if (!loggedIn()) {
	// 		return <Redirect to={loginHref} />
	// 	}
	// 	alert("loggedIn")
	//     return <Redirect to={redirect} />
	// }
  

const App = (props) => {
	console.log("App"+JSON.stringify(props))
	return (
		<Router>
			<div className="App">
				<Navbar bg="primary" variant="dark">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/users">Users</Nav.Link>
						<Nav.Link href="/books">Books</Nav.Link>
					</Nav>
				</Navbar>
			</div>
			<Route path="/" exact component={Home} />
			<Route path="/login" exact component={Login} />
			<Route path="/users" render={(props) => <Users {...props} />}/>
			<Route path="/books" render={(props) => <Books {...props} />} />
			<Route path="/register" exact component={Register}/>
		</Router>
	)
}
const Home = () => {
	return <div>Home page</div>;
  }
  

export default App
