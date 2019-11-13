import React, { useState, Fragment } from 'react'
import UserForm from './forms/UserForm'
import UserTable from './tables/UserTable'

const App = () => {
	// Data
	const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon' },
		{ id: 3, name: 'Ben', username: 'benisphere' },
	]

	const initialFormState = { id: null, name: '', username: '' }

	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ userViewMode, setViewMode ] = useState("view")

	// CRUD operations
	const addUser = () => {
		setViewMode("new")
	}

	const deleteUser = id => {
		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editUser = user => {
		setViewMode("edit")
		setCurrentUser({ id: user.id, name: user.name, username: user.username })
	}

	return (
		<div className="container">
			<h1>Book Library</h1>
			<div className="flex-row">
				<div className="flex-large">
				{(userViewMode == "edit") ? (
						<Fragment>
							<h2>Edit user</h2>
							<UserForm
								editing={true}
								setViewMode={setViewMode}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
				</Fragment> ) : 
					(userViewMode == "new") ? 
						(
							<Fragment>
								<h2>Create user</h2>
								<UserForm
									editing={false}
									setViewMode={setViewMode}
									currentUser={initialFormState}
									updateUser={updateUser}
								/>
					</Fragment> ) :
						(
							<Fragment>
								<h2>View users</h2>
								<div style={{ display: "flex", justifyContent: "flex-end" }}>
									<button
										onClick={() => addUser()}
										className="button muted-button"
									>
										Add New User
									</button>
								</div>
								<UserTable users={users} editRow={editUser} deleteUser={deleteUser} />
						</Fragment> )}
				</div>
			</div>
		</div>
	)
}

export default App
