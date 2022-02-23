import React, { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import './App.css';

const getAVWX = async (data) => {
  const headers = { headers: { Authorization: '......' } };
  const response = await fetch(
    'https://jsonplaceholder.typicode.com/todos/1',
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
