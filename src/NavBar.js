import React from 'react'
import { Nav,Navbar } from "react-bootstrap";

const NavBar = (props) => (
    <Navbar bg="primary" variant="dark">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/users">Users</Nav.Link>
						<Nav.Link href="/books">Books</Nav.Link>
					</Nav>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
						Signed in as : <a href="#login">{props.loggedInUser}</a>
						</Navbar.Text>
					</Navbar.Collapse>
				</Navbar>
)

export default NavBar;