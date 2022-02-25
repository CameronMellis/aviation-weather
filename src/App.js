import React, { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';
import Paper from '@mui/material/Paper';

const getAVWX = async () => {
  const headers = {
    headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' },
  };
  const response = await fetch(
    'https://avwx.rest/api/metar/EGLL?options=&airport=true&reporting=true&format=json&onfail=error',
    headers
  );
  console.log(response);
  return await response.json();
};

function App() {
  const theme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  useEffect(() => {
    getAVWX();
  });

  return (
    <ThemeProvider theme={theme}>
      <Paper style={{ height: '100vh' }}>
        <div className='App'>
          <Header />
          <Table />
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
