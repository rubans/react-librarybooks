import React, { useState, useEffect } from 'react'

const EditBookForm = props => {
  const initialFormState = props.currentBook
  const [ book, setBook ] = useState(initialFormState)

  const handleInputChange = event => {
    const { name, value } = event.target
    setBook({ ...book, [name]: value })
  }
  //console.log("bookform:"+JSON.stringify(book)) 
  return (
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
      <input type="text" name="ownerEmail" value={book.ownerEmail} onChange={handleInputChange} />
      <button className="button muted-button">Save</button>
      <button onClick={() => props.setViewMode("viewBook")} className="button muted-button">
        Cancel
      </button>
    </form>
  )
}

export default EditBookForm
