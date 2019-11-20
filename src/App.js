import React, { useState, Fragment } from 'react'
import { 
	Nav, 
	Navbar, 
	NavItem 
} from "react-bootstrap";
import Users from './users'
import Books from './books'
import Login from './login'
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Route,
	Redirect,
  } from "react-router-dom";

  const loggedIn = () => {
	if (!sessionStorage.getItem('auth-token')) {
		console.log('no auth token set');
		return false;
		//do something like redirect to login page
	} else {
		console.log('token found. Logged in.')
		return true
	}
  }
  const requireAuth = (props, href) => {
	const location = {
		pathname: '/login',
		state: { from: {pathname: href} }
	}
	props.history.push(location);
	console.log("app history:"+JSON.stringify(props.history))

	if (!loggedIn()) {
		return <Redirect to={location} />
    }
    return <Redirect to={href} />
}
  

const App = (props) => {
	console.log(props)
		
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
			<Route path="/login" exact component={Login
			} />
			<Route path="/users" exact render={(props) => requireAuth(props, props.match.path)}/>
			<Route path="/books" exact component={Books} />
		</Router>
	)
}
const Home = () => {
	return <div>Home page</div>;
  }
  

export default App
