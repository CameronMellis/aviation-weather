import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


function createData(
  name,
  location,
  time,
  winddirection,
  windspeed,
  visibility,
  precip,
  ceiling,
  temp,
  dewpoint,
  altimeter
) {
  return {
    name,
    location,
    time,
    winddirection,
    windspeed,
    visibility,
    precip,
    ceiling,
    temp,
    dewpoint,
    altimeter,
  };
}

const rows = [
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter),
  createData(location, time, winddirection, windspeed, visibility, precip, ceiling, temp, dewpoint, altimeter)
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 750 }} size='medium' aria-label='a dense table'>
        <TableHead>
          <TableRow>
            <TableCell>Location</TableCell>
            <TableCell align='right'>Location</TableCell>
            <TableCell align='right'>Time&nbsp;(Z)</TableCell>
            <TableCell align='right'>Wind Direction&nbsp;(T)</TableCell>
            <TableCell align='right'>Wind Speed&nbsp;(kts)</TableCell>
            <TableCell align='right'>Visibility&nbsp;(SM)</TableCell>
            <TableCell align='right'>Precip</TableCell>
            <TableCell align='right'>Ceiling&nbsp;(AGL)</TableCell>
            <TableCell align='right'>Temp&nbsp;(C)</TableCell>
            <TableCell align='right'>Dewpoint</TableCell>
            <TableCell align='right'>Altimeter&nbsp;(inHg)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.location}</TableCell>
              <TableCell align='right'>{row.time}</TableCell>
              <TableCell align='right'>{row.winddirection}</TableCell>
              <TableCell align='right'>{row.windspeed}</TableCell>
              <TableCell align='right'>{row.visibility}</TableCell>
              <TableCell align='right'>{row.precip}</TableCell>
              <TableCell align='right'>{row.ceiling}</TableCell>
              <TableCell align='right'>{row.temp}</TableCell>
              <TableCell align='right'>{row.dewpoint}</TableCell>
              <TableCell align='right'>{row.altimeter}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
