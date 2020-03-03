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

const UserTable = props => 
{
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            {/* <th>Name</th> */}
            <StyledTableCell>Username</StyledTableCell>
            {/* <th>Actions</th> */}
          </TableRow>
        </TableHead>
      <TableBody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <TableRow key={user.id}>
            
              {/* <td>{user.name}</td> */}
              <TableCell component="th" scope="row">{user.username}</TableCell>
              {/* <td>
                <button
                  onClick={() => {
                    props.editRow(user)
                  }}
                  className="button muted-button"
                >
                  Edit
                </button>
                <button
                  onClick={() => props.deleteUser(user.id)}
                  className="button muted-button"
                >
                  Delete
                </button>
              </td> */}
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={3}>No users</TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  </TableContainer>
  )
}
export default UserTable
