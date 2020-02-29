import React, { useState } from 'react'

const EditUserForm = props => {
  const initialFormState = props.currentUser
  const [ user, setUser ] = useState(initialFormState)
  console.log("props:"+JSON.stringify(props))
  console.log("editing:"+props.editing)
  //console.log("currentUser:"+props.currentUser.id)

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()
        props.updateUser(user.id, user)
        if(typeof props.setViewMode !== "undefined")
        {
          props.setViewMode("viewUser")
        }
      }}
    >
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange} />
      <label>Email</label>
      <input type="text" name="username" value={user.username} onChange={handleInputChange} />
      <label>Password</label>
      <input type="text" name="password" value={user.password} onChange={handleInputChange} />
      <button className="btn btn-primary">Save</button>
      <button onClick={() => props.setViewMode("viewUser")} className="btn btn-danger">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm
