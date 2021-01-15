import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

// function createData(name, calories) {
//   return { name, calories};
// }

// const rows = [
//   createData('Frozen yoghurt', 159 ),
//   createData('Ice cream sandwich', 237 ),
//   createData('Eclair', 262 ),
//   createData('Cupcake', 305 ),
//   createData('Gingerbread', 356 ),
// ];

export default function SentanceTable({gaps}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>  <b>Nemis Tilida  </b></TableCell>
            <TableCell align="left">  <b>Tarjimasi </b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gaps.map((sentance) => (
            <TableRow>
              <TableCell component="th" scope="row">
              {sentance.original}
              </TableCell>
              <TableCell align="left">{sentance.translate}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}