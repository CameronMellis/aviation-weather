import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  var notams = require('notams');
  notams(['PADK', 'PADU'], { format: 'DOMESTIC' }).then(results => {
    console.log(results)
  })

  const [metars, setMetars] = useState([]);

  const fetchData = async () => {
    const headers = {
      headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' },
    };
    const data = await Promise.all([
      fetch('https://avwx.rest/api/metar/CYYT', headers).then((response) => response.json()),
      fetch('https://avwx.rest/api/taf/CYYT', headers).then((response) => response.json()),
      fetch('https://avwx.rest/api/metar/CYQX', headers).then((response) => response.json()),
      fetch('https://avwx.rest/api/taf/CYQX', headers).then((response) => response.json()),
      fetch('https://avwx.rest/api/metar/CYDF', headers).then((response) => response.json()),
      fetch('https://avwx.rest/api/taf/CYDF', headers).then((response) => response.json()),
    ]);
    console.log(data);
    setMetars(data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='App'>
      <Header />
      <Table data={metars} />
      </div>
      <Button onClick={() => window.location.reload(false)} color='primary' variant='contained'>
        Refresh
      </Button>
    </ThemeProvider>
  );
}

export default App;
