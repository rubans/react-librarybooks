import React, { useState, Fragment, useEffect } from 'react'
import UserForm from './forms/UserForm'
import UserTable from './tables/UserTable'
import {getUsersInDB} from './firebaseClient'

export const initialFormState = { id: null, name: '', username: '', password: '' }

const Users = (props) => {
	// if(!loggedIn())
	// {
	// 	redirectToLogin(props);
	// 	return;
	// }
	const[users, setUsers] = useState([]);
	useEffect(async () => {
		let mounted = true;
		const data = await getUsersInDB();
		console.log("load data:"+JSON.stringify(data))
		setUsers(data)
	},[]);
	// Mock Data
	// const usersData = [
	// 	{ id: 1, name: 'Tania', username: 'floppydiskette' },
	// 	{ id: 2, name: 'Craig', username: 'siliconeidolon' },
	// 	{ id: 3, name: 'Ben', username: 'benisphere' },
	// ]

	const initialFormState = initialFormState

	// Setting state
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ mode, setViewMode ] = useState("view")

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
			//loggedIn() ?
			 (<div className="flex-row">
				<div className="flex-large">
				{(mode === "edit") ? (
						<Fragment>
							<h3>Edit user</h3>
							<UserForm
								editing={true}
								setViewMode={setViewMode}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
				</Fragment> ) : 
					(mode === "new") ? 
						(
							<Fragment>
								<h3>Register</h3>
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
									{/* <button
										onClick={() => addUser()}
										className="button muted-button"
									>
										Add New User
									</button> */}
								</div>
								<UserTable users={users} editRow={editUser} deleteUser={deleteUser} />
						</Fragment> )}
				</div>
			</div>
			 ) 
			//  :
			//  (<Redirect to={{ pathname: '/login', state: { from: props.location } }} />)
	)
}

export default Users
