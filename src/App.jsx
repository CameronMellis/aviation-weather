import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Table from "./components/Table";
import NavBar from "./components/NavBar";
import Graphic from "./components/Graphic";
import "./App.css";
import useFetch from "./useFetch";

const Theme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [location, setLocation] = useState("YYT");
  const { avwx } = useFetch(location);

  return (
    <ThemeProvider theme={Theme}>
      <Grid sx={{ display: "flex", flexDirection: "column", height: "100vh" }}>
        <div className="App">
          <Table className="Table" data={avwx} />
          <Graphic location={location} />
        </div>
        <NavBar onSelect={setLocation} />
      </Grid>
    </ThemeProvider>
  );
}

export default App;

/* const response = fetch(   * FOR NOTAMS, NOT USED YET 
        'http://localhost:3000/weather/api/alpha/?point=CYDF%7Csite%7C-52.752,47.619&alpha=notam&notam_choice=default&_=1647198259823'
      );
      console.log(await (await response).json()); */
