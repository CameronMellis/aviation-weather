import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './App.css';

const theme = createTheme({
  palette: {
    type: 'dark',
  },
});

function App() {
  const [metars, setMetars] = useState([]);

  const fetchData = async () => {
    const headers = {
      headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' },
    };
    const response = await fetch('https://avwx.rest/api/metar/CYYT', headers);
    const data = await response.json();
    console.log(data);
    setMetars([data]);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <Table data={metars} />
      </div>
      <Button color='primary' variant='contained'>
        Test Button
      </Button>
    </ThemeProvider>
  );
}

export default App;
