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
      <Table sx={{ minWidth: 750 }} size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Location</TableCell>
            <TableCell align='center'>Flight Rules</TableCell>
            <TableCell align='center'>Time&nbsp;(Z)</TableCell>
            <TableCell align='center'>Wind Direction&nbsp;(T)</TableCell>
            <TableCell align='center'>Wind Speed&nbsp;(kts)</TableCell>
            <TableCell align='center'>Visibility&nbsp;(SM)</TableCell>
            <TableCell align='center'>Precip</TableCell>
            <TableCell align='center'>Ceiling&nbsp;(AGL)</TableCell>
            <TableCell align='center'>Temp&nbsp;(C)</TableCell>
            <TableCell align='center'>Dewpoint</TableCell>
            <TableCell align='center'>Altimeter&nbsp;(inHg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.data.map((row) => (
            <TableRow
              key={row.location}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>{row.station}</TableCell>
              <TableCell align='center'>{row.flight_rules}</TableCell>
              <TableCell align='center'>{row.time.dt}</TableCell>
              <TableCell align='center'>{row.wind_direction.repr}</TableCell>
              <TableCell align='center'>{row.wind_speed.repr}</TableCell>
              <TableCell align='center'>{row.visibility.value}</TableCell>
              <TableCell align='center'>{row.precip}</TableCell>
              <TableCell align='center'>{row.clouds.repr}</TableCell>
              <TableCell align='center'>{row.temperature.repr}</TableCell>
              <TableCell align='center'>{row.dewpoint.repr}</TableCell>
              <TableCell align='center'>{row.altimeter.repr}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
