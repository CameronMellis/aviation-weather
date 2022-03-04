import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function DenseTable(props) {
  console.log(props);
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} size='large' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Flight Rules</TableCell>
            <TableCell align='left'>METAR</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell align='center'>{row.flight_rules}</TableCell>
              <TableCell align='left'>{row.raw}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
