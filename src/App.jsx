import React, { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Header from "./components/Header";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import "./App.css";
import useFetch from "./useFetch";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

const midnight =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_000.png";
const six =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_006.png";
const twelve =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_cldwx_012.png";
const midnightIce =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_000.png";
const sixIce =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_006.png";
const twelveIce =
  "https://flightplanning.navcanada.ca/Latest/gfa/anglais/produits/uprair/gfa/gfacn34/Latest-gfacn34_turbc_012.png";
const forecast = { midnight, six, twelve, midnightIce, sixIce, twelveIce };

function App() {
  const [location, setLocation] = useState("YYT");
  const [avwx, setAvwx] = useState([]);
  useEffect(() => {
    console.log("Current location is", location);

    const fetchData = async () => {
      const headers = {
        headers: {
          Authorization: "UoCyZ0DYZP9cMI2IxUJNoLWTrsxvorXAuAwrvGjjZYg",
        },
      };
      const wxdata = await Promise.all([
        fetch("https://avwx.rest/api/metar/CYYT", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYYT", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CYQX", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYQX", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CYDF", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYDF", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CYJT", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYJT", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CYYR", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYYR", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CZUM", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CZUM", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/metar/CYWK", headers).then((response) =>
          response.json()
        ),
        fetch("https://avwx.rest/api/taf/CYWK", headers).then((response) =>
          response.json()
        ),
      ]);
      console.log(wxdata);
      setAvwx(wxdata);
    };
    fetchData();
  }, [location]);
  const [value] = useFetch(location);
  console.log(value);

  const [selected, setSelected] = useState(forecast.six);
  const [selectedIce, setSelectedIce] = useState(forecast.sixIce);
  return (
    <ThemeProvider theme={Theme}>
      <div className="App">
        <Header />
        <Table className="Table" data={avwx} />
      </div>

      <div>
        <img className="GFA" id="GfaClouds" src={selected} alt="GFA 34" />
        <Button
          sx={{ m: 1, ml: 5, width: 227 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(forecast.midnight);
            setSelectedIce(forecast.midnightIce);
          }}
        >
          Issued 0000Z
        </Button>
        <Button
          sx={{ m: 1, width: 227 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(forecast.six);
            setSelectedIce(forecast.sixIce);
          }}
        >
          Issued 0600Z
        </Button>
        <Button
          sx={{ m: 1, width: 227 }}
          className="Buttons"
          variant="contained"
          size="small"
          onClick={() => {
            setSelected(forecast.twelve);
            setSelectedIce(forecast.twelveIce);
          }}
        >
          Issued 1200Z
        </Button>
        <img
          className="GFA"
          id="GfaIcing"
          src={selectedIce}
          alt="GFA 34 Icing and Turbulence"
        />
      </div>
      <NavBar onSelect={setLocation} />
    </ThemeProvider>
  );
}

export default App;

/*const response = fetch(   * FOR NOTAMS, NOT USED YET 
        'http://localhost:3000/weather/api/alpha/?point=CYDF%7Csite%7C-52.752,47.619&alpha=notam&notam_choice=default&_=1647198259823'
      );
      console.log(await (await response).json());*/
