import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Table from './components/Table';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import './App.css';
import notams from 'notams';
import { parse } from 'superagent';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  const PILOTWEB_BASE_URL = 'https://pilotweb.nas.faa.gov/PilotWeb'
  const superagent = require('superagent') 

  notams.fetch = async (icaos, options = {}) => {
    const formatType = options.format || 'ICAO'
  
    if (Array.isArray(icaos)) {
      icaos = icaos.join(',')
    }
  
    const response = await superagent
      .get(`${PILOTWEB_BASE_URL}/notamRetrievalByICAOAction.do`)
      .query({
        reportType: 'RAW',
        mode: 'no-cors',
        method: 'displayByICAOs',
        actionType: 'notamRetrievalByICAOs',
        retrieveLocId: icaos,
        formatType
      })
    return parse(response.text)
  }

  notams.fetch([ 'PADK', 'PADU' ], { format: 'DOMESTIC' }).then(results => {
    console.log(JSON.stringify(results, null, 2))
  })

  const [metars, setMetars] = useState([]);
  const fetchData = async () => {
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
        <Table  data={metars} />
      </div>
      <Button onClick={() => fetchData()} color='primary' variant='contained'>
        Refresh
      </Button>
    </ThemeProvider>
  );
}

export default App;
