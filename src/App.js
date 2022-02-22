import React, { useEffect } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import axios from 'axios';

const fetchData = () => {
  return axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((results) => {
      console.log(results);
      return results;
    })
    .catch((err) => {
      console.error(err);
    });
};

function App() {
  useEffect(() => {
    fetchData();
  });

  return (
    <div className='App'>
      <Header> </Header>
      <Table />
    </div>
  );
}

export default App;
