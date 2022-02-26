import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import theme from './components/Theme';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';

const getAVWX = async () => {
  /*const [metars, setMetars] = useState(null);
  setMetars(response.data);*/
  const headers = {
    headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' },
  };
  const response = await fetch('https://avwx.rest/api/metar/CYYT', headers);
  console.log(response);
  return await response.json();
};

function App() {
  useEffect(() => {
    getAVWX();
  });

  return (
    <ThemeProvider theme={theme}>
      <div className='App'>
        <Header />
        <Table />
      </div>
    </ThemeProvider>
  );
}

export default App;
