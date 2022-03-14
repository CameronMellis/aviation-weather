import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import NavBar from './components/NavBar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import './App.css';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  const [metars, setMetars] = useState([]);
  const fetchData = async () => {
    /*const response = fetch('http://localhost:3000/weather/api/alpha/?point=CYYT%7Csite%7C-52.752,47.619&alpha=notam&notam_choice=default&_=1647198259823')
    console.log(await(await response).json())*/
    const headers = {
      headers: { Authorization: 'UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg' },
    };
    const data = await Promise.all([
      fetch('https://avwx.rest/api/metar/CYYT', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CYYT', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/metar/CYQX', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CYQX', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/metar/CYDF', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CYDF', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/metar/CYJT', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CYJT', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/metar/CYYR', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CYYR', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/metar/CZUM', headers).then((response) =>
        response.json()
      ),
      fetch('https://avwx.rest/api/taf/CZUM', headers).then((response) =>
        response.json()
      ),
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
        <Table className='Table' data={metars} />
      </div>

      <div>
        <img
          className='GFA'
          src='https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_012.png'
          alt='GFA 34'
        />
        <img
          className='GFA'
          src='https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_012.png'
          alt='GFA 34 Icing and Turbulence'
        />
      </div>
      <NavBar></NavBar>
    </ThemeProvider>
  );
}

export default App;
