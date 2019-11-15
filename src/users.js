import React, { useState, Fragment } from 'react'
import UserForm from './forms/UserForm'
import UserTable from './tables/UserTable'

const Users = () => {
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
			 <div className="flex-row">
				<div className="flex-large">
				{(userViewMode == "edit") ? (
						<Fragment>
							<h3>Edit user</h3>
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
								<h3>Create user</h3>
								<UserForm
									editing={false}
									setViewMode={setViewMode}
									currentUser={initialFormState}
									updateUser={updateUser}
								/>
					</Fragment> ) :
						(
							<Fragment>
								<div className="centered">
									<h3>Users</h3>
								</div>
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
	)
}

export default Users
