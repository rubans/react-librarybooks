import React, { useState, Fragment } from 'react'
import { 
	Nav, 
	Navbar, 
	NavItem 
} from "react-bootstrap";
import Users from './users'
import Books from './books'
import {
	BrowserRouter as Router,
	Link,
	NavLink,
	Route
  } from "react-router-dom";

const App = () => {
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
			<Route path="/users" exact component={Users} />
			<Route path="/books" exact component={Books} />
		</Router>
	)
}
function Home() {
	return <div>Home page</div>;
  }
  

export default App
