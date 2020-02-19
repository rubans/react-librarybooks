import React, { useState, useEffect } from 'react'
import {getUsersInDB} from './../firebaseClient'

const EditBookForm = props => {
  const initialFormState = props.currentBook
  const [ book, setBook ] = useState(initialFormState)
  const [ users, setUsers] = useState([]);
	useEffect(() => {
    const fetchData = async() => {
      const data = await getUsersInDB();
      console.log("load book form user:"+JSON.stringify(data))
      setUsers(data)
    }
    fetchData()
	},[]);

  const handleInputChange = event => {
    const { name, value } = event.target
    setBook({ ...book, [name]: value })
  }
  //console.log("bookform:"+JSON.stringify(book))
  return (
    <div className="container">
      <form
        onSubmit={event => {
          event.preventDefault()
          props.updateBook(book.id, book)
          props.setViewMode("viewBook")
        }}
      >
        <label>Name</label>
        <input type="text" name="name" value={book.name} onChange={handleInputChange} />
        <label>Owner Email</label>
        <select onChange={handleInputChange} name="ownerEmail">
        {
          users.map(user => <option value={user.username}>{user.username}</option>)
        }
        </select>
        <div className="centered">
          <button className="button muted-button">Save</button>
          <button onClick={() => props.setViewMode("viewBook")} className="button muted-button">
            Cancel
          </button>
        </div>
      </form>
    </div>
  )
}

export default EditBookForm
