import React, { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

const getAVWX = async (data) => {
  const headers = { headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' } };
  const response = await fetch(
    'https://avwx.rest/api/metar/CYYT?options=&airport=true&reporting=true&format=json&onfail=error',
    headers
  );
  console.log(response);
  return await response.json();
};

function App() {
  useEffect(() => {
    getAVWX();
  });

  return (
    <div className='App'>
      <Header />
      <Table />
    </div>
  );
}

export default App;
