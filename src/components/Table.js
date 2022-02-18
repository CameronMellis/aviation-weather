import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter) {
  return { name, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter };
}

const rows = [
  createData('CYYT', 2200, 220, 24, "P6", "FG", "OVC007","5", "5", 2985),
  createData('CYQX', 2220, 210, 18, "5", "", "OVC018", "4", "7", 2970),
  createData('CYDF', 2220, 240, 16, "P6", "", "SKC", "6", "7", 2972),
  createData('CYJT', 2220, 220, 23, "3", "-RA", "OVC005", "2", "2", 2970),
  createData('CYYR', 2220, 200, 14, "P6", "", "SKC", "-5", "0", 2994),
];

export default function DenseTable() {
  return (
    <TableContainer component= {Paper}>
      <Table sx={{ minWidth: 750 }} size="medium" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align="right">Time&nbsp;(Z)</TableCell>
            <TableCell align="right">Wind Direction&nbsp;(T)</TableCell>
            <TableCell align="right">Wind Speed&nbsp;(kts)</TableCell>
            <TableCell align="right">Visibility&nbsp;(SM)</TableCell>
            <TableCell align="right">Precip</TableCell>
            <TableCell align="right">Ceiling&nbsp;(AGL)</TableCell>
            <TableCell align="right">Temp&nbsp;(C)</TableCell>
            <TableCell align="right">Dewpoint</TableCell>
            <TableCell align="right">Altimeter&nbsp;(inHg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.time}</TableCell>
              <TableCell align="right">{row.winddirection}</TableCell>
              <TableCell align="right">{row.windspeed}</TableCell>
              <TableCell align="right">{row.visibility}</TableCell>
              <TableCell align="right">{row.precip}</TableCell>
              <TableCell align="right">{row.ceiling}</TableCell>
              <TableCell align="right">{row.temp}</TableCell>
              <TableCell align="right">{row.dewpoint}</TableCell>
              <TableCell align="right">{row.altimeter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
