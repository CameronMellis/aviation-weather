import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import './components/RegEx';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

export default function DenseTable(props) {
  console.log(props);
  return (
    <ThemeProvider theme={theme}>
      <TableContainer
        sx={{ width: '100%', maxWidth: 700, fontSize: '15px' }}
        component={Paper}
      >
        <Typography variant='body1' component='div' gutterBottom>
          <Table size='med' aria-label='a dense table'>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontSize: 15, fontWeight: 'bold' }}
                  align='center'
                >
                  Flight Rules
                </TableCell>
                <TableCell
                  sx={{ fontSize: 15, fontWeight: 'bold' }}
                  align='left'
                >
                  METAR/TAF
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {props.data.map((row) => (
                <TableRow key={row.raw} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell sx={{ fontSize: 15, fontWeight: 'bold' }} align='center'> {row.flight_rules}</TableCell>
                  <TableCell sx={{ fontSize: 14, fontWeight: 'medium' }} align='left'>{row.raw}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Typography>
      </TableContainer>
    </ThemeProvider>
  );
}
