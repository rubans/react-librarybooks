import React, { useState, Fragment } from 'react'
import { Nav } from 'react-bootstrap';
import Users from './users'


const App = () => {
	return (
		<div className="container">
			<h1>Book Library</h1>
			<Nav variant="pills" defaultActiveKey="/users">
				<Nav.Item>
					<Nav.Link href="/users">Users</Nav.Link>
				</Nav.Item>
				<Nav.Item>
					<Nav.Link href="/books">Books</Nav.Link>
				</Nav.Item> 
			</Nav>
		</div>
	)
}

export default App
