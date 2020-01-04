import React, { useState, Fragment } from 'react'
import BookForm from './forms/BookForm'
import BookTable from './tables/BookTable'
import {loggedIn} from './utils'
import {createBook} from './firebaseClient'

const Books = (props) => {
	console.log("book:"+JSON.stringify(props))
	console.log("isAuth:"+loggedIn())
    // Mock Data
	const booksData = [
		{ id: 1, name: 'Book1', ownerEmail: 'floppydiskette' }
	]

	const initialFormState = { id: null, name: '', ownerEmail: '' }

	// Setting state
	const [ books, setBooks ] = useState(booksData)
	const [ currentBook, setCurrentBook ] = useState(initialFormState)
	const [ mode, setViewMode ] = useState("view")

	// CRUD operations
	const addBook = () => {
		createBook()
		setViewMode("new")
	}

	const deleteBook = id => {
		setBooks(books.filter(book => book.id !== id))
	}

	const updateBook = (id, updatedBook) => {
		setBooks(books.map(book => (book.id === id ? updatedBook : book)))
		console.log("	"+JSON.stringify(books))
	}

	const editBook = book => {
		setViewMode("edit")
		setCurrentBook({ id: book.id, name: book.name, ownerEmail: book.ownerEmail })
	}

    
    return (
        <div className="flex-row">
            <div className="flex-large">
            {(mode == "edit") ? (
						<Fragment>
							<h3>Edit Book</h3>
							<BookForm
								editing={true}
								setViewMode={setViewMode}
								currentBook={currentBook}
								updateBook={updateBook}
							/>
				</Fragment> ) : 
					(mode == "new") ? 
						(
							<Fragment>
								<h3>Create Book</h3>
								<BookForm
									editing={false}
									setViewMode={setViewMode}
									currentBook={currentBook}
								updateBook={updateBook}
								/>
					</Fragment> ) :
						(
							<Fragment>
								<div className="centered">
									<h3>Books</h3>
								</div>
								<div style={{ display: "flex", justifyContent: "flex-end" }}>
									<button
										onClick={() => addBook()}
										className="button muted-button"
									>
										Add New Book
									</button>
								</div>
								<BookTable books={books} editRow={editBook} deleteBook={deleteBook} />
						</Fragment> )}
            </div>
        </div>
    )
}

export default Books