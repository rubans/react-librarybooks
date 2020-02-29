import React from 'react'

const BookTable = props => (
  <table class="table table-bordered">
    <thead>  
      <tr className="table-primary">
        <th>Book</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {props.books.length > 0 ? (
        props.books.map(book => (
          <tr key={book.id}>
            <td>{book.name}</td>
            <td>
            <div style={props.isAdmin ? { display: "flex", justifyContent: "flex-end" }: { display : "none"}}>
                <button
                  onClick={() => {
                    props.editRow(book)
                  }}
                  className="btn btn-primary"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteBook(book.id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </div>
              <div style={(props.isLoggedIn && !props.isAdmin) ? { display: "flex", justifyContent: "flex-end" }: { display : "none"}}>
                <a href={`mailto:${book.ownerEmail}
                  ?subject=Book Library Borrow Request - ${book.name}
                  &body=Dear Sir/Madam,${escape('\r\n')} I'm interested in borrowing ${book.name}.${escape('\r\n')}Could you send me more information please?`}
                  className="button muted-button">
                  Borrow
                </a>
              </div>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No books</td>
        </tr>
      )}
    </tbody>
  </table>
)

export default BookTable
