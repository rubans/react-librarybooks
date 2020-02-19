import React from 'react'
import { Nav,Navbar } from "react-bootstrap";
import { useAuth, authSignOut } from './context/authContext'




const NavBar = (props) => {
	const signOut = () => {
		authSignOut();
	}
	const user = useAuth().auth.data
	console.log("Nav Bar User:"+JSON.stringify(user))
	let isAdmin = useAuth().auth.isAdmin
	let email = (user) ? user.email : ""
	return (
	<Navbar bg="primary" variant="dark">
					<Nav className="mr-auto">
						<Nav.Link href="/">Home</Nav.Link>
						{(isAdmin) ? 
							(<Nav.Link href="/users">Users</Nav.Link>) : ("")
						}
						<Nav.Link href="/books">Books</Nav.Link>
					</Nav>
					<Navbar.Collapse className="justify-content-end">
						{(email !== "") ?
							(<div><Navbar.Text>
								Signed in as : <a href="#login">{email}</a>
							</Navbar.Text>
							<button onClick={() => signOut()} className="bg-light btn my-2 my-sm-0" style={{marginLeft:"10px"}}>Signout</button>
							</div>
							)
							: (<a href="/Login" className="bg-light btn my-2 my-sm-0" >Login</a>
							)
					}
					</Navbar.Collapse>
				</Navbar>
		)
	}

export default NavBar;