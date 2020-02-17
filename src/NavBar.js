import React from 'react'
import { Nav,Navbar } from "react-bootstrap";
import { useAuth } from './context/authContext'

const NavBar = (props) => {
	let user = useAuth().auth.data
	console.log("Nav Bar User:"+JSON.stringify(user))
	let email = (user) ? user.email : ""
	return (
	<Navbar bg="primary" variant="dark">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/users">Users</Nav.Link>
						<Nav.Link href="/books">Books</Nav.Link>
					</Nav>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
						Signed in as : <a href="#login">{email}</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
		)
	}

export default NavBar;