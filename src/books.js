import React, { useState, Fragment, useEffect } from 'react'
import BookForm from './forms/BookForm'
import BookTable from './tables/BookTable'
import {firebase, updateBookInDB, getBooksInDB, deleteBookInDB} from './firebaseClient'
//import {loggedIn} from './userContext'

const Books = (props) => {
	//const authUser = CurrentUser(firebase);
	console.log("book:"+JSON.stringify(props))
	//console.log("isAuth1:"+loggedIn())
	const[books, setBooks] = useState([]);
	useEffect(() => {
		const fetchData = async() => {
			const data = await getBooksInDB();
			console.log("load data:"+JSON.stringify(data))
			setBooks(data)
		}
		fetchData();
	},[]);

	// Mock Data
	// const booksData = 	[
	// 	{ id: null, name: 'Tania', ownerEmail: 'floppydiskette' }
	// ]
	console.log("loaded books:"+JSON.stringify(books))

	const initialFormState = { id: null, name: '', ownerEmail: '' }

	// Setting state
	//const [ books, setBooks ] = useState(booksData)
	console.log("set books:"+JSON.stringify(books))
	const [ currentBook, setCurrentBook ] = useState(initialFormState)
	const [ mode, setViewMode ] = useState("view")

	// CRUD operations
	const addBookView = () => {
		setViewMode("new")
	}

	const deleteBook = id => {
		deleteBookInDB(id);
		setBooks(books.filter(book => book.id !== id))
	}

	const updateBook = (id, updatedBook) => {
		updateBookInDB(updatedBook);
		setBooks(books.map(book => (book.id === id ? updatedBook : book)))
		console.log("update book"+JSON.stringify(books))
	}

	const editBookView = book => {
		setViewMode("edit")
		setCurrentBook({ id: book.id, name: book.name, ownerEmail: book.ownerEmail })
	}

    
    return (
        <div className="container flex-row">
            <div className="flex-large">
            {(mode == "edit") ? (
						<Fragment>
							<div className="centered">
								<h3>Edit Book</h3>
							</div>
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
								<div className="centered">
									<h3>Create Book</h3>
								</div>
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
										onClick={() => addBookView()}
										className="button muted-button"
									>
										Add New Book
									</button>
								</div>
								<BookTable books={books} editRow={editBookView} deleteBook={deleteBook} />
						</Fragment> )}
            </div>
        </div>
    )
}

export default Books