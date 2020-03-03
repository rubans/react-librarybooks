import React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const BookTable = props => {
  const classes = useStyles();
  return (
      <TableContainer component={Paper}>
          <Table className={classes.table} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Book</StyledTableCell>
                <StyledTableCell></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.books.length > 0 ? (
                props.books.map(book => (
                  <TableRow key={book.id}>
                      <TableCell component="th" scope="row">{book.name}</TableCell>
                      <TableCell>
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
                            className="btn btn-primary">
                            Borrow
                          </a>
                        </div>
                      </TableCell>
                    </TableRow>
                ))
              ) : (
                <TableRow colSpan={3}><TableCell>No books</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
  )
}

export default BookTable
