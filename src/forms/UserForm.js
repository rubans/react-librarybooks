import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const initialFormState = props.currentUser
  const [ user, setUser ] = useState(initialFormState)
  console.log("id:"+user.id)
  console.log("editing:"+props.editing)
  console.log("currentUser:"+props.currentUser.id)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
        props.setViewMode("viewUser")
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Username</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <button>Save</button>
      <button onClick={() => props.setViewMode("viewUser")} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
